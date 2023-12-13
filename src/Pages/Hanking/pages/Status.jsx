import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StatusCard from '../components/StatusCard.jsx';

export const Status = () => {
  // Assume you have an array of StatusCards data
  const statusCardsData = [
    {
      Profile: './image/Criss Germano.png',
      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '01',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '02',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '03',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '04',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '05',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '06',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '07',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '08',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '09',
    },
    {
      Profile: './image/Criss Germano.png',

      Name: 'Criss Germano',
      Designation: 'Consumer',
      Number: '10',
    },
    // ... Add more StatusCard data as needed
  ];

  // Sort the statusCardsData based on the Number property
  const sortedStatusCards = statusCardsData.sort(
    (a, b) => parseInt(a.Number) - parseInt(b.Number)
  );

  // Filter the cards for left side (Numbers 1-6) and right side (Numbers 6-10)
  const leftSideCards = sortedStatusCards.filter(
    card => parseInt(card.Number) <= 6
  );
  const rightSideCards = sortedStatusCards.filter(
    card => parseInt(card.Number) > 6 && parseInt(card.Number) <= 10
  );

  return (
    <div>
      <Row>
        {/* Left side */}
        {leftSideCards.map((card, index) => (
          <Col xl={6} key={`left-${index}`}>
            <StatusCard
              Profile={card.Profile}
              Name={card.Name}
              Designation={card.Designation}
              Number={card.Number}
            />
          </Col>
        ))}

        {/* Right side */}
        {rightSideCards.map((card, index) => (
          <Col xl={6} key={`right-${index}`}>
            <StatusCard
              Profile={card.Profile}
              Name={card.Name}
              Designation={card.Designation}
              Number={card.Number}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Status;
