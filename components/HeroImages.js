import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'

const HeroImages = ({heroImages}) => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true

  };
  return (
    <div className='w-screen  '>
        <div className='mt-40 '>
        <Slider {...settings}>
      { heroImages.map((image,key)=> <div key={key} >
      <img src={image.attributes.images}  />
      </div> ) }
      
      
    </Slider>
           
        </div>
    </div>
  )
}

export default HeroImages