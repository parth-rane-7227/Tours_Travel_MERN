import React from 'react'
import Gallery from './Gallery';
import  './Responsive.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const Responsive = () => {
  return (
        
        <ResponsiveMasonry columnsCountBreakPoints={{950:3, 968:3, 992:3}}>
            <Masonry gutter='1rem' className='mb-5'>
                {
                    Gallery.map((item,i)=>
                    (
                        <img className='respon' src={item} key={i} alt="" style={{"width":"100%","display":"block","borderRadius":"10px"}}/>
                    )
                    )
                }
            </Masonry>
        </ResponsiveMasonry>
  )
}
