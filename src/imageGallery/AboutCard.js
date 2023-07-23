import React from 'react'
import AboutGallery from './AboutGallery';
import  './Responsive.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const AboutCard = () => {
  return (
        
        <ResponsiveMasonry columnsCountBreakPoints={{950:3, 968:3, 992:3}}>
            <Masonry gutter='1rem' className='mb-5'>
                {
                    AboutGallery.map((item,i)=>
                    (
                        <img className='respon1' src={item} key={i} alt="" style={{"width":"100%","display":"block"}}/>
                    )
                    )
                }
            </Masonry>
        </ResponsiveMasonry>
  )
}
