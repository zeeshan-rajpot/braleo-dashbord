import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsCard from '../Components/ActiveNewsCard.jsx';
export const Activeposts = () => {
  return (
    <div>
      <Row className='mt-4'>
        <Col>
          <input
            placeholder='Search |'
            type='search'
            className='border-1 border w-100 p-2 rounded-3'
          />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
        <Col lg={6} xl={6} xs={12}>
          <NewsCard />
        </Col>
      </Row>
    </div>
  );
};
export default Activeposts;
