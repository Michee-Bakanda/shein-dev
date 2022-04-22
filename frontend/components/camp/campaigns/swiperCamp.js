import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Slide() {
  return (
    <> 
    <h2 style={{ textAlign:'center'}}>#SHEINcampaigns</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp.png"/>
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp2.jpg"/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp3.jpg"/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp4.jpg"/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp5.jpg"/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "100%", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp6.jpg"/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp7.jpg"/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "200px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp8.jpg"/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "200px", width: "170px", border: "2px solid red"}}
        ><img style={{
            height:'100%',
            width:'100%'
        }} src="/campaigns/camp.png"/>
            
        </SwiperSlide>
      </Swiper>
    </>
  );
}
