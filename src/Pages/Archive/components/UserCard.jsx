import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const UserCard = () => {
  return (
    <div>
      <Row className='ms-0 ms-md-2 ' variant='primary'>
        <div
          className='mt-4 d-flex flex-column'
          style={{ borderRadius: '11.928px', backgroundColor: '#F5F7F9' }}
        >
          <Col xl={12} style={{ opacity: '0.5' }}>
            <div className='text-end'>
              <p className=' p-2 ' style={{ color: '#78828A' }}>
                <img src='./InActiveDot.svg' className='me-3' />
                Active subscription
              </p>
            </div>
          </Col>
          <Col className='d-flex' xl={12}>
            <Col xl={3} className='mb-4' style={{ opacity: '0.5' }}>
              <img
                className='userImage'
                src='./Archieveimages/Ellipse 815 (1).png'
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              />
            </Col>
            <Col xl={6} className='ms-3 ms-md-0' style={{ opacity: '0.5' }}>
              <p
                className=' titleuser fw-bold '
                style={{
                  color: '#78828A',
                  fontSize: '21px',
                }}
              >
                Criss Germano
              </p>
              <p
                className='mt-1 title2user'
                style={{
                  color: '#78828A',
                  fontSize: '19px',
                }}
              >
                Consumer
              </p>
              <p
                className='mt-0 mt-md-4 puser'
                style={{
                  color: '#78828A',
                  fontSize: '15px',
                }}
              >
                Active since Sept. 12, 2023 at 4:32 pm
              </p>
            </Col>

            <Col className='text-center mt-5 mobileres' xl={3}>
              <img
                src='./Archieve.svg'
                alt=''
                className='ms-4'
                style={{ width: '50.31px' }}
              />
            </Col>
          </Col>
        </div>
      </Row>
    </div>
  );
};
export default UserCard;
