import React from 'react';

export const NewsCards = () => {
  return (
    <div>
      <div className='d-flex flex-wrap mt-3'>
        <div className='col-md-4 col-xl-3 mb-3'>
          <div class='image-container' style={{ position: 'relative' }}>
            <img
              src='./Archieveimages/Rectangle 23779.png'
              alt='person'
              style={{ height: '100%', width: '100%', opacity: '0.5' }}
              className='img-fluid rounded-4'
            />
            <img
              src='./Archieve.svg'
              alt=''
              class='archive-icon'
              style={{ position: 'absolute', top: '10px', left: '10px' }}
            />
          </div>
        </div>

        <div className='col-md-8 col-xl-9' style={{ opacity: '0.5' }}>
          <h4
            className='fw-bold ms-0 ms-md-4'
            style={{ color: '#495057', fontSize: '21px' }}
          >
            Former US Vice President Mike Pence
            <br /> plans to launch campaign at...
          </h4>
          <div className='d-flex align-items-center ms-0 ms-md-4 mt-3'>
            <img src='./Archieveimages/Group 1000004656.svg' alt='icon' />
            <span
              className='ms-3'
              style={{
                color: '#ACB6BE',
                fontSize: '11.5px',
              }}
            >
              Braelo News
            </span>
          </div>
          <div className='d-flex ms-0  ms-md-4 justify-content-between align-items-center mt-4'>
            <div>
              <p className='text-muted' style={{ fontSize: '15px' }}>
                Scheduled for 12/23/2023 at 09:00 am
              </p>
              <span className='text-secondary' style={{ fontSize: '13px' }}>
                by @braelonews
              </span>
            </div>
            <div>
              <button
                className='border-0 me-5 w-75 p-2 rounded-4 text-white'
                style={{ backgroundColor: '#78828A' }}
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCards;
