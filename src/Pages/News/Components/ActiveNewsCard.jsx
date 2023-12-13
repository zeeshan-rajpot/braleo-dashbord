import React from 'react';

export const ActiveNewsCard = () => {
  return (
    <div className='d-flex flex-wrap mt-3'>
      <div className='col-md-4 col-xl-3 mb-3'>
        <img
          src='https://plus.unsplash.com/premium_photo-1661510100033-2f86c856fe15?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='person'
          className='img-fluid rounded-3'
        />
      </div>
      <div className='col-md-8 col-xl-9'>
        <h4 className='fw-bold ms-0 ms-md-4' style={{ color: '#495057',fontSize:'21px' }}>
          Former US Vice President Mike Pence plans to launch campaign at...
        </h4>
        <div className='d-flex align-items-center ms-0 ms-md-4'>
          <img src='./newsCardicon.svg' alt='icon' />
          <span
            className='ms-3'
            style={{
              color: ' #A77C0E',
              fontSize: '11.5px',
            }}
          >
            Braelo News
          </span>
        </div>
        <div className='d-flex ms-0  ms-md-4 justify-content-between align-items-center'>
          <div>
            <p className='text-muted' style={{fontSize:'15px' }}>Scheduled for 12/23/2023 at 09:00 am</p>
            <span className='text-secondary' style={{fontSize:'13px'}}>by @braelonews</span>
          </div>
          <div>
            <button
              className='border-0 me-5 w-75 p-2 rounded-4 text-white'
              style={{ backgroundColor: '#CD9403' }}
            >
              Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveNewsCard;
