import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const OtherTabs = () => {
  return (
    <div>
      <Row className='mt-4'>
        <Col xl={3}>
          <select className='w-100 p-2 border-1 border rounded-3 bg-transparent text-muted'>
            <option value=''>Filter by type</option>
            <option></option>
              
          </select>
        </Col>
        <Col xl={3}>
          <select className='w-100 p-2 border-1 border rounded-3 bg-transparent text-muted'>
            <option value=''>Massive actions</option>
            <option></option>
              
          </select>
        </Col>
        <Col xl={6}>
          <div className='w-100 p-2 border-1 border rounded-3 bg-transparent text-muted d-flex justify-content-between align-items-center'>
            <input type='search' placeholder='Search' />
            <img src='./Seacrh.svg' alt='' />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default OtherTabs;
