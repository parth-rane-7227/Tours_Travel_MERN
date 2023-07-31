import React from 'react'
import './Tour.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImLocation2 } from 'react-icons/im';
import Tower from '../images/Tower.jpg'
import Bali from '../images/Bali.jpg'
import Snow from '../images/Snow.jpg'
import sunrise from '../images/sunrise.jpg'
import nusa from '../images/nusa.jpg'
import japan from '../images/japan.jpg'
import greece from '../images/greece.jpg'
import thailand from '../images/thailand.jpg'
import star from '../images/star.jpg'
import { useNavigate } from 'react-router-dom';


export const Tour = () => {
  const navigate = useNavigate();

  const handleBook=(v)=>{
    // const id = event.target.dataset.id;
    
    navigate(`/book/${v.id}`);
    console.log(v.id);
    console.log(v.location);
  }

  const data = [
    { id:"1",location: 'Londan', cardTitle: 'Westminister Bridge', iname: Tower },
    { id:"2",location: 'Indonesia', cardTitle: 'Bali, Indonesia', iname: Bali },
    { id:"3",location: 'Thailand', cardTitle: 'Snowy Mountanis,Thailand', iname: Snow },
    { id:"4",location: 'Thailand', cardTitle: 'Beautiful-Sunrise,Thailand', iname: sunrise },
    { id:"5",location: 'Indonesia', cardTitle: 'Nusa Pendia Bali,Indonesia', iname: nusa },
    { id:"6",location: 'Japan', cardTitle: 'Cherry Blossoms Spring', iname: japan },
    { id:"7",location: 'Greece', cardTitle: 'Holmen Lofoten', iname: greece },
    { id:"8",location: 'Thailand', cardTitle: 'Doi Inthanon', iname: thailand }
  ]
  return (
    <>
      <Container>
        <Row>
          <Col lg="12 mb-4 mt-3">
            <div>
              <h1>Our Tour</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {
            data.map((v, i) => {
              const { id, location, cardTitle, iname } = v
              return <div  key={id}>
                <Card style={{ width: '18rem', height: '100%' }} className='offset-2 card1'>
                  <Card.Img style={{ height: '250px', width: '100%' }} variant="top" src={iname} />
                  <div style={{ padding: '10px' }}>
                    <Container>
                      <Row>
                        <Col>
                          <Card.Title><ImLocation2 style={{ color: "orange" }} />{location}</Card.Title></Col>
                        <Col>
                          <Card.Text>
                            <img src={star} style={{ width: '15px', height: '15px' }} alt="" /><b>4.2(2)</b>
                          </Card.Text>
                        </Col>
                        <Card.Text> <b>{cardTitle}</b></Card.Text>
                        <Card.Text><span style={{ color: "orange" }}>$99</span> /per person</Card.Text>
                        <Container>
                          <Row>
                            <Col></Col>
                            <Col>
                              <Button variant="warning" type='submit' onClick={()=> handleBook(v)}>Book Now
                              </Button>
                            </Col>
                          </Row>
                        </Container>
                      </Row>
                    </Container>
                  </div>
                </Card>
              </div>
            })
          }
        </div>
      </Container><br></br>
    </>
  )
}
