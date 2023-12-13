import React, { useState, useRef } from 'react';
import SideBar from '../../Components/SideBar.jsx';
import NaveBar from '../../Components/NaveBar.jsx';
import BannerTab from './BannerTab';
import AdvTabs from './AdvTabs';
import { Container, Row, Col } from 'react-bootstrap';
export const Advertising = () => {
  return (
    <>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0'
            style={{ backgroundColor: '#495057', height: '100vh' }}
          >
            <SideBar activetabe='Advertising' />
          </Col>
          <Col md={10} xs={10} style={{ height: '100vh', overflowY: 'auto' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab />
            </Row>
            <Row>
              <AdvTabs />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Advertising;
