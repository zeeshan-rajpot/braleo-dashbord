import React from 'react';

export const ConfirmMessage = ({ onHide }) => {
  return (
    <div className='bg-white rounded-4 w-100' style={{ height: '60vh' }}>
      <div className='text-end p-2'>
        <img src='./X sign.svg' role='button' onClick={onHide} alt='' />
      </div>
      <div className='text-center my-5'>
        <img src='./checkicon.svg' style={{}} alt='' />
        <h5 className='mt-4 fs-3 text-muted'> You did it!</h5>
        <p className='pt-2 text-secondary  fs-5'>
          Your reply has been <br />
          successfully sent!
        </p>
      </div>
    </div>
  );
};
export default ConfirmMessage;
