import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const Bannertab = () => {
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={10} lg={9} xs={12}>
          <h3 className='text-muted'>Privacy Policy</h3>
        </Col>
      </Row>
    </div>
  );
};
export default Bannertab;
