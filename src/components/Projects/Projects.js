import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import chatify from '../../Assets/Projects/chatify.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Sistem Informasi Kantin Online'
              description='Sistem ini di buat untuk memudahkan pelanggan/mahasiswa berbelanja melalui aplikasi/web Kantin online'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='CV. Mitra Karya Nusantara'
              description='peneliti ingin mengoptimalisasikan proses pelaporan perusahaan CV. Mitra Karya Nusantara melalui penerapan Business Process Improvement (BPI) dalam meningkatkan kualitas dan waktu pada sistem pelaporan Order-to-Cash yang terintegrasi.'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='STRATEGIC PLAN UNIQLO'
              description='membuat proyek ini untuk menyasar Generasi Milenial dan Gen Z, penduduk perkotaan, serta kelas menengah dengan menawarkan pakaian berkualitas tinggi yang nyaman, serbaguna, dan terjangkau guna mendukung gaya hidup aktif dan modern.
'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
