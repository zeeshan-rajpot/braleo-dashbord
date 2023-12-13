import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdsCard from '../components/AdsCard.jsx';
export const Ads = () => {
  return (
    <div>
      <Row>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
        <Col xl={4}>
          <AdsCard />
        </Col>
      </Row>
    </div>
  );
};
export default Ads;
