import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import HanckingCard from '../components/HanckingCard.jsx';
export const Hanking = () => {
  const [activeCard, setActiveCard] = useState(1); // Default first card as active

  const handleCardClick = cardNumber => {
    setActiveCard(cardNumber);
  };
  return (
    <div>
      <Row>
        <HanckingCard
          Profile='./image/Criss Germano.png'
          Name='Criss Germano'
          Designation='Consumer'
          Icons='./Grid, Layout.svg'
          isActive={activeCard === 1} // Check if the card is active
          onClick={() => handleCardClick(1)} // Pass a function to change the active card
        />
        <HanckingCard
          Profile='./image/Criss Germano.png'
          Name='Criss Germano'
          Designation='Consumer'
          Icons='./Grid, Layout.svg'
          isActive={activeCard === 2} // Check if the card is active
          onClick={() => handleCardClick(2)} // Pass a function to change the active card
        />
        <HanckingCard
          Profile='./image/Criss Germano.png'
          Name='Criss Germano'
          Designation='Consumer'
          Icons='./Grid, Layout.svg'
          isActive={activeCard === 3} // Check if the card is active
          onClick={() => handleCardClick(3)} // Pass a function to change the active card
        />
        <HanckingCard
          Profile='./image/Criss Germano.png'
          Name='Criss Germano'
          Designation='Consumer'
          Icons='./Grid, Layout.svg'
          isActive={activeCard === 4} // Check if the card is active
          onClick={() => handleCardClick(4)} // Pass a function to change the active card
        />
        <HanckingCard
          Profile='./image/Criss Germano.png'
          Name='Criss Germano'
          Designation='Consumer'
          Icons='./Grid, Layout.svg'
          isActive={activeCard === 5} // Check if the card is active
          onClick={() => handleCardClick(5)} // Pass a function to change the active card
        />
        <HanckingCard
          Profile='./image/Criss Germano.png'
          Name='Criss Germano'
          Designation='Consumer'
          Icons='./Grid, Layout.svg'
          isActive={activeCard === 6} // Check if the card is active
          onClick={() => handleCardClick(6)} // Pass a function to change the active card
        />
      </Row>
    </div>
  );
};
export default Hanking;
