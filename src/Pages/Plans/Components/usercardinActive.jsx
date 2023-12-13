import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const usercardinActive = () => {
  return (
    <div>
      <Row className='ms-0 ms-md-2 ' variant='primary'>
        <div
          className='mt-4 d-flex flex-column'
          style={{ borderRadius: '11.928px', backgroundColor: '#F5F7F9' }}
        >
          <Col xl={12}>
            <div className='text-end'>
              <p className=' p-2 text-muted'>
                <img src='./InActiveDot.svg' className='me-3' />
                Active subscription
              </p>
            </div>
          </Col>
          <Col className='d-flex' xl={12}>
            <Col xl={3} className='mb-4'>
              <img
                className='userImage'
                src='./image/Internal User/Ali Devstore.png'
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              />
            </Col>
            <Col xl={6} className='ms-3 ms-md-0'>
              <p
                className=' titleuser fw-bold '
                style={{
                  color: '#78828A',
                  fontSize: '21px',
                }}
              >
                Ali Sabir Dogar
              </p>
              <p
                className='mt-1 title2user'
                style={{
                  color: '#78828A',
                  fontSize: '19px',
                }}
              >
                Business
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
                src='./Shutdownicon.svg'
                style={{
                  backgroundColor: '#DEE2E6',
                  borderRadius: '50%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              />

              <img
                src='./Archieve icon for user.svg'
                alt=''
                className='ms-4'
              />
            </Col>
          </Col>
        </div>
      </Row>
    </div>
  );
};
export default usercardinActive;
