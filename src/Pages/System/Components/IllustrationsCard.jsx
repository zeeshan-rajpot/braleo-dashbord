import React from 'react';
import { Link } from 'react-router-dom';
export const IllustrationsCard = ({ img, message }) => {
  return (
    <div
      className='mt-3'
      style={{ backgroundColor: '#F7F8F9', height: '30rem' }}
    >
      <div className='text-end p-4'>
        <Link to='/EditIllustrations'>
          <img src='./Systemiconpen.svg' alt='' />
        </Link>
      </div>
      <div className='text-center'>
        <img src={img} alt='' />
        <p className='fw-bold fs-5 py-5 text-muted'>{message}</p>
      </div>
    </div>
  );
};
export default IllustrationsCard;
