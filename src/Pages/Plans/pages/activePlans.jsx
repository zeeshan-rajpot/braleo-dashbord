import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FlatCard from '../Components/FlatCard.jsx';
import CreatenewCard from '../Components/createNew.jsx';
import BusinessCard from '../Components/BusinessCard.jsx';

export const activePlans = () => {
  return (
    <div className='mt-5'>
      <Row>
        <Col xl={4} lg={4} md={4} xs={12}>
          <FlatCard />
        </Col>
        <Col xl={4} lg={4} md={4} xs={12}>
          <CreatenewCard />
        </Col>
        <Col xl={4} lg={4} md={4} xs={12}>
          <BusinessCard />
        </Col>  
      </Row>





    </div>
  );
};
export default activePlans;
