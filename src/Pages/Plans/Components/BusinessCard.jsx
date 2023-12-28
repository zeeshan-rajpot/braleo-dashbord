import React from 'react';
import { Row } from 'react-bootstrap';
import './faltCard.css';
export const FlatCard = () =>
{
  return (
    <div
      style={ {
        borderRadius: '27.042px',
        backgroundImage:
          'linear-gradient(139deg, #FDB807 13.25%, rgba(253, 184, 7, 0.00) 112.5%)',
        height: '449px',
        width: '100%',
        margin: 'auto',
      } }
    >
      <div className='text-end p-3'>
        <img src='/public/cards/Group 1000004914 (1).svg' alt='' />
      </div>

      <div
        className='text-center w-75 m-auto mb-3 mt-5'
        style={ { borderBottom: '1px solid #CD9403' } }
      >
        <p
          style={ {
            color: '#282928',
            fontFamily: 'AllRoundGothic-Bold',
            fontSize: '48.296px',
            fontWeight: '400',
          } }
        >
          Business
        </p>
        <p className='mb-4 mt-3 '>
          $ Free
          <span>/month</span>{ ' ' }
        </p>
      </div>
      <div
        className=' w-75 m-auto mt-4'
        style={ { fontSize: '13.52px', fontWeight: '500' } }
      >
        <p>
          <img src='./Hard Darker tick mark .svg' alt='' className='me-3' />8
          ads month
        </p>
        <p>
          <img src='./Hard Darker tick mark .svg' alt='' className='me-3' />1
          Pin on the map all yours
        </p>
        <p>
          <img src='./Hard Darker tick mark .svg' alt='' className='me-3' />
          Unlimited highlights
        </p>
        <p>
          <img src='./Hard Darker tick mark .svg' alt='' className='me-3' />
          Exclusive Support
        </p>
      </div>
    </div>
  );
};
export default FlatCard;
