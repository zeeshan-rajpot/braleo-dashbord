import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const PromotionCard = () => {
  return (
    <div className='border rounded-3 p-3 mt-4  ' style={{ width: '100%' }}>
      <Row>
        <Col md={12}>
          <div className='border-bottom d-flex pb-3'>
            <img src='./disableCard.svg' alt='braelo icon' />
            <p className='text-muted ms-2 '>Braelo promotions</p>
          </div>
          <p className='text-muted '>
            Just dropping by to let you know that there are 5 days left until
            your plan expires, eh? Don't waste time, get the plan that best fits
            your pocket now!
          </p>
          <p className='text-end py-0 text-secondary '>
            {' '}
            25 Set 2023 at 11:45 am
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default PromotionCard;
