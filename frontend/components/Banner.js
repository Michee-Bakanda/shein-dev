import React from "react";

export const Banner = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          padding: "10px 50px",
        }}
      >
        <a href="#">
          <div
            style={{
              cursor: "pointer",
              // border: "2px solid red",
              height: "90vh",
              backgroundImage: `url(./16495691409e6c7a6b5bdd3e2b6def24f5735aeea5.webp)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </a>
      </div>
    </>
  );
};
