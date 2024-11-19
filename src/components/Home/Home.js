import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Home2 from './Home2';
import Type from './Type';
import Particle from '../Particle';
import fetchImageBase64 from '../../fetchBase64img';

function Home() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const base64 = await fetchImageBase64('images', 'img1');
      setImageData(base64);
    };

    fetchData();
  }, []);
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> WINNI PESIK</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={imageData}
                alt='home pic'
                className='img-fluid rounded-pill'
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
