import React from 'react'
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap'
import tour1 from '../images/tour1.jpg'
import tour2 from '../images/tour2.jpg'
import tour3 from '../images/tour3.mov'
import { Searchbar } from '../Searchbar/Searchbar';
import { ServiceList } from '../Services/ServiceList';
import ex1 from '../images/ex1.png';
import { Responsive } from '../imageGallery/Responsive';
import {Tour} from '../new/Tour'
import { Fans } from '../Fans/Fans';

export const Home = () => {
    return (
        <div>
            <section className='mt-5 mb-5'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className='mb-4'>
                                <h1>Keep Going</h1>
                            </div>
                            <div className='mb-5'>
                                <h3>Travelling Opens the door to creating the memories</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis odio, et hendrerit felis. Pellentesque lacinia ex et dui.</p>
                        </Col>

                        <Col lg='2'>
                            <div className='imgbox'>
                                <img src={tour1} alt="" />
                            </div>
                        </Col>


                        <Col lg='2'>
                            <div className='imgbox mt-4'>
                                <video src={tour3} alt="" controls />
                            </div>
                        </Col>


                        <Col lg='2'>
                            <div className='imgbox mt-5'>
                                <img src={tour2} alt="" />
                            </div>
                        </Col>
                        <Searchbar />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="1">
                        </Col>
                        <Col lg="4">
                            <p className='subtitle mb-4'>What we Serv</p>
                            <h2 className='title'>We Offer our best Services</h2>
                        </Col>
                        <Col lg="6">
                            <ServiceList />
                        </Col>
                        <Col lg="1">
                        </Col>

                    </Row>
                </Container>
            </section>

            <section>
                <Col lg="12">
                   <Tour />
                </Col>
            </section>

            <section>
                <Container>
                    <Row className='mt-4'>
                        <Col lg="6" className='mt-3'>
                            <div className='experiencecontent'>
                                <h2>With our all experience <br />we will serve you</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet magna id molestie pellentesque. Integer non odio vulputate, faucibus nulla.</p>
                            </div>
                            <div className='d-flex gap-5 align-items-center expd offset-2 mt-2 mb-4'>
                                <div className='counter'>
                                    <span className='offset-3'>12k+</span>
                                    <h6 className='mt-2'>Successful Trip</h6>
                                </div>
                                <div className='counter'>
                                    <span className='offset-3'>2k+</span>
                                    <h6 className='mt-2'>Regular Clients</h6>
                                </div>
                                <div className='counter'>
                                    <span className='offset-3'>10</span>
                                    <h6 className='mt-2'>years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" className='eximage'>
                            <img src={ex1} alt=""/>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className='gallery11'>
                                <h1 className='mb-4'>Gallery</h1>
                            </div>
                        </Col>
                        <Col lg="12">
                           <Responsive />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container id='ab'>
                    <Row>
                        <Col lg="12 mt-3">
                            <h1>Fans Love</h1>
                            <h6 style={{fontSize:"20px",wordSpacing:"3px"}}>What our fans say about us</h6>
                        </Col>
                        <Col >
                            <Fans/>
                        </Col>
                        </Row>
                </Container>
            </section>
        </div>
    )
}
