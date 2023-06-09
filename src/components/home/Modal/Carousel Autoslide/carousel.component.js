import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
export default function CarouselFull(){
  return (
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
  <div><img src="https://curlytales.com/wp-content/uploads/2020/09/BaspaRiver_byvineetsingh-2.jpg" alt="himachal-01"/></div>
</Carousel>
)}