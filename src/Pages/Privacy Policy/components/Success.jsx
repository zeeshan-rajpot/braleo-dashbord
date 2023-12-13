import React from 'react';

export const Success = ({ onHide }) => {
  return (
    <div>
      <div
        className='bg-white rounded-4 respmob'
        style={{ height: '521.45px', width: '359.4px' }}
      >
        <div className='text-end p-3'>
          <img src='./X sign.svg' alt='' onClick={onHide} role='button' />
        </div>
        <div className='text-center'>
          <img src='./checkicon.svg' alt='' className='mt-5' />
          <p className='my-3 fs-4'>
            <b>
              Everything's <br />
              fine here!
            </b>
          </p>
          <p className='mt-3 mb-5'>
            We rocked! Our privacy policies have been successfully updated!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Success;
