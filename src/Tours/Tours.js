import React from 'react'
import '../new/Tour.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Tour } from '../new/Tour';

export const Tours = () => {

    const navigate = useNavigate();

    const navibook=()=>{
        navigate("/book");
    }
    return (
        <>
            <div className="m2">
                <Container>
                    <Row>

                        <Col></Col>
                        <Col>
                            <h1 className='n2'>Tour Search Result</h1> </Col>
                        <Col></Col>

                    </Row>
                </Container>
            </div><br></br>

            {/* <Container>
                <Row>
                    <Col lg="12 mb-4 mt-3">
                        <div>
                            <h1>Our Tours</h1>
                        </div>
                    </Col>
                </Row>
            </Container> */}


            <Tour/>

            {/* <div className='mb-5 mt-5' >
                <Container >
                    <Row className='mb-5'>
                        <Col >
                            <div className='s1' style={{ width: '280px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='usertours' variant="top" src={Tower} />
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card.Title><ImLocation2 style={{ color: "orange" }} />London</Card.Title></Col>
                                                <Col>
                                                    <Card.Text>
                                                        <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.2(2)</b>
                                                    </Card.Text>
                                                </Col>
                                                <Card.Text> <b>Westminister Bridge</b></Card.Text>
                                                <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                                                <Container>
                                                    <Row>
                                                        <Col></Col>
                                                        <Col>
                                                            <Button variant="warning" style={{}} onClick={navibook}>Book Now</Button></Col>
                                                    </Row>
                                                </Container>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col >
                            <div className='s1' style={{ width: '280px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='usertours' variant="top" src={Bali} />
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card.Title style={{ fontSize: "18px" }}><ImLocation2 style={{ color: "orange" }} />Indonesia</Card.Title></Col>
                                                <Col>
                                                    <Card.Text>
                                                        <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.6(1)</b>
                                                    </Card.Text>
                                                </Col>

                                                <Container>
                                                    <Row>
                                                        <Card.Text><b>Bali,Indonesia</b></Card.Text>
                                                        <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                                                    </Row>
                                                </Container>
                                            </Row>
                                        </Container>

                                        <Container>
                                            <Row>
                                                <Col></Col>
                                                <Col>
                                                    <Button className='mt-3' variant="warning" style={{}} onClick={navibook}>Book Now</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col >
                            <div className='s1' style={{ width: '280px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='usertours' variant="top" src={Snow} />
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card.Title style={{ fontSize: "18px" }}><ImLocation2 style={{ color: "orange" }} /> Thailand</Card.Title>
                                                </Col>
                                                <Col>
                                                    <Card.Text>
                                                        <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.6(1)</b>
                                                    </Card.Text></Col>
                                            </Row>
                                        </Container>
                                        <Card.Text>
                                            <b>Snowy Mountanis,Thailand</b>

                                        </Card.Text><b></b>
                                        <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>

                                        <Container>
                                            <Row>
                                                <Col></Col>
                                                <Col>
                                                    <Button variant="warning" style={{}}>Book Now</Button></Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>



                        <Col >
                            <div className='s1' style={{ width: '280px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='usertours' variant="top" src={sunrise} />
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>

                                                    <Card.Title style={{ fontSize: "18px" }}><ImLocation2 style={{ color: "orange" }} /> Thailand</Card.Title>
                                                </Col>
                                                <Col>
                                                    <Card.Text>
                                                        <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.6(1)</b>
                                                    </Card.Text></Col>
                                            </Row>
                                        </Container>

                                        <Card.Text>
                                            <b>Beautiful-Sunrise,Thailand</b>
                                            <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                                        </Card.Text>

                                        <Container>
                                            <Row>
                                                <Col></Col>
                                                <Col>
                                                    <Button className='mt-3' variant="warning" style={{}}>Book Now</Button></Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card></div></Col>
                    </Row>
                </Container><br></br>


                <div>
                    <Container>
                        <Row>
                            <Col >
                                <div className='s1' style={{ width: '280px' }}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img className='usertours' variant="top" src={nusa} />
                                        <Card.Body>

                                            <Container>
                                                <Row>
                                                    <Col>

                                                        <Card.Title style={{ fontSize: "18px" }}><ImLocation2 style={{ color: "orange" }} /> Indonesia</Card.Title>
                                                    </Col>
                                                    <Col>
                                                        <Card.Text>
                                                            <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.6(1)</b>
                                                        </Card.Text></Col>
                                                </Row>
                                            </Container>

                                            <Card.Text>
                                                <b>Nusa Pendia Bali,Indonesia</b>
                                                <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                                            </Card.Text>

                                            <Container>
                                                <Row>
                                                    <Col></Col>
                                                    <Col>
                                                        <Button variant="warning" style={{}}>Book Now</Button></Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card></div></Col>
                            <Col >
                                <div className='s1' style={{ width: '280px' }}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img className='usertours' variant="top" src={japan} />
                                        <Card.Body>

                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title><ImLocation2 style={{ color: "orange" }} /> Japan</Card.Title>
                                                    </Col>
                                                    <Col>
                                                        <Card.Text>
                                                            <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.6(1)</b>
                                                        </Card.Text></Col>
                                                </Row>
                                            </Container>

                                            <Card.Text>
                                                <b>Cherry Blossoms Spring</b>
                                                <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                                            </Card.Text>
                                            <Container>
                                                <Row>
                                                    <Col></Col>
                                                    <Col>
                                                        <Button variant="warning" style={{}}>Book Now</Button></Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card></div></Col>


                            <Col >
                                <div className='s1' style={{ width: '280px' }}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img className='usertours' variant="top" src={greece} />
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title><ImLocation2 style={{ color: "orange" }} /> Greece</Card.Title>
                                                    </Col>
                                                    <Col>
                                                        <Card.Text>
                                                            <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.6(1)</b>
                                                        </Card.Text></Col>
                                                </Row>
                                            </Container>

                                            <Card.Text>
                                                <b>Holmen Lofoten</b>
                                                <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                                            </Card.Text>
                                            <Container>
                                                <Row>
                                                    <Col></Col>
                                                    <Col>
                                                        <Button variant="warning" style={{}}>Book Now</Button></Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card></div></Col>



                            <Col >
                                <div className='s1' style={{ width: '280px' }}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img className='usertours' variant="top" src={thailand} />
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title style={{ fontSize: "18px" }}><ImLocation2 style={{ color: "orange" }} /> Thailand</Card.Title>
                                                    </Col>
                                                    <Col>
                                                        <Card.Text>
                                                            <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.6(1)</b>
                                                        </Card.Text></Col>
                                                </Row>
                                            </Container>
                                            <Card.Text>
                                                <b>Doi Inthanon</b>
                                                <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                                            </Card.Text>
                                            <Container>
                                                <Row>
                                                    <Col></Col>
                                                    <Col>
                                                        <Button variant="warning" style={{}}>Book Now</Button></Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card></div></Col>

                        </Row>
                    </Container>
                </div>
            </div> */}
        </>
    )
}
