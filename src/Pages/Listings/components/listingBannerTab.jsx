import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const NotificationTabBar = () => {
  const [activeTab, setActiveTab] = useState('newMessage');
  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Container className=''>
        <Row className='mt-4 border-bottom pb-3'>
          <Col md={6} xs={12}>
            {/* <Link className='text-muted' to='/Listings'> */}
            <h3 className='text-muted'>Listings</h3>
            {/* </Link> */}
          </Col>
          <Col md={3} xs={6} lg={3} className='d-flex justify-content-end align-items-center'>
            <Col md={5} lg={3} xs={6}>
              <Link className='text-muted' to='/Actionsbutton'>
                <img src='./listingCopy.svg' alt='copybutton' />{' '}
              </Link>
            </Col>
            <Col md={3} lg={3} xs={6}>
              <img
                src='./listingFilter.svg'
                alt='copybutton'
              />
            </Col>
          </Col>
          <Col md={3} xs={6}>
            <Link className='text-muted' to='/CreateListing'>
              <h3
                className={`d-flex align-items-center mt-md-0 justify-content-center fs-6 rounded-2 ${
                  activeTab === 'newMessage' ? 'active-tab' : ''
                }`}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor:
                    activeTab === 'newMessage' ? '#CD9403' : '#868E9633',
                  color: activeTab === 'newMessage' ? 'white' : '#75818D',
                  cursor: 'pointer',
                }}
                onClick={() => handleTabClick('newMessage')}
              >
                New Listing
              </h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotificationTabBar;
