import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const BannerTab = () => {
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={8} lg={9} xs={3}>
          <h3 className='text-muted'>Plans</h3>
        </Col>
      </Row>
    </div>
  );
};

export default BannerTab;
