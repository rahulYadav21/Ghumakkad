import CarouselSliders from "./carousel_full/js/EmblaCarousel.component";
import './about.style.css';
import Footer from '../footer/footer.components'
import StoreIcon from '@mui/icons-material/Store';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LanguageIcon from '@mui/icons-material/Language';
import { TypeAnimation } from "react-type-animation";
export default function About() {
    const OPTIONS = {}
    const SLIDE_COUNT = 7
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <CarouselSliders slides={SLIDES} options={OPTIONS} />
            <TypeAnimation className="between-carousel"
                sequence={[
                    "Want to know about us?", 
                    3000, 
                    'Want to be with us?', // Deletes 'One' and types 'Two'
                    3000, // Waits 2s
                    'Want to travel with us?', 
                    3000,
                    'Want to enjoy with us?',
                    3000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em", display: "inline-block" }}
            />
            <div className="about-us-container">
                <div className="about-this-site about-sub">
                    <h2>About this site</h2>
                    <p>The Ghummakad is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.</p>
                </div>
                <div className="who-are-we about-sub">
                    <h2>Who we are</h2>
                    <p>Columbus Travel Media (CTM) is one of the most respected and successful names in the global travel industry, with a long and rich company heritage spanning 30 years. The definitive resource for global travel content, its reputation has been built on journalistic credibility. CTM is dedicated to the provision of objective, accurate, informative and reliable travel content in various formats, including the World Travel Guide for consumers, Columbus Travel Professional for travel industry professionals and extensive licensed and bespoke content for commercial partners through its specialist division, Columbus Content Solutions. A fast-growing, pioneering and diverse global travel content business, contact us to find out more about us.</p>
                </div>
                <div className="our-team about-sub">
                    <h2>Our team</h2>
                    <p>We’ve been travelling the world for over 30 years, building a reputation for providing quality travel content that’s inspiring, engaging and informative. With all of our guides and features written and updated by a global network of expert travel writers that includes some of the best names in the business, we pride ourselves on producing content that stands out from the crowd. Regrettably, we aren’t able to accept guest posts and won’t be able to reply to guest post requests.</p>
                </div>
                <div className="content-solutions about-sub">
                    <h2>Content solutions</h2>
                    <p>As one of the world’s leading travel content providers, Columbus Travel Media (CTM) specialises in two distinct services for brands and retailers; its flexible approach means it can package existing travel content, or its editorial team can develop unique, accurate and tailored content in a style and tone to match briefs. CTM is the definitive supplier for many international travel brands.</p>
                </div>
            </div>
            <div className="our-history">
                <div className="store history-sections">
                    <StoreIcon className="history-icons"/>
                    <p>In 2010, we started with a small store in a small town in Hamirpur, Himachal Pradesh.</p>
                </div>
                <div className="Office history-sections">
                    <CorporateFareIcon className="history-icons"/>
                    <p>In 2020, With our hardwork and devotion to serve people we sucessfully planned 10k famlies</p>
                </div>
                <div className="online history-sections">
                    <LanguageIcon className="history-icons"/>
                    <p>In 2022, helped people to remember their trips and make them one of the best moment of their life</p>
                </div>
            </div>
            <Footer />
        </>
    )
}