import React from 'react'
import './ServiceCard.css'
export const ServiceCard = ({item}) => {
    const {imgurl, title, desc} = item;
  return (
    <div className='gain'>
    <div className='serviceitem offset-1 mb-5'>
        <div className='serviceimg offset-4'>
            <img src={imgurl}/>
        </div>
        <h5>{title}</h5>
        <p style={{textAlign:"justify",wordSpacing:"1px"}}>{desc}</p>
    </div>
    </div>
  )
}
