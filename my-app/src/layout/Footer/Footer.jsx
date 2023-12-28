import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <h2>BizPro</h2>
        <div className='icons'>
            <div className='icon-f'>
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className='icon-t'>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div className='icon-p'>
                <i class="fa-brands fa-pinterest"></i>
            </div>
            <div className='icon-s'>
                <i class="fa-brands fa-skype"></i>
            </div>
            <div className='icon-i'>
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className='icon-b'>
                <i class="fa-solid fa-basketball"></i>
            </div>
            <div className='icon-w'>
                <i class="fa-solid fa-wifi"></i>
            </div>
        </div>
        <div className='footer__end'>
            <p>Copyright @2018 All rights reserved | This template is made with</p>
            <i class="fa-regular fa-heart"></i>
            <p>by</p>
            <p className='p'>Colorlib</p>
        </div>
    </div>
  )
}

export default Footer