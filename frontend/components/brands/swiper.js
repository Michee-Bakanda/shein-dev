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
            height: "420px",
            width: "310px",
            backgroundImage: `url(./1649409970a4434794b664f8a646d73b655cdc539a.gif   )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "420px",
            width: "310px",
            backgroundImage: `url(./164941001880f6036a6729b456d25768554769515c.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "420px",
            width: "310px",
            backgroundImage: `url(./1648447561d9be7d1570671854e491655a187b9a73.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "420px",
            width: "310px",
            backgroundImage: `url(./164844761835605447a47ef0d8925da58b70e0d86c.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "420px",
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
            height: "420px",
            width: "310px",
            backgroundImage: `url(./1648890397feadd58dd5b22d07833a0cf8414ecd2a.gif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "420px",
            width: "310px",
            backgroundImage: `url(./1648189428232e1c77600e172787a6f94f932a1bd4.gif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "420px",
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
            height: "420px",
            width: "310px",
            backgroundImage: `url(./1648890421eb8ce49873bbe0ffba5876f61b5a8904.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            // border: "1px solid red",
            height: "420px",
            width: "310px",
            backgroundImage: `url(./1649410086b236558affa80c92009081a2a3467b82.gif)`,
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
