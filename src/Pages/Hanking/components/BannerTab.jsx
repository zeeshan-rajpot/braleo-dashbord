import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const BannerTabBar = () => {
  const [activeTab, setActiveTab] = useState('newMessage');
  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Container className=''>
        <Row className='mt-4 border-bottom pb-3'>
          <Col md={9} xs={6} lg={9}>
            <h3 className='text-muted'>Hanking</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BannerTabBar;
