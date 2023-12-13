import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import './SpotlightCard.css';

export const SpotlightCard = () => {
  return (
    <div>
      <Card
        className='rounded-4 mt-4 ms-auto me-auto position-relative'
        style={{
          width: '18rem',
          height: '30rem',
          backgroundImage: `url('./Archieveimages/Rectangle 23790.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='overlay'></div>
        <Row className='my-2'>
          <div className='text-end px-4 pt-2 position-absolute'>
            <img
              src='./Archieve.svg'
              className='archive-icon' // This class maintains the opacity of 1
              alt=''
            />
          </div>
        </Row>

        <div
          className='Rectangular d-flex ms-auto me-auto'
          style={{ marginTop: '220px', width: '90%' }}
        >
          <div className='imgSection'>
            <img
              src='./Archieveimages/Preview.png'
              alt='headingpicture'
              className='headingImage'
              style={{ width: '100%', height: '100%', borderRadius: '15px' }}
            />
          </div>
          <div className='contentSection'>
            <h1 className='heading'>The Power of Networking</h1>
            <p className='subheading1 my-0'>
              {' '}
              <img
                src='./price.svg'
                alt='logo'
                style={{ width: '10%', height: '10%', marginRight: '5px' }}
              />
              $ VIP 199,00
            </p>
            <p className=' subheading my-0'>
              <img
                src='./location.svg'
                alt='logo'
                style={{ width: '10%', height: '10%', marginRight: '5px' }}
              />
              Miami
            </p>
          </div>
        </div>
        <Card.Text className='last text-white text-align-right me-3'>
          <strong className='lastheading'>
            Joined at 4:33pm by @crissgermano{' '}
          </strong>
          <br />
          Saturday 23 September 2023 - Florida Miami
        </Card.Text>
      </Card>
    </div>
  );
};

export default SpotlightCard;
