import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gal1 from "../images/Gal1.jpg";
import Gal2 from "../images/Gal2.jpg";
import Gal4 from "../images/Gal4.jpg";
import Gal5 from "../images/Gal5.jpg";
import Gal6 from "../images/Gal6.jpg";
import Gal7 from "../images/Gal7.jpg";
import Gal8 from "../images/Gal8.jpg";
import Gal3 from "../images/Gal3.jpeg.jpg";

import harsh from "../images/harsh1.jpg";
import megha from "../images/megha1.JPG";
import parth from "../images/parth4.jpg";
import video from "../video/background-video.mp4";
import { AboutCard } from '../imageGallery/AboutCard';
import "./About.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>;



export const About = () => {
  return (
    <>
      <section className="video-container">
        <video className="background-video" src={video} autoPlay loop muted></video>
        <div className="video-content">
          <h1 className="Meeth1">About Us</h1>
        </div>
      </section>
      <Container>
        <Row>
          <Col>
            <h2 className="Meeth1">Why Choose Our Website?</h2>
            <ul>
              <span className="Designli">
                <span className="DesignSpan">Stunning Design: </span>Our website boasts an elegant and visually
                appealing design that captivates users from the moment they land
                on the page.
              </span><br></br>
              <span className="Designli">
                <span className="DesignSpan">Intuitive User Experience:  </span>We prioritize user experience, ensuring
                that our website is easy to navigate, making it a breeze to find
                the desired information or perform any actions.

              </span><br></br>
              <span className="Designli">
                <span className="DesignSpan">
                  Fast and Responsive:  </span>Our website is optimized for speed and
                responsiveness, ensuring quick loading times and smooth
                performance across various devices and screen sizes.

              </span><br></br>
              <span className="Designli">
                <span className="DesignSpan">
                  Robust Functionality:  </span>We offer a wide range of powerful features
                and functionalities, tailored to meet the diverse needs of our
                users.

              </span><br></br>

              <span className="Designli">
                <span className="DesignSpan">
                  Secure and Reliable:  </span>We prioritize the security and reliability of
                our website, implementing the latest technologies and best
                practices to protect user data.


              </span>
            </ul>
            {/* <h1 className="Meeth1">Our Top Tours</h1>
          <Row>
            <Col md="6">
             
              <img id="Gal1" src={Gal1} alt="Gallery Image" />
             
              <p className="pjs">
                With our tour management services, you can sit back, relax, and
                enjoy your journey while we handle all the details.
              </p>
            </Col>
            <Col md="3">
              <img id="Gal2" src={Gal2} alt="Gallery Image" />
              <p className="pjs">
             <b> 14 of the Best Thing's to do in Berlin</b>
              </p>
              <p className="pjs">
              With one of the top nightlife scenes in the world and fascinating historic sites to explore, here are Berlin's best experiences.
              </p>
            </Col>
            <Col md="3">
              <img id="Gal2" src={Gal3} alt="Gallery Image" />
              <p className="pjs">
             <b> How to get around Iceland, from the highest peaks to the deepest fjords</b>
              </p>
              <p className="pjs">
              It may be small but Iceland can be mightily difficult to get around. The scale and savagery of the landscape make traveling tricky – here's how to do it.
              </p>
            </Col>
          </Row> */}
            <section>
              <Container>
                <Row>
                  <Col lg="12">
                    <div>
                      <h1 className='mb-4 Meeth1'>Our Top Tours</h1>
                    </div>
                  </Col>
                  <Col lg="12" className="body1">
                    <div class="gallery">
                      <span style={{ '--i': 1 }}><img src={Gal1} /></span>
                      <span style={{ '--i': 2 }}><img src={Gal2} /></span>
                      <span style={{ '--i': 3 }}><img src={Gal3} /></span>
                      <span style={{ '--i': 4 }}><img src={Gal4} /></span>
                      <span style={{ '--i': 5 }}><img src={Gal5} /></span>
                      <span style={{ '--i': 6 }}><img src={Gal6} /></span>
                      <span style={{ '--i': 7 }}><img src={Gal7} /></span>
                      <span style={{ '--i': 8 }}><img src={Gal8} /></span>
                    </div>
                    {/* <AboutCard /> */}
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="SectionMeet">
              <h2 className="Meeth1">Meet Our Team</h2>
              <Row className="RowMeet">
                <Col md="4">
                  <div className="team-member">
                    <img className="meg" src={harsh} alt="Gallery Image" />
                    <h3>Harsh Gawali </h3>
                    <p>Travel Advisor</p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-member">
                    <img className="meg" src={megha} alt="Gallery Image" />
                    <h3>Megha Patil</h3>
                    <p>Travel Advisor</p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-member">
                    <img className="meg1" src={parth} alt="Gallery Image" />
                    <h3>Parth Rane</h3>
                    <p>Travel Advisor</p>
                  </div>
                </Col>
              </Row>
            </section>
            <section className="sectionFooter">

            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};