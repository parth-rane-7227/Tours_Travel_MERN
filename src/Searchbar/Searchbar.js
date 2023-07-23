import React,{createRef, useRef} from 'react'
import './Searchbar.css'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import 'remixicon/fonts/remixicon.css'
import { IoSearchCircleSharp } from 'react-icons/io5'
export const Searchbar = () => {


        const locationRef=useRef('')
        const distanceRef=useRef(0)
        const maxsizeRef=useRef(0)

        const searchHandler=()=>{
            const location=locationRef.current.value
            const distance=distanceRef.current.value
            const maxsize=maxsizeRef.current.value

            if(location==='' || distance==='' || maxsize==='')
            {
                return alert("All Fields are Required!!!")
            }
        }
    return (
        <div className='mb-5'>
            <Col lg="7">
                <div className='searchd container' >
                    <Form className='d-flex gap-4 align-items-center'>
                        <FormGroup className='d-flex gap-3'>
                            <span className='mt-3 logol'>
                                <i class="ri-map-pin-line"></i>
                            </span>
                            <div className='divinput'>
                                <h6>Location</h6>
                                <input type="text" placeholder='where are you going ?' ref={locationRef} />
                            </div>
                        </FormGroup>
                        <FormGroup className='d-flex gap-3'>
                            <span className='mt-3 logol'>
                                <i class="ri-pin-distance-line"></i>
                            </span>
                            <div className='divinput'>
                                <h6>Distance</h6>
                                <input type="number" placeholder='Distance k/m' ref={distanceRef}/>
                            </div>
                        </FormGroup>
                        <FormGroup className='d-flex gap-3'>
                            <span className='mt-3 logol'>
                                <i class="ri-user-line"></i>
                            </span>
                            <div className='divinput'>
                                <h6>Max People</h6>
                                <input type="number" placeholder='Number of People' ref={maxsizeRef}/>
                            </div>
                            <div className='search'>
                                {/* <input type="text" placeholder='#Explore'/> */}
                                <IoSearchCircleSharp className='searchicon' type="submit" onClick={searchHandler}></IoSearchCircleSharp>
                            </div>
                        </FormGroup>
                    </Form>

                </div>
            </Col>
        </div>
    )
}
