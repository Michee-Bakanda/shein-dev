import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import 'swiper/css/autoplay';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
  
      >
        <SwiperSlide>
        
        </SwiperSlide>
        <SwiperSlide>
    
        </SwiperSlide>
        <SwiperSlide>
        bhj
        </SwiperSlide>
        <SwiperSlide>
g
        </SwiperSlide>
      </Swiper>
    </>
  );
}
