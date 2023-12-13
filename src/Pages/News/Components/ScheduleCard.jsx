import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export const ScheduleCard = ({ onHide }) => {
  const [dateState, setDateState] = useState(new Date());
  const [publishModalShow, setPublishModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const changeDate = e => {
    setDateState(e);
  };

  const handleConfirmation = () => {
    // Set the state to true to show the paragraph
    setIsConfirmed(true);
    setNewModalShow(true); // Show the modal
  };

  return (
    <div>
      {!isConfirmed && (
        <div>
          <div className='d-flex justify-content-center align-items-center '>
            <Calendar
              className='rounded-4 '
              value={dateState}
              onChange={changeDate}
            />
          </div>

          <div className='d-block d-md-flex justify-content-center align-items-center '>
            <div className='column  mt-3'>
              <div>
                <label className='text-white'>Post Date</label>
              </div>
              <div>
                <input
                  className='bg-light text-muted rounded-2 p-2'
                  type='text'
                  id='postDate'
                  value={moment(dateState).format('MMMM / Do / YYYY')}
                  readOnly
                />
              </div>
            </div>
            <div className='column ms-0  ms-md-3 mt-3'>
              <div className='up-label'>
                <label className='text-white'>Post Time</label>
              </div>
              <div className='down-input '>
                <input
                  type='time'
                  placeholder='Show Time'
                  className='bg-light text-muted  rounded-2 p-2'
                />
              </div>
            </div>

            <div className='w-75 mt-3'>
              <button
                className='text-white w-100 border-0 p-2 rounded-3  ms-0 ms-md-3 mt-4'
                style={{ backgroundColor: '#596068' }}
                type='button'
                onClick={handleConfirmation}
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}
      {isConfirmed && (
        <div>
          <div
            className='bg-white text-center rounded-4 '
            style={{ height: '650px' }}
          >
            <Row>
              <Col className='d-flex justify-content-end' onClick={onHide}>
                <img
                  src='./X sign.svg'
                  alt='exit'
                  style={{ width: '10%', cursor: 'pointer' }}
                  className=''
                />
              </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
              <Col className='mt-4'>
                <img className='mt-5' src='./checkicon.svg' alt='checkIcon' />
              </Col>
            </Row>
            <Row>
              <Col className='mt-4'>
                <h2>Wonderful!</h2>
              </Col>
            </Row>
            <Row>
              <Col xl={2}></Col>
              <Col xl={8} className='mt-3'>
                <p>The publication has been successfully scheduled!</p>
              </Col>
              <Col xl={2}></Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleCard;
