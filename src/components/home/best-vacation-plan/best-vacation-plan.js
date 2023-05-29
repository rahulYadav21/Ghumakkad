import MultiImage from "./carousel.component/carousel.bestvacationplan.component";
import WhatPeopleSayAboutUs from "../what-people-say-about-us/what-people-say-about-us";
import './best-vacation-plan.css';
export default function BestVacationPlan() {
    const data=[
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '5.0',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '4.5',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '4.2',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '4.1',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '4.7',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '5.0',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '4.9',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '4.7',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '4.7',
        },
        {
            imageSrc: 'https://i0.wp.com/lighttravelaction.com/wp-content/uploads/2020/01/lighttravelaction-best-area-to-stay-in-jaipur.png?fit=1200%2C675&ssl=1',
            name: 'Taj Mahal',
            rating: '5.4'
        },
    ]
    return (
        <div className="best-vacation-plan-container">
            <div className="best-vacation-plan-heading">
                <h1>Best <span>vacation plan</span></h1>
                <p>Plan your perfect vacation with our travel agency. Choose <br />among hundreds of all-inclusive offers!</p>
            </div>
            <div>
                <MultiImage data={data}/>
            </div>
            <WhatPeopleSayAboutUs />
        </div>
    )
}