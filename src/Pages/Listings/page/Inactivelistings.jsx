import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ListingCards from '../components/Inactivelistings.jsx';
export const Inactivelistings = () => {
  return (
    <div>
      <Row>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ListingCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ListingCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ListingCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ListingCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ListingCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ListingCards />
        </Col>
      </Row>
    </div>
  );
};
export default Inactivelistings;
