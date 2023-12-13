import React from 'react';
import './ListingCard.css';

export const ListingCard = () => {
  return (
    <div>
      <div
        className='border-1 d-flex border p-2 rounded-3  m-2'
        style={{ width: '100%' }}
      >
        <div
          className='main'
          style={{ width: '50%', height: '100%', opacity: '0.5' }}
        >
          <div
            className='rounded-3  pt-5'
            style={{
              backgroundImage: `url('./Archieveimages/Rectangle 23802.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '180px',
            }}
          >
            <p className='text-white ms-2 pt-5' style={{ fontSize: '9px' }}>
              User @crissgermano
              <br /> Register ID BRLO20230915 <br />
              October 12, 2023 at 2:43 pm
            </p>
          </div>
        </div>
        <div className='ms-2' style={{ width: '50%', height: '100%' }}>
          <div className='text-end mx-2'>
            <img src='./Archieve.svg' alt='' style={{ opacity: '1' }} />
          </div>
          <h5
            className='text-muted mt-md-0'
            style={{ fontSize: '18px', opacity: '0.5' }}
          >
            Landscaping
            <br /> Palm Bech
          </h5>
          <h6 className='text-muted mt-md-4 fw-bold' style={{ opacity: '0.5' }}>
            $ 180,00
          </h6>
          <div className='d-flex mt-md-4 mt-3 w-100 d-block d-md-flex media'>
            <div
              className='d-flex justify-content-center align-items-center '
              style={{ opacity: '0.5' }}
            >
              <img
                src='./lisitingeye.svg'
                alt=''
                className='ms-1'
                style={{ width: '20px' }}
              />
              <span className='ms-1 text-nowrap' style={{ fontSize: '10px' }}>
                1,200 Views
              </span>
            </div>

            <div
              className='d-flex justify-content-center align-items-center '
              style={{ opacity: '0.5' }}
            >
              <img
                src='./savelistingcard.svg'
                className='ms-1'
                alt=''
                style={{ width: '20px' }}
              />
              <span className='ms-1 text-nowrap' style={{ fontSize: '10px' }}>
                120 Saves
              </span>
            </div>

            <div
              className='d-flex justify-content-center align-items-center '
              style={{ opacity: '0.5' }}
            >
              <img
                src='./clickslistingcard.svg'
                alt=''
                className='ms-1'
                style={{ width: '20px' }}
              />
              <span className='ms-1 text-nowrap ' style={{ fontSize: '10px' }}>
                120 Clicks
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
