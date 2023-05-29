import Page3 from '../page3/page3.home.component';
import './page2.home.style.css';
export default function Page2() {
    return (
        <>
            <div className="page2-container">
                <div className='page2-image'>
                    <img src={require('../../MEDIA/Screenshot 2023-03-29 163619.png')} alt="page2img" />
                </div>
                <div className='page2-text'>
                    <div className='heading-1'><span className='heading1-design-outer'>01</span></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className='heading-2'><span className='heading2-design-outer'>02</span></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className='heading-3'><span className='heading3-design-outer'>03</span></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
            </div>
            <Page3 />
        </>
    )
}