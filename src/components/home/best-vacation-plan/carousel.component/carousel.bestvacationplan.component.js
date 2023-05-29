import "./carousel.bestvacationplans.style.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';
import BasicModal from "../../Modal/Modal.component";
import StarIcon from '@mui/icons-material/Star';
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
        <>
            <Carousel responsive={responsive}>
                {data.map((ele, idx) => {
                    return (
                        <button key={ele.name + idx} className={"carousel-cards-best-vacation-plan "} >
                            <button className="bookNow" onClick={(e) => {
                                setOpen(true);
                                setKey(idx);
                            }}>Know More </button>
                            <img src={ele.imageSrc} alt="productImage" />
                            <div className='card-details'>
                                <div className='name-days'>
                                    <h3 className="element-name">{ele.name}</h3>
                                </div>
                                <div className='price-ratings'>
                                    <p><StarIcon className="element-rating"/> {ele.rating}</p>
                                </div>
                            </div>
                        </button>
                    )
                })}
                {
                    (typeof (key) === "number" ? <BasicModal open={open} setOpen={setOpen} data={data} targetData={key} /> : null)
                }
            </Carousel>
        </>
    )
}
