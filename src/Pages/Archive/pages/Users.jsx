import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserCards from '../components/UserCard.jsx';
export const Users = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <UserCards />
        </Col>
        <Col xl={6}>
          <UserCards />
        </Col>
        <Col xl={6}>
          <UserCards />
        </Col>
        <Col xl={6}>
          <UserCards />
        </Col>
        <Col xl={6}>
          <UserCards />
        </Col>
        <Col xl={6}>
          <UserCards />
        </Col>
        <Col xl={6}>
          <UserCards />
        </Col>
      </Row>
    </div>
  );
};
export default Users;
