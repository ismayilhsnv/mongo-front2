import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
const Detail = () => {
  const { _id } = useParams()
  const [detail, setDeatil] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8082/products/${_id}`).then(res => {
      setDeatil(res.data)
      console.log(res.data);
    })
  }, [])
  return (
    <div className='details'>

      <img
        className="card-img-top card"
        src={detail.image}
        alt="Card cap"
      />
      <div className='content'>
        <p style={{ color: "black" }}>{detail.desc}</p>
        <p style={{ color: "black" }}>{detail.price}</p>
      </div>
    </div>
  )
}

export default Detail