import './navbar.style.css';
import {Link, Outlet, useNavigate} from 'react-router-dom'
export default function Navbar() {
    const navigate=useNavigate();
    return (
        <>
            <header>

                <div className='logo-main'>
                    <img src={require('../MEDIA/kisspng-agra-delhi-package-tour-travel-agent-tamilnadu-5ac480b4aa1631.3036496115228274446967.png')} alt="Ghumakkad" /> <h3>Ghumakkad</h3>
                </div>

                <div className='nav-options'>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="about">About</Link></button>
                    <button><Link to="destination">Destination</Link></button>
                    <button><Link to="tour">Tour</Link></button>
                    <button><Link to="contactUs">Contact Us</Link></button>
                </div>

                <div className='login-signup'>
                    <button className='login' onClick={()=>{
                        navigate('/login')
                    }
                    }>Login</button>
                    <button className='signup'>Sign up</button>
                </div>
            </header>
            <Outlet />
        </>
    )
}