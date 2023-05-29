import { useNavigate } from 'react-router-dom';
import './Home.style.css';
import Page2 from './page2/page2.home.component';
export default function Home() {
    const navigate=useNavigate();
    return (
        <>
            <div className='home-container'>
                <div className='left-home-section'>
                    <h1>Get started your exciting <span>journey</span> with us.</h1>
                    <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.</p>
                    <button className='discover-now' onClick={()=>{
                        navigate('/tour');
                    }}>Discover Now</button>
                </div>
                <div className='right-home-section'>
                    <img src={require('../MEDIA/Home.jpg')} alt=''/>
                </div>
            </div>
            <div className='knowAboutUs-gallery-buttons'>
                <button onClick={()=>{
                    navigate('/destination')
                }}>Explore Now</button>
            </div>
            <Page2 />
        </>
    )
}