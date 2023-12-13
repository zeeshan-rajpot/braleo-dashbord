import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ActionActiveCards from '../components/ActionActiveCard.jsx';

export const ActionButtonactivelisting = () => {
  return (
    <div>
      <Row>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ActionActiveCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ActionActiveCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ActionActiveCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ActionActiveCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ActionActiveCards />
        </Col>
        <Col lg={6} xl={6} xs={12} className='mt-4'>
          <ActionActiveCards />
        </Col>
      </Row>
    </div>
  );
};
export default ActionButtonactivelisting;
