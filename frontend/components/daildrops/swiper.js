import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { border } from "@mui/system";

export default function Slide() {
  return (
    <>
      <div
        style={{
          height: "105vh",
          padding: "10px 0px",
          background: "#fff",
          margin:0
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            //   background: "#fff",
            //   height: "100%",
          }}
        >
          #dailydrops
        </p>
        <a href="#">
          <div
            style={{
              cursor: "pointer",
              // border: "2px solid red",
              height: "80vh",
              backgroundImage: `url(./16500115766a95c23d1069dd8fe48161db5b63782f.webp)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </a>
      </div>

      <Swiper
        style={{
          height: "60vh",
          backgroundColor: "#fff",
          padding: "0 5px",
         
        }}
        slidesPerView={6}
        spaceBetween={5}
        slidesPerGroup={6}
        autoplay={true}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./1649316141c58b7ef3d40bc2eaf44dd56c1295662a_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
            Solid Asymmetrical Neck Textured Top
            <div style={{ fontSize: "18px" }}>R142</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./1650418048773decb14767b01ab21322e39979de01_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Square Neck Lantern Sleeve Crop Top
            <div style={{ fontSize: "18px" }}>R191</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./165033446271f532e5e5572bba847dcf726285031c_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Tie Dye Cami Dress
            <div style={{ fontSize: "18px" }}>R198</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(16504180413feed4642f885cd49b0da99dde6ed2d1_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Seam Detail Flare Leg Pants
            <div style={{ fontSize: "18px" }}>R296</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./1648534641d43b0b5ba64f4be1b0287b7425e136fc_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Criss-cross Tie Backless Shirred T
            <div style={{ fontSize: "18px" }}>R249</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./165036090490e9ba250c92569f499b8833706fe812_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Allover Floral Print Off Shoulder Dress
            <div style={{ fontSize: "18px" }}>R237</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./165036090490e9ba250c92569f499b8833706fe812_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "11px", width: "100%" }}>
            Criss-cross Tie Backless Shirred T
            <div style={{ fontSize: "18px" }}>R249</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./1648534641d43b0b5ba64f4be1b0287b7425e136fc_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
            Allover Floral Print Off Shoulder Dress
            <div style={{ fontSize: "18px" }}>R237</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./165036075466cc2008a453bf64e4589e172048c495_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Ruffle Hem Allover Heart A-line Dress
            <div style={{ fontSize: "18px" }}>R302</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./16496701092bb446007587a6650660829b8ab17629_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Swiss Dot Shirred Ruffle H
            <div style={{ fontSize: "18px" }}>R323</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./16494203327632e4416d1be148c9583a16529b39c9_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
          Striped & Heart Print Tee
            <div style={{ fontSize: "18px" }}>R118</div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <main
            style={{
              // border: "1px solid red",
              height: "260px",
              width: "210px",
              backgroundImage: `url(./1650435419344eed0a77e7c7160301126201169170_thumbnail_405x552.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" style={{position: "absolute", zIndex: "10", top: 100, left: "100px"}}>
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
          
          </main>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
