import React from 'react';
import { Row } from 'react-bootstrap';
import './faltCard.css';
export const FlatCard = () => {
  return (
    <div
      style={{
        borderRadius: ' 27.042px',
        backgroundColor: '#FFEDBF',
        height: '449px',
        width: '100%',
        margin: 'auto',
      }}
    >
      <div className='text-end p-3'>
        <img src='/public/cards/Group 1000004914 (1).svg' alt='' />
      </div>

      <div
        className='text-center w-75 m-auto mb-3 mt-5'
        style={{ borderBottom: '1px solid #EFD89D' }}
      >
        <p
          style={{
            color: '#282928',
            fontFamily: 'AllRoundGothic-Bold',
            fontSize: '48.296px',
            fontWeight: '400',
          }}
        >
          yellow
        </p>
        <p className='mb-4 mt-3 '>
          <b style={{ fontSize: '27.04px' }}> $ 14.99 </b>
          <span className='ms-1' style={{ color: '#616161' }}>
            /month
          </span>{' '}
        </p>
      </div>
      <div className=' w-75 m-auto mt-4'style={{ fontSize: '13.52px', fontWeight: '500' }}>
        <p>
          <img src='./Darker Tick mark.svg' alt='' className='me-3' />4 monthly
          ads
        </p>
        <p>
          <img src='./Darker Tick mark.svg' alt='' className='me-3' />1 Pin
          fixed on map all yours
        </p>
        <p>
          <img src='./Darker Tick mark.svg' alt='' className='me-3' />1 Pin
          fixed on map all yours
        </p>
      </div>
    </div>
  );
};
export default FlatCard;
