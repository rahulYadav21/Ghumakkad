import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import WalletIcon from '@mui/icons-material/Wallet';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import './page3.home.component.css';
import ExclusiveDealsAndDiscounts from '../exclusive-deals-&-discounts/exclusive-deals-&-discounts';
export default function Page3() {
    return (
        <>
            <div className="page3-container">
                <div className="page3-heading">
                    <h1>Things you need <span>to do</span></h1>
                    <p>We ensure that you will embark on a perfectly planned,<br />sale vacation at a place you can afford</p>
                </div>
                <div className="page3-cards">
                    <div className="signup-card cards">
                        <HighlightAltIcon className='signup-icon' />
                        <h2>Sign Up</h2>
                        <p>Completes all the work associated with planning and processing</p>
                    </div>
                    <div className="worthofmoney-card cards">
                        <WalletIcon className='wallet-icon' />
                        <h2>Worth of Money</h2>
                        <p>After successful aceess then book from exclusive deals & pricing</p>
                    </div>
                    <div className="excitingtravel-card cards">
                        <PersonPinCircleIcon className='travel-icon' />
                        <h2>Exciting Travel</h2>
                        <p>Start and explore a wide range of exciting travel experience</p>
                    </div>
                </div>
            </div>
            <ExclusiveDealsAndDiscounts />
        </>
    )
}