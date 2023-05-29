import './tour.style.css';
import Carousel from '../home/Carousel/carousel.component'
import Subscribe from '../home/subscribe/Subscribe.component'
export default function Tour() {
    const data = [
        {
            imageSrc: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
            name:"BOOK NOW"
        },
        {
            imageSrc: "https://media.istockphoto.com/id/465334746/photo/lucknow.jpg?s=612x612&w=0&k=20&c=sagryyDFCHdWqp0jAbM-ou8QwSpCRlhtuHkXLN2rek4=",
            name:"BOOK NOW"
        },
        {
            imageSrc: "https://media.istockphoto.com/id/614243374/photo/maharajahs-palace-in-mysore.jpg?s=612x612&w=0&k=20&c=Yy3F7DPjI627IEfJwa-Q0nKWlfSlNv2kxe4LSTUU5lk="
        },
        {
            imageSrc: "https://thumbs.dreamstime.com/b/mysore-palace-karnataka-india-november-th-beautiful-decorated-interior-ceiling-private-durbar-hall-called-diwan-e-khas-154553921.jpg",
            name:"BOOK NOW"
        },
        {
            imageSrc: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
            name:"BOOK NOW"
        }
    ]

    const data2=[
        {
            imageSrc:"https://www.business.hsbc.com/-/media/cmb/international-business-guide/us/images/us-main.jpg?h=1200&w=1920&la=en-GB&hash=08AAA21880CC8FDF11E5DE7BB1FF9126"
        },
        {
            imageSrc: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/28/11/routeburn-track.jpg?width=1200&auto=webp&quality=75"
        },
        {
            imageSrc: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/28/11/routeburn-track.jpg?width=1200&auto=webp&quality=75"
        },
        {
            imageSrc: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/28/11/routeburn-track.jpg?width=1200&auto=webp&quality=75"
        },
        {
            imageSrc: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/28/11/routeburn-track.jpg?width=1200&auto=webp&quality=75"
        },
        {
            imageSrc: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/28/11/routeburn-track.jpg?width=1200&auto=webp&quality=75"
        },
        {
            imageSrc: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/28/11/routeburn-track.jpg?width=1200&auto=webp&quality=75"
        }
    ]
    return (
        <>
            <img src="https://media.tenor.com/GLVCw4f0GVIAAAAC/tom-sad.gif" alt="bye bye" className='background-tour' />
            <div className="tour-container">
                <h1>Let's Go...</h1>
                <p>The Ghummakad is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. </p>
                <h1 className='indian-tours'>Indian Tours</h1>
                <Carousel data={data}/>

                <h1 className='international-tours'>International Tours</h1>
                <Carousel data={data2}/>
            </div>
            <Subscribe/>
        </>
    )
}