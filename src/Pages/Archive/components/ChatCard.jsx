import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
export const ChatCard = ({ userName, chatimage, message, Profile }) => {
  return (
    <div>
      <Row>
        <Col xl={12}>
          <div className='d-flex my-3 w-100 '>
            <div
              className='d-flex justify-content-between align-items-center w-100 rounded-4 '
              style={{ backgroundColor: '#F7F8F9' }}
            >
              <div className='d-flex justify-content-start align-items-center w-100 p-3 rounded-4 '>
                <div
                  style={{
                    width: '46.78px',
                    height: '46.78px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={Profile}
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
                    className=' my-0'
                    style={{
                      color: '#BAC1C7',
                      marginBottom: '8px',
                      fontSize: '15.59px',
                      fontWeight: '600',
                    }}
                  >
                    {userName}
                  </p>
                  <p
                    className=' my-0'
                    style={{
                      color: '#BAC1C7',
                      fontSize: '13.92px',
                      fontWeight: '500',
                    }}
                  >
                    <img
                      src='./Archieveimages/Chat section images/doubletick.svg'
                      alt=''
                      className='ms-1'
                    />
                    <img src={chatimage} alt='' className='ms-1 me-1' />

                    {message}
                  </p>
                </div>
              </div>

              <div className='me-5'>
                <img src='./Archieve.svg' alt='' />
              </div>

              <div>
                <div className='text-nowrap '>
                  <p
                    className='me-4'
                    style={{
                      fontSize: '11.7px',
                      color: '#BAC1C7',
                      fontWeight: '500',
                    }}
                  >
                    08.30 PM <br />
                    Set 24 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ChatCard;
