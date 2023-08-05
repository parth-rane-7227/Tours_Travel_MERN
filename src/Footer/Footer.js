import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import logo1 from '../images/logo.png';
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineMailLock } from "react-icons/md";
import { MdPhone } from "react-icons/md";
// import { GrGallery } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import { FiLogIn } from "react-icons/fi";
import { BiRegistered } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { SlPlane } from "react-icons/sl";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {
  return (
    <div className="shad text-white">
      <Container>
        <Row>
          <Col>
            <img className="logo1 offset-2" src={logo1} />
            <Row>
              <Col>
                <div>
                  {/* <span>
                    Leave your Stress Behind and travel along the ride{" "}
                  </span> */}
                  <Row>
                    <Row className="offset-1">
                      <Col>
                        <AiFillInstagram
                          className="insta instaicon"
                          style={{ fontSize: "20px" }}
                        ></AiFillInstagram>
                      </Col>
                      <Col>
                        <BsGithub
                          className="git"
                          style={{ fontSize: "20px" }}
                        />
                      </Col>
                      <Col>
                        <FaFacebook
                          className="face"
                          style={{ fontSize: "20px" }}
                        />
                      </Col>
                      <Col>
                        <BsYoutube
                          className="yt"
                          style={{ fontSize: "20px" }}
                        />
                      </Col>
                    </Row>
                  </Row>
                  {/* <Link to ='#'><i class="ri-youtube-line"></i></Link> */}
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col className="mb-3 text text-white">
              <b>Discover</b>
            </Col>
            <Row className="mb-3">
              <Col className="all">
                <IoIosHome className="insta"></IoIosHome><Nav.Link href ="#/Home" className="lotext">&nbsp;Home</Nav.Link>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="all">
                <HiOutlineInformationCircle className="insta"></HiOutlineInformationCircle><Nav.Link href ="#/about" className="lotext">&nbsp;About</Nav.Link>
              </Col>
            </Row>
            <Row>
              <Col className="all">
                <SlPlane className="insta"></SlPlane><Nav.Link href ="#/tours" className="lotext">&nbsp;Tours</Nav.Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col className="mb-3 text text-white">
              <b>Quick Link</b>
            </Col>
            <Row className="mb-3">
              <Col className="all">
                <TfiGallery className="insta"></TfiGallery><Nav.Link href ="#/gallery" className="lotext">&nbsp;Gallery</Nav.Link>
              </Col>
            </Row>
            <Row className="mb-3 ">
              <Col className="all all11">               
              <FiLogIn className="insta" ></FiLogIn><Nav.Link href ="#/login" className="lotext">&nbsp;Login</Nav.Link>
              </Col>  
            </Row>
            <Row>
              <Col className="all">
                {" "}
                <BiRegistered className="insta"></BiRegistered><Nav.Link href ="#/register" className="lotext">&nbsp;Register</Nav.Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col className="mb-3 textf mt-3">
              <b>Contact</b>
            </Col>
            <Row className="mb-3">
              <Col className="all">
                <TfiLocationPin className="insta" />
                <b> Address :</b> Koregaon Park, Pune
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="all">
                <MdOutlineMailLock className="insta" />
                <b> Email :</b> travel.world@gmail.com
              </Col>
            </Row>
            <Row>
              <Col className="all all1">
                <MdPhone className="insta" />
                <b> Phone : </b> +917555555555
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row className="mb-4 offset-3 insta1">
              <span>&copy;2022-23 Developer MPH | All Rights reserved</span>
        </Row>
      </Container>
    </div>
  );
};
