import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ConfirmCard = () => {
  return (
    <>
      <div
        className='bg-white text-center rounded-4 '
        style={{ height: '500px', width: '80%' }}
      >
        <Row>
          <Col className='d-flex justify-content-end'>
            <img
              src='./X sign.svg'
              alt='exit'
              style={{ width: '10%', cursor: 'pointer' }}
        
            />
          </Col>
        </Row>
        <Row className='justify-content-center mt-5'>
          <Col className=''>
            <img className='' src='./checkicon.svg' alt='checkIcon' />
          </Col>
        </Row>
        <Row>
          <Col className='mt-4'>
            <h2>Great!</h2>
          </Col>
        </Row>
        <Row>
          <Col xl={2}></Col>
          <Col xl={8} className='mt-3'>
            <p>
              Your ad was successfully registered! Now all you have to do is
              cross your fingers and stay positive!
            </p>
          </Col>
          <Col xl={2}></Col>
        </Row>
      </div>
    </>
  );
};
export default ConfirmCard;
