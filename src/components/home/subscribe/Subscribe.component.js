import './Subscribe.component.css';
import Footer from '../../footer/footer.components';
export default function Subscribe() {
    return (
        <>
            <div className='subscribe-container'>
                <div class="switch__circle switch__circle--t is-txr">
                    <img src="https://em-content.zobj.net/source/noto-emoji-animations/344/bell_1f514.gif" alt="subscribe"/>
                </div>
                <h1>Subscribe and get exclusive<br /> deals & offer</h1>
                <div className='enter-your-email'>
                    <input type="email" placeholder={"Enter your mail"} className="input-mail" />
                    <button className='subscribe'>Subscribe</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}   