import React from 'react';
import './StatusCard.css';
export const StatusCard = ({ Profile, Name, Designation, Number }) => {
  return (
    <div>
      <div className='d-flex mt-4'>
        <div
          className='d-flex justify-content-between align-items-center w-100 p-5'
          style={{ backgroundColor: '#F5F7F9' }}
        >
          <div className='d-flex align-items-center'>
            <div
              style={{
                width: '84.49px',
                height: '84.49px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                src={Profile}
                // src='./image/Internal User/Marly Silva.png'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                alt=''
              />
            </div>

            <div className='ms-3'>
              <p
                className='my-0'
                style={{
                  color: '#75818D',
                  marginBottom: '8px',
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                {Name}
              </p>
              <p
                className='my-0'
                style={{
                  color: '#75818D',
                  fontSize: '13.92px',
                  fontWeight: '500',
                }}
              >
                {Designation}
              </p>
              <p
                className='my-0 mt-3'
                style={{
                  color: '#75818D',
                  fontSize: '10.51px',
                  fontWeight: '400',
                }}
              >
                Active since Sept. 12, 2023 at 4:32 pm
              </p>
            </div>
          </div>

          <div
            style={{
              width: '59.88px',
              height: '60.89px',
              backgroundColor: '#596068',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'PlusJakarta',
              color: '#fff',
            }}
          >
            <p style={{ fontSize: '25.78px', fontWeight: '800' }}>{Number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
