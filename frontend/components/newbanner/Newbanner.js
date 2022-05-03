import React from 'react'

export const Newbanner = () => {
  return (
    <>
    <div
      style={{
        width:"100%",
        background:'white',
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
          
            backgroundImage: `url(./1650011299bc46687323f0d1d94ff128c06b78cdb9.webp)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           
          }}
        ></div>
      </a>
    </div>
  </>
  )
}

