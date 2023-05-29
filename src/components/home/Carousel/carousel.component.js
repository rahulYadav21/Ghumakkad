import "./carousel.style.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';
import BasicModal from "../Modal/Modal.component";
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function MultiImage({ data }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [open, setOpen] = useState(false);
    const [key, setKey] = useState();
    return (
        <div className="carouselResponsive">
            <Carousel responsive={responsive}>
                {data.map((ele, idx) => {
                    return (
                        <button key={ele.name + idx} className={"carousel-cards "} >
                            <button className="bookNow" onClick={(e) => {
                                setOpen(true);
                                setKey(idx);
                            }}>Book Now</button>
                            <img src={ele.imageSrc} alt="productImage" />
                            <div className='card-details'>
                                <div className='name-days'>
                                    <h3 className="element-name">{ele.name}</h3>
                                    <p><CalendarMonthIcon/>{ele.days} </p>
                                </div>
                                <div className='price-ratings'>
                                    <p><StarIcon className="element-rating" />{ele.rating}</p>
                                    <p className="element-price"> <AttachMoneyIcon />{ele.price}</p>
                                </div>
                            </div>
                        </button>
                    )
                })}
                {
                    (typeof (key) === "number" ? <BasicModal open={open} setOpen={setOpen} data={data} targetData={key} /> : null)
                }
            </Carousel>
        </div>
    )
}
