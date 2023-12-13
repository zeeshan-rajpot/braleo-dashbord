import React from 'react';
import { Row,Col } from 'react-bootstrap';
import AdvicesCard from '../Components/AdvicesCard.jsx'
export const Advices = () => {
  return (
    <div>
      <Row className='d-flex'>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
      </Row>
    </div>
  );
};
export default Advices;
