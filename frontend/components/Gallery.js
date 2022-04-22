import { display } from '@mui/system'
import React from 'react'

const buttonArr = [
  {
    "title": "Fall Style",
    "color": "rgb(45, 70, 89)"
  },
  {
    "title": "Cozy Style",
    "color": "rgb(136, 51, 80)"
  },
  {
    "title": "Warm & Style",
    "color": "rgb(215, 201, 189)"
  },
  {
    "title": "Elegant Lady",
    "color": "rgb(220, 202, 215)"
  },
  {
    "title": "The Denim Guide",
    "color": "rgb(45, 70, 89)"
  },
  {
    "title": "Girl Outing",
    "color": "rgb(45, 70, 89)"
  },
  {
    "title": "Curve",
    "color": "rgb(45, 70, 89)"
  },
  {
    "title": "Energetic Look",
    "color": "rgb(45, 70, 89)"
  },
  {
    "title": "Boho Gal",
    "color": "rgb(45, 70, 89)"
  },
  {
    "title": "Street Style",
    "color": "rgb(45, 70, 89)"
  },
]

const GalleryImages = [
  {
    "image": "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "image": "https://images.pexels.com/photos/2739751/pexels-photo-2739751.jpeg"
  },
  {
    "image": "https://images.pexels.com/photos/2867826/pexels-photo-2867826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    "image": "https://images.pexels.com/photos/2771148/pexels-photo-2771148.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    "image": "https://images.pexels.com/photos/2852917/pexels-photo-2852917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
]

function GalleryButton({ text, theColor }) {
  return (
    <button style={{
      height: '48px',
      width: '94px',
      // background: {theColor},
      background:`${theColor}`,
      color:'white',
      borderRadius: '28px',
      border:'none',
      textAlign: 'center',
      padding: '0 20px',
    }}>{text}</button>
  )
}
function GalleryItem({ imageSrc }) {
  return (
    <div className='gallery-item' style={{
      height: '350px',
      width: '240px',
      backgroundImage: `url("${imageSrc}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: '8px'
    }}>
      <button style={{
        padding: '16px 64px',
        border: 'none',
        background: 'rgba(251,251,251,0.5)'
      }}>See More</button>
    </div>
  )
}

const Gallery = () => {
  return (
    <div style={
      {
        minHeight: "50vh",
        textAlign: 'center',
        // margin:"0 10px",
        width: '100%',
        // marginBottom:'200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems:'flex-end'
      }}>
      <h2>#Style Gallery</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>

        {
          GalleryImages.map((item, index) => {
            console.log(item)
            console.log(typeof (item))
            return (

              <GalleryItem key={index} imageSrc={item.image} />
            )
          })
        }
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>

        {
          buttonArr.map((button, index) => {
            console.log(button)

            return (

              <GalleryButton key={index} text={button.title} theColor={button.color} />
            )
          })
        }
      </div>



    </div>
  )
}

export default Gallery