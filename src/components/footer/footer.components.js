import './footer.components.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
    return (
        <>
        <footer>
            <div className='social-media-links'>
                <h2>Ghumakkad</h2>
                <p>Book your trip in minute, get full <br/>Control for much loonger.</p>
                <div className='links'>
                    <FacebookIcon  className='social-icons'/>
                    <InstagramIcon  className='social-icons'/>
                    <TwitterIcon className='social-icons' />
                </div>
            </div>
            <div className='company-contact-more'>
                <div className='company-list'>
                    <button disabled className='main-button'>Company</button>
                    <button className='sub-buttons'>About</button>
                    <button className='sub-buttons'>Careers</button>
                    <button className='sub-buttons'>Logistic</button>
                    <button className='sub-buttons'>Privacy & Policy</button>
                </div>
                <div className='contact-list'>
                    <button disabled className='main-button'>Contact</button>
                    <button className='sub-buttons'>Help/FAQ</button>
                    <button className='sub-buttons'>Press</button>
                    <button className='sub-buttons'>Affilates</button>
                </div>
                <div className='more-list'>
                    <button disabled className='main-button'>More</button>
                    <button className='sub-buttons'>Press Centre</button>
                    <button className='sub-buttons'>Our Blog</button>
                    <button className='sub-buttons'>Low fare tips</button>
                </div>
            </div>
        </footer>
        <p className='copywrite'>Copyright, Guide 2022. All rights reserved.</p>
        <p className='copywrite'>with Terms and Conditions</p>
        </>
    )
}