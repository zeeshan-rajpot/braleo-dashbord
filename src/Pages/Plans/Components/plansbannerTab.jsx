import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

export const PlanBannerTab = () => {
  const [activeButton, setActiveButton] = useState('newPlan');

  const handleButtonClick = buttonType => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={8} lg={9} xs={3}>
          <h3 className='text-muted'>Plans</h3>
        </Col>
        <Col xl={2} lg={2} xs={9}>
          <Link to='/CreatenewPlan'>
            <button
              className={`border-0 p-3 w-100 text-white rounded-3 ${
                activeButton === 'newPlan' ? 'activeButton' : 'inactiveButton'
              }`}
              style={{
                fontSize: '16.268px',
              }}
              onClick={() => handleButtonClick('newPlan')}
            >
              New plan
            </button>
          </Link>
        </Col>
        <Col xl={2} lg={2} xs={12}>
          <Link to='/CreatePlansUser'>
            <button
              className={`border-0 p-3 w-100 text-white rounded-3 mt-3 mt-md-0 ${
                activeButton === 'newUser' ? 'activeButton' : 'inactiveButton'
              }`}
              style={{
                fontSize: '16.268px',
              }}
              onClick={() => handleButtonClick('newUser')}
            >
              New user
            </button>{' '}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default PlanBannerTab;
