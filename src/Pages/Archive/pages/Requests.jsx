import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardUser from '../components/RequestCard.jsx';
export const Requests = () => {
  return (
    <div>
      <Row className='mt-5'>
        <Col xl={4}>
          <CardUser
            headtitle='Reclain'
            title='Wilian Roberto'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='  September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='https://images.unsplash.com/photo-1551022372-0bdac482b9d6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Rate'
            title='Alana Michele'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/usergirlimage.png'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Reclain'
            title='Jeferson Silva'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Rate'
            title='Jonathan Kellvin'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/menuserimage.png'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Rate'
            title='Kelly Gonzales'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/userKellyimage.png'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Reclain'
            title='Selena Silva'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/userSelenaimage.png'
          />
        </Col>
      </Row>
    </div>
  );
};
export default Requests;
