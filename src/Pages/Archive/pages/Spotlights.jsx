import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SpotlightCard from '../components/SpotlightCard.jsx';
export const Spotlights = () => {
  return (
    <div>
      <Row>
        <Col xl={4}>
          <SpotlightCard />
        </Col>
        <Col xl={4}>
          <SpotlightCard />
        </Col>
        <Col xl={4}>
          <SpotlightCard />
        </Col>
        <Col xl={4}>
          <SpotlightCard />
        </Col>
        <Col xl={4}>
          <SpotlightCard />
        </Col>
        <Col xl={4}>
          <SpotlightCard />
        </Col>
        <Col xl={4}>
          <SpotlightCard />
        </Col>
      </Row>
    </div>
  );
};
export default Spotlights;
