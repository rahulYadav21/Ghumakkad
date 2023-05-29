import React from 'react';
import './Destination.css'
const Destination = () => {
    const background = require('./media/destination background.jpg')
    return (
        <div className='destination-container'>


            <img src={background} alt='background' className='backgroundImage' />


            <img src='//roam.qodeinteractive.com/wp-content/uploads/2017/08/landing-slider-img-1.png' alt='person_img' className='personImage' />


            <h1 className='destinationTitle'>
                <span className='word1 ghumakkadWord'>G</span>
                <span className='word2 ghumakkadWord'>H</span>
                <span className='word3 ghumakkadWord'>U</span>
                <span className='word4 ghumakkadWord'>M</span>
                <span className='word5 ghumakkadWord'>A</span>
                <span className='word6 ghumakkadWord'>K</span>
                <span className='word7 ghumakkadWord'>K</span>
                <span className='word8 ghumakkadWord'>A</span>
                <span className='word9 ghumakkadWord'>D</span>
            </h1>
            <div className='destinationBody'>
                <div className='vacationOnTheSea subParts'>
                    <button className='subParts-buttons'>Vacation on The Sea</button>
                </div>
                <div className='trekking subParts'>
                    <button className='subParts-buttons'>Trekking</button>
                </div>
                <div className='exoticDestination subParts'>
                    <button className='subParts-buttons'>Exotic Destination</button>
                </div>
                <div className='cityTour subParts'>
                    <button className='subParts-buttons'>City Tour</button>
                </div>
            </div>
        </div>
    )
}

export default Destination;