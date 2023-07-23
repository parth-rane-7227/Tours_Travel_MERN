import React from 'react';
import './Menu.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../images/logo.png';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../Register/Login';
import { Register } from '../Register/Register';
import { Home } from '../Home/Home';
import { Responsive } from '../imageGallery/Responsive';
import { Tours } from '../Tours/Tours';
import { About } from '../About/About';
import { Fans } from '../Fans/Fans';
import { Booking } from '../new/Booking';
import { Tour } from '../new/Tour';

export const Menu = () => {
    return (
        <div>

            <div className="Nav1">
                {/* <Container>
                                <Row>
                                    <Col>
                                        <img src={logo} className="logo" />
                                    </Col>
                                    <Col xs={5}>
                                        <Navbar>
                                            <Container>
                                                <Nav className="me-auto text">
                                                    <Nav.Link href="#/home" className='offset-9 hn'>Home</Nav.Link>
                                                    <Nav.Link href="/#about" className='offset-4 an'>About</Nav.Link>
                                                    <Nav.Link href="#/tours" className='offset-4 tn'>Tour</Nav.Link>
                                                </Nav>
                                            </Container>
                                        </Navbar>
                                    </Col>
                                    <Col >
                                        <Navbar>
                                            <Container>
                                                <Nav className="me-auto text offset-5">
                                                    <Nav.Link href="#/login" className='offset-7 ln'>Login</Nav.Link>
                                                    <Button href='#/register' variant="warning" className='offset-3 Butt'>Register</Button>
                                                </Nav>
                                            </Container>
                                        </Navbar>
                                    </Col>
                                </Row>
                            </Container> */}
                <Navbar expand="lg">
                    <Container >
                        <Navbar.Brand>
                            <img src={logo} className="logo" alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='me-auto mx-auto'>
                                <Nav.Link href="#/home" className="hn">Home</Nav.Link>
                                <Nav.Link href="#/about" className="an lg:ms-5 sm:mb-3">About</Nav.Link>
                                <Nav.Link href="#/tours" className="tn lg:ms-5 sm:mb-3">Tour</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#/login" className="ln">Login</Nav.Link>
                                <Button href="#/register" variant="warning" className="Butt">Register</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <HashRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/tours" element={<Tours />} />
                    <Route path="/tour" element={<Tour />} />
                    <Route path="/book" element={<Booking />} />
                    <Route path="/gallery" element={<Responsive />} />
                    <Route path="/book/:id" element={<Booking />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/menu" />} />
                </Routes>
            </HashRouter>

        </div>

    );
}
