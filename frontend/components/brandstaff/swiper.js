import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slide() {
  return (
    <>
    <p style={{textAlign: "center", fontWeight: "bold", fontSize: "30px"}}>Brands</p>
      <Swiper
        style={{
          height: "65vh",
          backgroundColor: "#F5F5F5",
          padding: "20px 30px",
        }}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./16500119043f45871a52e3b2e0a833be0fa773699b.gif )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./1650011945f7b459a358e28960183820008bedc8dd.gif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./1650261781a18a3de6056378394f31d32f93494f95.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./1650011977fb6056c569e3ba845e627334e8e7a911.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./1649410045e6d1978763774129e5647e1f4a36cd0e.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./16500120179566ab1fbe0e560b1249a43f7899463a.gif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./16502675343dc3a7be671a2c0cf2fc443ea18ff80d.gif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./1648283427b95189d322e421149096ca30b155811c.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./1650012068c8dd24379918638e4cfb27287ba13401.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "350px",
            width: "310px",
            backgroundImage: `url(./16500121700fe027c965302c219690144eb45fc49b.gif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
        </SwiperSlide>
      </Swiper>
    </>
  );
}
