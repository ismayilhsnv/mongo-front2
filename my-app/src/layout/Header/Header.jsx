import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
const Header = () => {
  return (
    <>
      <div className='header'>
        <p className='header__p'>BizPro</p>
        <ul className='header__links'>
          <li><Link style={{ textDecoration: "none", color: "black" }} to="/">Home</Link></li>
          <li><Link style={{ textDecoration: "none", color: "black" }} to="Wishlist">Wishlist</Link></li>
          <li><Link style={{ textDecoration: "none", color: "black" }} to="AddProduct">AddProduct</Link></li>
        </ul>
      </div>

      <Swiper style={{ marginTop: '20px' }} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img style={{ height: "100vh" }} src="https://preview.colorlib.com/theme/bizpro/images/home/slide-1.jpg.webp" alt="" /></SwiperSlide>
        <div className='position'>
          <h2 style={{fontSize:"50px", color:"white",marginBottom:"30px"}}>Hello we're BizPro</h2>
          <p style={{fontSize:"20px", }}>Sub Head, Motto or mission subtitle</p>
          <button className='position__button'>See Our Projects</button>
        </div>
        <SwiperSlide><img style={{ height: "100vh" }} src="https://preview.colorlib.com/theme/bizpro/images/home/slide-2.jpg.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Header