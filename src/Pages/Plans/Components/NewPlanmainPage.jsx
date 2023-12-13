import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Components/faltCard.css';

export const NewPlanmainPage = () => {
  const firstbox = {
    width: '90px',
    height: '70px',
    background: '  #E9ECEF',
  };
  const secondbox = {
    width: '90px',
    height: '70px',
    backgroundColor: '#E9ECEF',
  };
  const thirdbox = {
    width: '90px',
    height: '70px',
    background: '  #E9ECEF',
  };
  const [planTitle, setPlanTitle] = useState('yellow');
  const [planValue, setPlanValue] = useState('$ 14.99');
  const [description, setDescription] = useState('');

  const handlePlanTitleChange = event => {
    setPlanTitle(event.target.value);
  };

  const handlePlanValueChange = event => {
    setPlanValue(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Row>
        <Col xl={6}>
          {' '}
          <Row className='mt-3 '>
            <Col>
              <h2 className='text-muted '>Manage plan and prices</h2>
            </Col>
          </Row>
          <Row className='mt-3 '>
            <Col lg={12} xl={12} xs={12}>
              <label className='text-muted my-3' style={{ fontWeight: '600' }}>
                Plan title
              </label>
              <input
                placeholder='Yellow basic plan'
                value={planTitle}
                onChange={handlePlanTitleChange}
                className='p-3 border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
            <Col lg={12} xl={12} xs={12}>
              <label className='text-muted my-3' style={{ fontWeight: '600' }}>
                Plan value
              </label>
              <input
                placeholder='$ 14,99 /month'
                value={planValue}
                onChange={handlePlanValueChange}
                className='p-3 border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
            <Col lg={12} xl={12} xs={12}>
              <label className='text-muted my-3' style={{ fontWeight: '600' }}>
                Description (Benefits)
              </label>
              <textarea
                style={{ height: '20vh' }}
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Get to know Legally and Co's services and ask your questions, Get to know Legally and Co's services and ask your questions, Get to know Legally and Co's services and ask your questions I"
                className='p-3 border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
            <Col lg={12} xl={12} xs={12}>
              <label className='text-muted my-3' style={{ fontWeight: '600' }}>
                Select color
              </label>
              <div className='d-block d-lg-flex w-75 justify-content-between align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                  <input type='radio' />
                  {/* <div style={} className='ms-3 '></div> */}

                  <div className='d-flex flex-column'>
                    <div style={firstbox} className='ms-3 rounded-2'></div>
                    <div className='mt-3'>
                      <p className='border p-2 rounded-3 text-muted ms-3'>
                        #hgbr4
                      </p>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5 mt-md-0'>
                  <input type='radio' />

                  <div className='d-flex flex-column'>
                    <div style={secondbox} className='ms-3 rounded-2'></div>
                    <div className='mt-3'>
                      <p className='border p-2 rounded-3 text-muted ms-3'>
                        #hgbr4
                      </p>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-center align-items-center  mt-5 mt-md-0'>
                  <input type='radio' />
                  <div className='d-flex flex-column'>
                    <div style={thirdbox} className='ms-3 rounded-2'></div>
                    <div className='mt-3'>
                      <p className='border p-2 rounded-3 text-muted ms-3'>
                        #hgbr4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={3} className='my-5'>
              <button
                className='w-100 p-3 text-white border-0 rounded-3 '
                style={{ backgroundColor: '#868E96' }}
              >
                {' '}
                Save
              </button>
            </Col>
          </Row>
        </Col>
        <Col xl={6} className='mt-5'>
          <p
            className='text-muted text-center my-5'
            style={{ fontWeight: '600' }}
          >
            Session preview
          </p>

          <div
            style={{
              borderRadius: ' 27.042px',
              backgroundColor: '#FFEDBF',
              height: '449px',
              width: '321px',
              margin: 'auto',
            }}
          >
            <div className='text-end p-3'>
              <img src='/public/cards/Group 1000004914 (1).svg' alt='' />
            </div>

            <div
              className='text-center w-75 m-auto mb-3 mt-5'
              style={{ borderBottom: '1px solid #EFD89D' }}
            >
              <p
                style={{
                  color: '#282928',
                  fontFamily: 'AllRoundGothic-Bold',
                  fontSize: '48.296px',
                  fontWeight: '400',
                }}
              >
                {planTitle}
              </p>
              <p className='mb-4 mt-3 '>
                <b style={{ fontSize: '27.04px' }}> {planValue} </b>
                <span className='ms-1' style={{ color: '#616161' }}>
                  /month
                </span>{' '}
              </p>
              {/* <div style={{ width: '10% !important' }}>
                <p className='text-muted w-25'>{description}</p>
              </div> */}
            </div>
            <div
              className=' w-75 m-auto mt-4'
              style={{ fontSize: '13.52px', fontWeight: '500' }}
            >
              <p>
                <img src='./Darker Tick mark.svg' alt='' className='me-3' />4
                monthly ads
              </p>
              <p>
                <img src='./Darker Tick mark.svg' alt='' className='me-3' />1
                Pin fixed on map all yours
              </p>
              <p>
                <img src='./Darker Tick mark.svg' alt='' className='me-3' />1
                Pin fixed on map all yours
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default NewPlanmainPage;
