import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ListingCard from '../components/ListingCard.jsx';
export const Listings = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <ListingCard />
        </Col>
        <Col xl={6}>
          <ListingCard />
        </Col>
        <Col xl={6}>
          <ListingCard />
        </Col>
        <Col xl={6}>
          <ListingCard />
        </Col>
        <Col xl={6}>
          <ListingCard />
        </Col>
        <Col xl={6}>
          <ListingCard />
        </Col>
        <Col xl={6}>
          <ListingCard />
        </Col>
      </Row>
    </div>
  );
};
export default Listings;
