import React from 'react'
import './ServiceList.css'
import {ServiceCard} from '../Services/ServiceCard';
import { Col } from 'react-bootstrap'
import weather from '../images/weather.png'
import guide from '../images/guide.png'
import customize from '../images/customize.png'

const serviceData =[
    {
        imgurl:weather,
        title:"Calculate Weather",
        desc:"The world is a book and those who do not travel read only one page.",
    },
    {
        imgurl:guide,
        title:"Best Tour Guide",
        desc:"The world is a book and those who do not travel read only one page.",
    },{
        imgurl:customize,
        title:"Customization",
        desc:"The world is a book and those who do not travel read only one page.",
    },
]
export const ServiceList = () => {
  return (
    <div>
        {
            serviceData.map((item,i)=> (
                <Col className='serviceda offset-1' lg="3" key={i}>
                     <ServiceCard item={item} /> 
                </Col>
            ))}
    </div>
  );
}
