import React from 'react'
import { Container ,Col, Row} from 'react-bootstrap';
import Slider from 'react-slick'
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';

export const Fans = () => {

    const setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,

        responsive: [
            {
                breakpoint: 992,
                setting: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                setting: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div id="about">
    <Slider {...setting}>
        <Container>
            <Row>
                <Col lg="3" >
                    <div className='py-4 px-3'>
                        <p style={{textAlign:"justify"}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                        </p>
                        <div className=' d-flex align-items-center gap-4 mt-3'>
                            <img src={c1} alt="" className='w-25 h-25 rounded-2' />
                            <div>
                                <h5 className='mb-0 mt-3'>John Doe</h5>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="3">
                <div className='py-4 px-3'>
                    <p style={{textAlign:"justify"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                    </p>
                    <div className=' d-flex align-items-center gap-4 mt-3'>
                        <img src={c2} alt="" className='w-25 h-25 rounded-2' />
                        <div>
                            <h5 className='mb-0 mt-3'>James William</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                

                </Col>
                <Col lg="3">
                <div className='py-4 px-3'>
                    <p style={{textAlign:"justify"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                    </p>
                    <div className=' d-flex align-items-center gap-4 mt-3'>
                        <img src={c3} alt="" className='w-25 h-25 rounded-2' />
                        <div>
                            <h5 className='mb-0 mt-3'>James Bond</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                

                </Col>
                <Col lg="3">
                <div className='py-4 px-3'>
                    <p style={{textAlign:"justify"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                    </p>
                    <div className=' d-flex align-items-center gap-4 mt-3'>
                        <img src={c4} alt="" className='w-25 h-25 rounded-2' />
                        <div>
                            <h5 className='mb-0 mt-3'>Nancy</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                

                </Col>
            </Row>
        </Container>



        {/* <div className='py-4 px-3'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
            </p>
            <div className='fans align-items-center gap-4 mt-3'>
                <img src={c1} alt="" className='w-25 h-25 rounded-2'/>
                <div>
                    <h5 className='mb-0 mt-3'>John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>


        <div className='py-4 px-3'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
            </p>
            <div className='fans align-items-center gap-4 mt-3'>
                <img src={c1} alt="" className='w-25 h-25 rounded-2'/>
                <div>
                    <h5 className='mb-0 mt-3'>John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div> */}
     
    </Slider>
    </div>
    )
};

