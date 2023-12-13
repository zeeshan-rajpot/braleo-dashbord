import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

export const BannerTab = () => {
  const [activeButton, setActiveButton] = useState('newPlan');

  const handleButtonClick = buttonType => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={8} lg={9} xs={3}>
          <h3 className='text-muted'>Suport</h3>
        </Col>
      </Row>
    </div>
  );
};

export default BannerTab;
