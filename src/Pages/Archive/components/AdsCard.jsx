import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import './Card.css';
export const AdsCard = () => {
  return (
    <div>
      <Card
        className='text-left border-0  mt-4 position-relative rounded-4 '
        style={{
          width: '100%',
          height: '90%',
          backgroundImage: `url('./Archieveimages/Rectangle 101.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {' '}
        <div className='overlay'></div>
        <Row className='my-2'>
          <Col className='d-flex justify-content-end me-3 position-absolute'>
            <img
              src='./Archieve.svg'
              alt=''
              className='archive-icon'
              // style={{ width: '12%' }}
            />
          </Col>
        </Row>
        <Card.Body className=''>
          <Card.Title style={{ fontSize: '17px', color: '#fff' }}>
            Advertise your company
            <br /> at Braelo!
          </Card.Title>
          <Card.Text style={{ fontSize: '15px' }}>
            <p
              className='my-0 mt-3'
              style={{ width: '35%', color: '#fff', fontSize: '10.72px' }}
            >
              Check out our plans and boost your sales!
            </p>
            <button className='cardbtn rounded-4 p-2 border-0 mt-3'>
              Advertise Now
            </button>
            <p
              // className='my-0'
              style={{
                fontSize: '10px',
                textAlign: 'right',
                color: '#fff',
                marginBottom: '15px',
              }}
            >
              Joined at 4:33pm by @crissgermano <br />
              Saturday 23 September 2023 - Florida Miami
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default AdsCard;
