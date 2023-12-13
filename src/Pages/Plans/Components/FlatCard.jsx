import React from 'react';
import { Row } from 'react-bootstrap';
import './faltCard.css';
export const FlatCard = () => {
  return (
    <div
      className='mb-5 pb-5'
      style={{
        borderRadius: ' 27.042px',
        border: '2.221px solid #CD9403',
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
          Flat
        </p>
        <p className='mb-4 mt-3 ' style={{ fontSize: '27.04px' }}>
          <b> $ Free </b>
          <span
            className='ms-1'
            style={{
              color: '#616161',
              fontSize: '   15.21px',
            }}
          >
            /month
          </span>{' '}
        </p>
      </div>
      <div
        className=' w-75 m-auto mt-4'
        style={{ fontSize: '13.52px', fontWeight: '500' }}
      >
        <p>
          <img
            src='./cards/Categories=Check, Component=Additional Icons.svg'
            alt=''
            className='me-3'
          />
          2 monthly ads
        </p>
        <p>
          <img
            src='./cards/Categories=Check, Component=Additional Icons.svg'
            alt=''
            className='me-3'
          />
          20 monthly highlights
        </p>
      </div>
    </div>
  );
};
export default FlatCard;
