import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const BannerTab = () => {
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={10} lg={9} xs={8}>
          <h3 className='text-muted'>System</h3>
        </Col>
        <Col>
          <Link to='/CreateNewUser'>
            <button
              className='text-white p-3 w-100 rounded-4 border-0'
              style={{ backgroundColor: '#CD9403' }}
            >
              Create new user
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default BannerTab;
