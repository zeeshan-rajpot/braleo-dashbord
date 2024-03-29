import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NaveBar from '../../../Components/NaveBar.jsx';
import SideBar from '../../../Components/SideBar';
import BannerTab from '../Components/BannerTab.jsx';
import TabBar from '../Components/ExistingUserTabbar.jsx';
export const EditUser = () => {
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0'
            style={{ backgroundColor: '#495057', height: '100vh' }}
          >
            <SideBar activetabe='System' />
          </Col>
          <Col md={10} xs={10} style={{ height: '100vh', overflowY: 'auto' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab />
            </Row>
            <Row>
              <TabBar />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default EditUser;
