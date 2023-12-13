import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TabBar from '../Components/SolvedTabbar.jsx';
export const Solved = () => {
  return (
    <div>
      <Row>
        <Col
          xs={10}
          md={12}
          xl={12}
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          <Row className='mt-4'>
            <TabBar />
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Solved;
