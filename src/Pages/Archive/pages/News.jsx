import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsCards from '../components/NewsCard.jsx';
export const News = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <NewsCards />
        </Col>
        <Col xl={6}>
          <NewsCards />
        </Col>
        <Col xl={6}>
          <NewsCards />
        </Col>
        <Col xl={6}>
          <NewsCards />
        </Col>
        <Col xl={6}>
          <NewsCards />
        </Col>
        <Col xl={6}>
          <NewsCards />
        </Col>
        <Col xl={6}>
          <NewsCards />
        </Col>
      </Row>
    </div>
  );
};
export default News;
