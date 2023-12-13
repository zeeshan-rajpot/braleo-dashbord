import React, { useState } from 'react';
import Options from '../components/userdataOptions.jsx';
import { Row, Col } from 'react-bootstrap';
import UsersCard from '../components/UserCard.jsx';

export const Userdata = () => {
  const [selectedOption, setSelectedOption] = useState('Active'); // Default to 'Active'
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOptionChange = option => {
    setSelectedOption(option);
  };

  const handleCardClick = cardIndex => {
    setSelectedCard(cardIndex);
  };

  return (
    <div className='my-5' style={{ height: '170vh' }}>
      <Row className='mt-4'>
        <Options
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
      </Row>
      <Row
        className='mt-5 m-2 rounded-4'
        style={{ backgroundColor: '#F5F7F9' }}
      >
        <div className='text-center'>
          <p
            className='mt-5 pt-5'
            style={{
              color: '#78828A',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: '700',
            }}
          >
            We found 856 results
          </p>
          <p
            className='mt-1'
            style={{
              color: '#78828A',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: '500',
            }}
          >
            for these items.
          </p>
          <Row className='d-flex justify-content-center align-items-center mt-4 mb-5'>
            <Col xs={6} md={3} lg={3} xl={2}>
              <p
                className='text-nowrap'
                style={{
                  color: '#78828A',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                }}
              >
                900k{' '}
                <span
                  style={{
                    color: '#78828A',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  users
                </span>
              </p>
            </Col>
            <Col xs={6} md={3} lg={3} xl={2}>
              <p
                className='ms-3'
                style={{
                  color: '#78828A',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                }}
              >
                199k
                <span
                  style={{
                    color: '#78828A',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  Listings
                </span>
              </p>
            </Col>
            <Col xs={6} md={3} lg={3} xl={2}>
              <p
                className='ms-3'
                style={{
                  color: '#78828A',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                }}
              >
                80k
                <span
                  style={{
                    color: '#78828A',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  ads
                </span>
              </p>
            </Col>
            <Col xs={6} md={3} lg={3} xl={2}>
              <p
                className='ms-3'
                style={{
                  color: '#78828A',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                }}
              >
                91k
                <span
                  style={{
                    color: '#78828A',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  pins
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </Row>
      <Row className='mt-5'>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
        <Col xs={12} md={6} xl={6}>
          <UsersCard
            isSelected={selectedCard === 1}
            onCardClick={() => handleCardClick(1)}
            isInactive={selectedOption === 'InActive'}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Userdata;
