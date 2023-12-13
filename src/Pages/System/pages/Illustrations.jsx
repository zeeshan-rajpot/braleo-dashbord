import React from 'react';
import { Row, Col } from 'react-bootstrap';
import IllusCard from '../Components/IllustrationsCard.jsx';
export const Illustrations = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <IllusCard
            img='./image/Illustration User/girl bought her favorite shoes.svg'
            message='Welcome'
          />
        </Col>
        <Col xl={6}>
          <IllusCard
            img='./image/Illustration User/Group 1000004632.svg'
            message='My Pins'
          />
        </Col>
        <Col xl={6}>
          <IllusCard
            img='./image/Illustration User/girl chooses clothes on the display.svg'
            message='New listing'
          />
        </Col>
        <Col xl={6}>
          <IllusCard
            img='./image/Illustration User/guy offers discounts at an online store.svg'
            message='Good Job!'
          />
        </Col>
      
        <Col xl={6}>
          <IllusCard
            img='./image/Illustration User/girl places an order at an online store.svg'
            message='Manage Plan'
          />
        </Col>
        <Col xl={6}>
          <IllusCard
            img='./image/Illustration User/Group 1.svg'
            message='Suport'
          />
        </Col>
      </Row>
    </div>
  );
};
export default Illustrations;
