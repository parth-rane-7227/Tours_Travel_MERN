import React, { createRef, useEffect, useRef, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Booking.css'
import { ImLocation2 } from 'react-icons/im';
import thailand from '../images/thailand.jpg'
import star from '../images/star.jpg'
import { IoIosContact } from 'react-icons/io';
import Tower from '../images/Tower.jpg'
import Bali from '../images/Bali.jpg'
import Snow from '../images/Snow.jpg'
import sunrise from '../images/sunrise.jpg'
import nusa from '../images/nusa.jpg'
import japan from '../images/japan.jpg'
import greece from '../images/greece.jpg'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

 export const Booking = () => {
   const ref1 = useRef();

  const ref2 = createRef()
  const ref3 = createRef()
  const ref4 = createRef()
  const ref5 = createRef()

//Databse==>
const serviceFee = 10;
const Price = 99;
const [totalAmount,setTotalAmount] = useState(0);
const [formBasicGuest,setGuest] = useState();
const handleChange=(event)=>{
  setGuest(event.target.value);
  setTotalAmount ( Number(Price) * Number(event.target.value) + Number(serviceFee));
}

  const Booking = async() => {

    var fullName = ref2.current.value
    var formBasicEmail = ref3.current.value
    var formBasicPassword = ref4.current.value
    //var formBasicGuest = ref1.current.value
    var formBasicDate = ref5.current.value
    //var formBasicLocation = ref6.current.value
    //console.log(fullName, formBasicEmail)
    const userData = { fullName, formBasicEmail, formBasicPassword, formBasicGuest, formBasicDate}
    //console.log(userData);

    //const res = await axios.post('http://localhost:3000/register/reg-std')
    //console.log(res)

    const res = await fetch('Booking/book-std', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    const resp = await res.json()
    console.log(resp);
    if(userData.fullName!=='' && userData.formBasicEmail!=='' && userData.formBasicPassword!=='' && userData.formBasicGuest!=='' && userData.formBasicDate!=='')
    {
      Swal.fire({
        icon: 'success',
        title: 'Booking Successfully!!!',
        text: '',
        //footer: '<a href="">Why do I have this issue?</a>'
    })
    }
    else{Swal.fire({
      icon: 'error',
      title: 'Fill all Details?',
      text: '',
      //footer: '<a href="">Why do I have this issue?</a>'
  })
      console.log("Error");
    }

    // window.location.href='http://localhost:3001/?#/Booking'
    const [filterData, setFilterData] = useState([]);
  //var x =ref1.current.value;
  // const serviceFee = 10;
  // const Price = 99;
  
  //const totalAmount = Number(Price) * Number(ref1.current?.value) + Number(serviceFee);
  const { id } = useParams();
  const { location } = useParams();
 

  
  


  const setFilterDataHandlet = (x,y) => {
    setFilterData(x,y);
  }
  useEffect(() => {
    console.log('In booking component', id,location);
    var x = arr2.filter((item) => item.id === id);
    var y = arr2.filter((item) => item.location === location);
    setFilterDataHandlet(x,y);
  }, []);
}
  
  
  const [filterData, setFilterData] = useState([]);
  //var x =ref1.current.value;
  
  //const totalAmount = Number(Price) * Number(ref1.current?.value) + Number(serviceFee);
  const { id } = useParams();
  const { location } = useParams();

  const setFilterDataHandlet = (x,y) => {
    setFilterData(x,y);
  }
  useEffect(() => {
    console.log('In booking component', id);
    var x = arr2.filter((item) => item.id === id);
    var y = arr2.filter((item) => item.location === location);
    setFilterDataHandlet(x,y);
  }, []); 

  const arr2 = [
    { id: "1", title: 'London', iname: Tower, cardText: 'Washington Bridge', location: 'someshwar in London' },
    { id: "2", title: 'Indonesia', iname: Bali, cardText: 'Bali, Indonesia', location: 'someshwar in London' },
    { id: "3", title: 'Thailand', iname: Snow, cardText: 'Snowy Mountains, Thailand', location: 'someshwar in London' },
    { id: "4", title: 'Thailand', iname: sunrise, cardText: 'Beautiful-Sunrise,Thailand', location: 'someshwar in London' },
    { id: "5", title: 'Indonesia', iname: nusa, cardText: 'Nusa Pendia Bali,Indonesia', location: 'someshwar in London' },
    { id: "6", title: 'Japan', iname: japan, cardText: 'Cherry Blossoms Spring', location: 'someshwar in London' },
    { id: "7", title: 'Greece', iname: greece, cardText: 'Holmen Lofoten', location: 'someshwar in London' },
    { id: "8", title: 'Thailand', iname: thailand, cardText: 'Doi Inthanon', location: 'someshwar in London' }
  ]
  return (
    <div>
      <div>
        <section>
          <Container>
            {filterData &&
              filterData.map((v, i) => {
                const { id, title, iname, cardText, location } = v;
                return (
                  <div key={id}>
                    <Row>
                      <Col></Col>
                      <Col className="div1" key={i}>
                        <div className="login_container d-flex justify-content-between n1">
                          <Col className="m-auto">
                            <div>
                              <img
                                className="h1 offset-md-1 mt-3"
                                src={iname}
                                alt=""
                              />
                            </div>
                            <br />
                            <div>
                              <Card style={{ width: "100%" }} className="offset-md-1">
                                <Card.Body>
                                  <Row>
                                    <Card.Title>{cardText}</Card.Title>
                                  </Row>
                                  <Row>
                                    <Col md="6">
                                      <Card.Subtitle className="mb-2 text-muted">
                                        <img
                                          src={star}
                                          style={{ width: "15px", height: "15px" }}
                                          alt=""
                                        />
                                        4.5(2)
                                      </Card.Subtitle>
                                    </Col>
                                    <Col md="6">
                                      <Card.Subtitle
                                        className="mb-2 text-muted"
                                        style={{ fontSize: "12px" }}
                                      >
                                        <ImLocation2 />
                                        {location}
                                      </Card.Subtitle>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col>
                                      <Card.Text style={{ fontSize: "12px" }}>
                                        <ImLocation2 />
                                        {title}
                                      </Card.Text>
                                    </Col>
                                    <Col ms="4">
                                      <Card.Text style={{ fontSize: "12px" }}>
                                        <ImLocation2 />$99/per Person
                                      </Card.Text>
                                    </Col>
                                    <Col ms="4">
                                      <Card.Text style={{ fontSize: "12px" }}>
                                        <ImLocation2 />300 k/m
                                      </Card.Text>
                                    </Col>
                                    <Col ms="4">
                                      <Card.Text style={{ fontSize: "12px" }}>
                                        <ImLocation2 />10 People
                                      </Card.Text>
                                    </Col>
                                  </Row>
                                  <br />
                                  <Row>
                                    <Card.Subtitle className="mb-2 text-muted">
                                      <b>Description</b>
                                      <br />
                                    </Card.Subtitle>
                                    <Card.Subtitle style={{ fontSize: "12px" }}>
                                      This is the description
                                    </Card.Subtitle>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </div>
                            <br />
                            <div style={{ marginBottom: "50px" }}>
                              <Card style={{ width: "100%" }} className="offset-md-1">
                                <Card.Body>
                                  <Card.Title>Reviews (2 reviews)</Card.Title>
                                  <Container>
                                    <Row>
                                      <Col>
                                        <Card.Subtitle className="mb-2 text-muted">
                                          <IoIosContact />Harsh
                                          <br />
                                        </Card.Subtitle>
                                        <Card.Text>
                                          Nov 24, 2002
                                          <br />
                                          <b>Amazing tour</b>
                                        </Card.Text>
                                      </Col>
                                      <Col></Col>
                                      <Col>
                                        <Card.Text>
                                          <img
                                            src={star}
                                            style={{
                                              width: "15px",
                                              height: "15px",
                                            }}
                                            alt=""
                                          />
                                          <b>5</b>
                                        </Card.Text>
                                      </Col>
                                    </Row>
                                  </Container>
                                  <br />
                                  <Container>
                                    <Row>
                                      <Col>
                                        <Card.Subtitle className="mb-2 text-muted">
                                          <IoIosContact />Parth
                                        </Card.Subtitle>
                                        <Card.Text>
                                          Nov 3, 2002
                                          <br />
                                          <b>Amazing tour</b>
                                        </Card.Text>
                                      </Col>
                                      <Col></Col>
                                      <Col>
                                        <Card.Text>
                                          <img
                                            src={star}
                                            style={{
                                              width: "15px",
                                              height: "15px",
                                            }}
                                            alt=""
                                          />
                                          <b>4</b>
                                        </Card.Text>
                                      </Col>
                                    </Row>
                                  </Container>
                                </Card.Body>
                              </Card>
                            </div>
                          </Col>
                          <Col>
                            <div style={{ position: "sticky", top: 0 }} className='mb-5'>
                              <Card
                                className="mt-3 offset-md-3"
                                style={{ width: "340px" }}
                              >
                                <Card.Body>
                                  <Container>
                                    <Row>
                                      <Col>
                                        <b>
                                          <Card.Title>$99/per Person</Card.Title>
                                        </b>
                                        <br />
                                      </Col>
                                      <Col>
                                        <Card.Text>
                                          <img
                                            src={star}
                                            style={{
                                              width: "15px",
                                              height: "15px",
                                            }}
                                            alt=""
                                          />
                                          <b>4.6(1)</b>
                                        </Card.Text>
                                      </Col>
                                    </Row>
                                  </Container>
                                  <div className="border-bottom"></div>
                                  <br />
                                  <Card.Subtitle className="mb-2 text-muted">
                                    <b>Information</b>
                                  </Card.Subtitle>
                                  <Card.Text>
                                    <Form>
                                      <Form.Group
                                        className="mb-3"
                                        id="fullName"
                                      >
                                        <Form.Control
                                          type="Text"
                                          placeholder="Enter Full Name"
                                          // onChange={handleChange}
                                          required
                                          ref={ref2}
                                        />
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        id="formBasicEmail"
                                      >
                                        <Form.Control
                                          type="email"
                                          placeholder="Enter email"
                                          // onChange={handleChange}
                                          required
                                          ref={ref3}
                                        />
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        id="formBasicPassword"
                                      >
                                        <Form.Control
                                          type="password"
                                          placeholder="Password"
                                          // onChange={handleChange}
                                          required
                                           ref={ref4}
                                        />
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        id="formBasicDate"
                                      >
                                        <Form.Control
                                          type="date"
                                          placeholder="dd/mm/yyyy"
                                          // onChange={handleChange}
                                          required
                                         ref={ref5}
                                        />
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        id="formBasicGuest"
                                      >
                                        <Form.Control
                                          type="number"
                                          placeholder="Guest Size"
                                          onChange={handleChange}
                                          required
                                          ref={ref1}
                                        />
                                      </Form.Group>

                                      <Form.Group
                                        className="mb-3"
                                        id="formBasicLocation"
                                      >
                                        <Form.Control
                                            type='text'
                                          placeholder={v.title}
                                          
                                          disabled
                                        />
                                      </Form.Group>

                                    </Form>
                                    <Container>
                                      <Row>
                                        <Col style={{ font: "5px" }}>
                                          <Card.Subtitle>
                                            $99 x 1 Person
                                          </Card.Subtitle>
                                        </Col>
                                        <Col></Col>
                                        <Col>$99</Col>
                                      </Row>
                                    </Container>
                                    <br />
                                    <Container>
                                      <Row>
                                        <Col style={{ font: "5px" }}>
                                          <Card.Subtitle>
                                            Service changes
                                          </Card.Subtitle>
                                        </Col>
                                        <Col></Col>
                                        <Col>${serviceFee}</Col>
                                      </Row>
                                    </Container>
                                    <br />
                                    <Container>
                                      <Row>
                                        <Col style={{ font: "5px" }}>
                                          <Card.Subtitle>Total</Card.Subtitle>
                                        </Col>
                                        <Col></Col>
                                        <Col>${totalAmount}</Col>
                                      </Row>
                                    </Container>
                                  </Card.Text>
                                  <Button
                                    variant="warning"
                                    type="submit"
                                    style={{ width: "100%" }}
                                    onClick={Booking}
                                  
                                  >
                                    Book Now
                                  </Button>
                                </Card.Body>
                              </Card>
                            </div>
                          </Col>
                        </div>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>
                );
              })}
          </Container>
        </section>
      </div>
    </div>

  )
}
