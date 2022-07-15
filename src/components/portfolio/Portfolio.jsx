import React from 'react';
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../../constants/data';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard} from "swiper";

const Portfolio = () => {
  const slides = data.portfolio.map((portf, index)=> {
    return(
      <SwiperSlide key={index}>
        <img src={portf} alt='' />
      </SwiperSlide>
    )
    
  })
  return (
    <section className='portfolio container' id="portfolio">
      <h2 className='portfolio-h2'>
        Our Awesome Portofolio
      </h2>
      <Swiper
        // centeredSlides={true}
        cssMode={true}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </section>
  )
}

export default Portfolio