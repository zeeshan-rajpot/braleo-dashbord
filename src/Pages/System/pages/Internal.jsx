import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardUser from '../Components/InternalUserCard.jsx';
export const Internal = () => {
  return (
    <div>
      <Row className='ms-1'>
        <Col xl={6}>
          <CardUser
            imageSrc='./image/Internal User/Criss Germano.png'
            name='Criss Germano'
            role='Administrator'
          />
        </Col>
        <Col xl={6}>
          <CardUser
            imageSrc='./image/Internal User/Marly Silva.png'
            name='Marly Silva'
            role='Brand Manager'
          />
        </Col>
        <Col xl={6}>
          <CardUser
            imageSrc='./image/Internal User/Paul Germano.png'
            name='Paul Germano'
            role='Comercial'
          />
        </Col>
        <Col xl={6}>
          <CardUser
            imageSrc='./image/Internal User/Ali Devstore.png'
            name='Ali Devstore'
            role='Web developer'
          />
        </Col>
        <Col xl={6}>
          <CardUser
            imageSrc='./image/Internal User/Ana Muller.png'
            name='Ana Muller'
            role='Copywriter'
          />
        </Col>
        <Col xl={6}>
          <CardUser
            imageSrc='./image/Internal User/Jhon Silva.png'
            name='Jhon Silva'
            role='Visual Designer'
          />
        </Col>
      </Row>
    </div>
  );
};
export default Internal;
