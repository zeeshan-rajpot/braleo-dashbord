import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ColoumnGraph from '../components/ColoumnGraph.jsx';
import GraphCard from '../components/GraphCard.jsx';
import LineChar from '../components/LineChart.jsx';
import SusbscriStat from '../components/SusbscriptionState.jsx';
export const Generaldata = () => {
  return (
    <div className='w-100 pb-5 ' style={{ height: '170vh' }}>
      <Row className='mt-4'>
        <h2
          style={{ color: '#3A4248', fontSize: '55.84px', fontWeight: '800' }}
        >
          $120,420.50
        </h2>
        <p style={{ color: '#747A80', fontSize: '18.61px', fontWeight: '400' }}>
          Total assessed all period{' '}
          <span
            className='ms-2'
            style={{
              color: '#A9B4BF',
              fontSize: '18.61px',
              fontWeight: '700',
            }}
          >
            USD
          </span>
        </p>
      </Row>
      <Row className='mt-3'>
        <Col xs={12} md={6} xl={3} lg={3} className='mt-3'>
          <GraphCard title='New User' value='200' Percentage={'+10%'} />
        </Col>
        <Col xs={12} md={6} xl={3} lg={3} className='mt-3'>
          <GraphCard title='New Listings' value='200' Percentage={'+70%'} />
        </Col>
        <Col xs={12} md={6} xl={3} lg={3} className='mt-3'>
          <GraphCard title='New Ads' value='200' Percentage={'+40% '} />
        </Col>
        <Col xs={12} md={6} xl={3} lg={3} className='mt-3'>
          <GraphCard title='New Spotlights' value='200' Percentage={'+30%'} />
        </Col>
      </Row>

      <Row className='my-3 '>
        <Col xs={12}>
          <ColoumnGraph />
        </Col>
      </Row>
      <Row className='mt-3 d-flex mb-5 p-3'>
        <Col
          md={12}
          xl={9}
          lg={8}
          xs={12}
          className='d-flex p-0  flex-column '
          style={{ border: '1px solid #A9B4BF' }}
        >
          <LineChar />
        </Col>
        <Col
          xs={12}
          xl={3}
          md={6}
          className='d-flex ms-5'
          style={{ backgroundColor: '#F8F9FA', width: '300px' }}
        >
          <SusbscriStat />
        </Col>
      </Row>
    </div>
  );
};
export default Generaldata;
