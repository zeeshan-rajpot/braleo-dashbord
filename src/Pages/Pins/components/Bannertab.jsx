import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Bannertab = () => {
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3 d-flex justify-content-between align-items-center'>
        <Col xl={10} lg={8} xs={6}>
          <h3 className='text-muted'>Pins</h3>
        </Col>
        <Col xl={2} lg={4} xs={6}>
          <Link to='/CreateNewPins'>
            {' '}
            <button
              className='w-100 p-2 border-0 text-white rounded-3 '
              style={{ backgroundColor: '#596068' }}
            >
              Create New Pins{' '}
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default Bannertab;
