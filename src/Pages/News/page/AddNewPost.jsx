import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../../Components/SideBar.jsx';
import NaveBar from '../../../Components/NaveBar.jsx';
import AddNewPostBannerTab from '../Components/AddNewPostBannerTab.jsx';
import AddNewPage from '../Components/AddNewPostPage.jsx';

export const AddNewPost = () => {
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
            <SideBar activetabe='News' />
          </Col>
          <Col md={10} xs={10} style={{ height: '100vh', overflowY: 'auto' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <AddNewPostBannerTab />
            </Row>
            <Row>
              <AddNewPage />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AddNewPost;
