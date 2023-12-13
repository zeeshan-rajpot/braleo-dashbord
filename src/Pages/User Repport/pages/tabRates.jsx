import React from 'react';
import OtherTabs from '../Components/OtherTabs.jsx';
import { Row, Col } from 'react-bootstrap';
import RatesCard from '../Components/RatesCard.jsx';
export const tabRates = () => {
  return (
    <div>
      <Row>
        <OtherTabs />
      </Row>
      <Row>
        <Col xl={4}>
          <RatesCard
            Name='  Wilian Roberto'
            Description=" Hello, how are you? I'd like to report a problem that happened to me
          when I registered my product on the platform..."
            Date=' September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/Wilian Roberto.png'
          />
        </Col>
        <Col xl={4}>
          <RatesCard
            Name='Alana Michele'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/usergirlimage.png'
          />
        </Col>
        <Col xl={4}>
          <RatesCard
            Name='Jeferson Silva'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/Jeferson Silva.png'
          />
        </Col>
        <Col xl={4}>
          <RatesCard
            Name='Jonathan Kellvin'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/menuserimage.png'
          />
        </Col>
        <Col xl={4}>
          <RatesCard
            Name='Kelly Gonzales'
            Description="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            Date='September 15, 2023 at 6pm | iOs | Florida'
            Image='./image/userKellyimage.png'
          />
        </Col>
        <Col xl={4}>
          <RatesCard
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
export default tabRates;
