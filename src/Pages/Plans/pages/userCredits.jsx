import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserCardActive from '../Components/usercardActive.jsx';
import UserCardInActive from '../Components/usercardinActive.jsx';
export const userCredits = () => {
  return (
    <div>
      <Row>
        <Col xl={12}>
          {' '}
          <Row className='mt-3 '>
            <Col>
              <h2 className='text-muted '>All users</h2>
            </Col>
          </Row>
          <Row className='mt-3 '>
            <Col xl={11}>
              <div className='border rounded-3 w-100 d-flex justify-content-between align-items-center p-2'>
                <input type='search' placeholder='Search User' />
                <img src='./Seacrh.svg' alt='' />
              </div>
            </Col>
            <Col xl={1} cla>
              <button
                className='w-100 border-0 text-white rounded-3  p-2'
                style={{ backgroundColor: '#596068' }}
              >
                {' '}
                Filter
              </button>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <UserCardActive />
            </Col>

            <Col xl={6}>
              <UserCardInActive />
            </Col>
            <Col xl={6}>
              <UserCardActive />
            </Col>

            <Col xl={6}>
              <UserCardInActive />
            </Col>

            <Col xl={6}>
              <UserCardActive />
            </Col>

            <Col xl={6}>
              <UserCardInActive />
            </Col>

            <Col xl={6}>
              <UserCardActive />
            </Col>

            <Col xl={6}>
              <UserCardInActive />
            </Col>

            <Col xl={6}>
              <UserCardActive />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default userCredits;
