import HandshakeIcon from '@mui/icons-material/Handshake';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './contactUs.style.css'
import Subscribe from '../home/subscribe/Subscribe.component'
export default function ContactUs() {
    return (
        <>
            <div className='contact-container'>
                <div className='handshake-icon'>
                    <HandshakeIcon  className='icon'/>
                </div>
                    <p>CONTACT US</p>
                <div className='lets-travel-together'>
                    <h1>Let's travel somewhere together</h1>
                </div>
                <div className='contact-cards'>
                    <div className='contact-card1 contact-info'>
                        <h2 className='yellow-heading'>Contact</h2>
                        <h3 className='sub-heading'><MailOutlineIcon/>Email</h3>
                        <p>ghumakkad.com</p>
                    </div>
                    <div className='contact-card2 contact-info'>
                        <h2 className='yellow-heading'>Call</h2>
                        <h3 className='sub-heading'><LocalPhoneIcon/>Phone</h3>
                        <p>ghumakkad.com</p>
                    </div>
                    <div className='contact-card3 contact-info'>
                        <h2 className='yellow-heading'>Office</h2>
                        <h3 className='sub-heading'><AddLocationIcon/>Location</h3>
                        <p>ghumakkad.com</p>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </>
    )
}