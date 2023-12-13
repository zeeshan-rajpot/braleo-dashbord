import React from 'react';
import OtherTabs from '../Components/OtherTabs.jsx';
import { Row, Col } from 'react-bootstrap';
import SolvedCard from '../Components/SolvedCard.jsx';
export const tabSolved = () => {
  return (
    <div>
      <Row>
        <OtherTabs />
      </Row>
      <Row>
        <Col xl={4}>
          <SolvedCard
            Name='  Wilian Roberto'
            Description=" Hello, how are you? I'd like to report a problem that happened to me
          when I registered my product on the platform..."
            Date=' September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/Wilian Roberto.png'
          />
        </Col>
        <Col xl={4}>
          <SolvedCard
            Name='Alana Michele'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/usergirlimage.png'
          />
        </Col>
        <Col xl={4}>
          <SolvedCard
            Name='Jeferson Silva'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/Jeferson Silva.png'
          />
        </Col>
        <Col xl={4}>
          <SolvedCard
            Name='Jonathan Kellvin'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/menuserimage.png'
          />
        </Col>
        <Col xl={4}>
          <SolvedCard
            Name='Kelly Gonzales'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/userKellyimage.png'
          />
        </Col>
        <Col xl={4}>
          <SolvedCard
            Name='Selena Silva'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/userSelenaimage.png'
          />
        </Col>
      </Row>
    </div>
  );
};
export default tabSolved;
