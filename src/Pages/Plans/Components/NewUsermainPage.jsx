import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const NewUsermainPage = () => {
  return (
    <div>
      <Row>
        <p className='mt-3 fs-5' style={{ color: '#78828A' }}>
          Create new user
        </p>
        <Col xl={2}>
          <div className='mt-3'>
            <p style={{ color: '#78828A' }}>Profile Picture</p>
            <div className='mt-4 '>
              <div
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '10px solid #CD9403',
                }}
              >
                <img
                  src='./image/Criss Germano.png'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    overflow: 'hidden',
                  }}
                  alt=''
                />
              </div>
              <div
                style={{
                  backgroundColor: '#CD9403',
                  width: '55px',
                  height: '55px',
                  borderRadius: '50%',
                  transform: 'translateY(-60px) translateX(150px)',
                  border: '5px solid #fff',
                }}
              >
                <img
                  src='./Layer 2.svg'
                  alt=''
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    overflow: 'hidden',
                  }}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col xl={5}>
          <div className='d-flex flex-column justify-content-start align-items-start w-100'>
            <label className='text-muted mb-2'>Name</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='Criss Germano'
            />
            <label className='text-muted mt-4 mb-2'>ZIP Cpde</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='criss@braelo.co'
            />
            <label className='text-muted mt-4 mb-2'>Phone</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='7E17AB'
            />
            <label className='text-muted mt-4 mb-2'>Facebook</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='fb.com/youraccount'
            />
          </div>
        </Col>

        <Col xl={5}>
          <div className='d-flex flex-column justify-content-start align-items-start w-100'>
            <label className='text-muted mb-2'>E-mail</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='criss@braelo.co'
            />
            <label className='text-muted mt-4 mb-2'>Location</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='888 Braelo Avenue Florida - Miami'
            />
            <label className='text-muted mt-4 mb-2'>Whatsapp</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='https://wa.me/00000000'
            />
            <label className='text-muted mt-4 mb-2'>Instagram</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='ig.com/youraccount'
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={2}></Col>
        <Col xl={10} className='mt-5'>
          <div className='d-flex'>
            <div className='mt-4 w-50'>
              <p
                style={{
                  fontSize: '24.2px',
                  fontWeight: '500',
                  color: '#78828A',
                }}
              >
                Define temporary access
              </p>
            </div>
            <div className='mt-4 text-start w-100'>
              <hr />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={2}></Col>

        <Col xl={5} className='mt-4'>
          <div className='d-flex flex-column justify-content-start align-items-start w-100'>
            <label className='text-muted mb-2'>Start time</label>
            <input
              type='date'
              className='p-3 border rounded-4 w-100'
              placeholder='09/23/2023'
            />
            <label className='text-muted mt-4 mb-2'>Time</label>
            <input
              type='time'
              className='p-3 border rounded-4 w-100'
              placeholder='00:00 AM'
            />
          </div>
        </Col>

        <Col xl={5} className='mt-4'>
          <div className='d-flex flex-column justify-content-start align-items-start w-100'>
            <label className='text-muted mb-2'>Expiration time</label>
            <input
              type='date'
              className='p-3 border rounded-4 w-100'
              placeholder='12/30/2023'
            />
            <label className='text-muted mt-4 mb-2'>Time</label>
            <input
              type='time'
              className='p-3 border rounded-4 w-100'
              placeholder='00:00 AM'
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={2}></Col>
        <Col xl={10} className='mt-5'>
          <div className='d-flex justify-content-between align-item-center'>
            <div className='mt-4 w-25 text-nowrap '>
              <p
                className='fs-4'
                style={{
                  fontWeight: '500',
                  color: '#78828A',
                }}
              >
                User url
              </p>
            </div>
            <div className='mt-4 text-start w-100'>
              <hr />
            </div>
          </div>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col xl={2}></Col>

        <Col xl={7}>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <div className='w-100'>
              <input
                type='text'
                className='p-3 border rounded-4 w-100'
                placeholder='https://braelo.fl/newuserid202309001'
              />
            </div>
            <div className='ms-3'>
              <img src='./copyicon.svg' alt='' />
            </div>
          </div>
        </Col>

        <Col xl={3}>
          <button
            className='border w-100 p-3 rounded-3 text-white'
            style={{ backgroundColor: '#868E96' }}
          >
            Save
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default NewUsermainPage;
