import React, { useContext } from 'react'
import Card from '../Card'
import Maincontext from '../../context/context'
import "./Cards.css"

const Cards = () => {
  const {product}=useContext(Maincontext)
  return (
    <>
    <div className='about'>
      <h2><b>ABOUT OUR BIZPRO</b></h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      </p>
      <p>standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
      <div style={{marginTop:'20px'}} className='about__cards'>
        <div className='about__cards__div1'>
          <div className='cardBorder'><i className="fa-regular fa-pen-to-square" style={{color: "#000000"}}></i></div>
          <h3 style={{marginTop:"10px",fontSize:"25px"}}>WEB DEVELOPMENT</h3>
          <p  style={{color:"gray",marginTop:"10px"}}>
            Lorem ipsum dolor sit amet, consect et 
          </p>
          <p style={{color:"gray",marginTop:"5px"}}>adipiscing elit, sed do eiusmod tempor</p>
          <p style={{color:"gray",marginTop:"5px"}}>incididunt ut labore et dolore magna.</p>
          <button className='btn'>More Details</button>
        </div>
        <div className='about__cards__div1'>
          <div className='cardBorder'><i className="fa-solid fa-camera" style={{color: "#000000"}}></i></div>
          <h3 style={{marginTop:"10px",fontSize:"25px"}}>PHOTOGRAPHY</h3>
          <p  style={{color:"gray",marginTop:"10px"}}>
            Lorem ipsum dolor sit amet, consect et 
          </p>
          <p style={{color:"gray",marginTop:"5px"}}>adipiscing elit, sed do eiusmod tempor</p>
          <p style={{color:"gray",marginTop:"5px"}}>incididunt ut labore et dolore magna.</p>
          <button className='btn'>More Details</button>
        </div>
        <div className='about__cards__div1'>
          <div className='cardBorder'><i className="fa-regular fa-life-ring" style={{color: "#000000"}}></i></div>
          <h3 style={{marginTop:"10px",fontSize:"25px"}}>DIGITAL MEDIA</h3>
          <p  style={{color:"gray",marginTop:"10px"}}>
            Lorem ipsum dolor sit amet, consect et 
          </p>
          <p style={{color:"gray",marginTop:"5px"}}>adipiscing elit, sed do eiusmod tempor</p>
          <p style={{color:"gray",marginTop:"5px"}}>incididunt ut labore et dolore magna.</p>
          <button className='btn'>More Details</button>
        </div>
        <div className='about__cards__div1'>
          <div className='cardBorder'><i className="fa-solid fa-chart-line" style={{color: "#000000"}}></i></div>
          <h3 style={{marginTop:"10px",fontSize:"25px"}}>ONLINE MARKETING</h3>
          <p  style={{color:"gray",marginTop:"10px"}}>
            Lorem ipsum dolor sit amet, consect et 
          </p>
          <p style={{color:"gray",marginTop:"5px"}}>adipiscing elit, sed do eiusmod tempor</p>
          <p style={{color:"gray",marginTop:"5px"}}>incididunt ut labore et dolore magna.</p>
          <button className='btn'>More Details</button>
        </div>
      </div>
    </div>
    <hr />
    <div className='cards'>
        {
            product?.map((item,index)=>{
                return <Card item={item} key={index}/>
            })
        }
    </div>
    </>
    
  )
}

export default Cards