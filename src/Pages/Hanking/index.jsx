import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import NaveBar from '../../Components/NaveBar';
import BannerTab from './components/BannerTab.jsx';
import TabBarr from './components/Tabbar.jsx';
export const index = () => {
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            md={2}
            xs={2}
            className=' text-center p-0'
            style={{ backgroundColor: '#495057', height: '100vh' }}
          >
            <SideBar activetabe='Hanking' />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <NaveBar />
            </Row>
            <Row  className='spaceadjust'>
              <BannerTab />
            </Row>
            <Row  className='spaceadjust'>
              <TabBarr />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
