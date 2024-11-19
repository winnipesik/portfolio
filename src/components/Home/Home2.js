import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/WhatsApp Image 2024-11-19 at 21.31.42_3f413500.jpg';
import Tilt from 'react-parallax-tilt';
import { AiFillInstagram } from 'react-icons/ai';
import img1 from '../../Assets/WhatsApp Image 2024-11-19 at 21.31.43_ac59663d.jpg';
import img2 from '../../Assets/WhatsApp Image 2024-11-19 at 21.31.43_5392f2e8.jpg';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I'm a university student in klabat university, I like reading
              books, playing games, and watching movies. I'm a passionate
              programmer who loves building applications and learning new
              technologies. I'm currently pursuing my Bachelor's degree.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/winnipesik'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'>
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        {/* list of unclickable picture gallery in 2x2 col */}
        <Row>
          <Col md={6} className='home-about-social'>
            <h1>My Gallery</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='home-about-social'>
            <img src={img1} alt='gallery' height='600px' />
          </Col>
          <Col md={6} className='home-about-social'>
            <img src={img2} alt='gallery' height='600px' />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
