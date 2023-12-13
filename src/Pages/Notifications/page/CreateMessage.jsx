import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './CreateMessage.css';
import {
  FormControlLabel,
  Radio,
  makeStyles,
  RadioGroup,
} from '@material-ui/core';

const useStyles = makeStyles({
  grayRadio: {
    color: '#E6E8EC', // Change this color to your desired gray color
  },
});
function CustomRadioLabel({ backgroundColor, width, height }) {
  return (
    <div
      className='rounded-3'
      style={{
        backgroundColor,
        width,
        height,
      }}
    ></div>
  );
}

export const CreateMessage = () => {
  const [selectedValue, setSelectedValue] = useState('female'); // Set the default selected value

  const handleRadioChange = event => {
    setSelectedValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <>
      <Row>
        <Col md={8}>
          {' '}
          <Row className='mt-3 '>
            <Col>
              <h2 className='text-muted '>Create new advice</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} xl={12} xs={12}>
              <label className='text-muted my-3'>Advice Title</label>
              <input
                placeholder='Your account is temporarily suspended.'
                className='p-3 border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
            <Col lg={8} xl={8} xs={12}></Col>
          </Row>
          <Row>
            <Col lg={8} xl={12} xs={12}>
              <label className='text-muted mt-3'>Description</label>
              <textarea
                placeholder='It appears that you have violated one of the platforms rules To find out more please contact support'
                className='border border-1 rounded-3 p-2 w-100 h-100'
              />
            </Col>
          </Row>
          <Row className='my-4'>
            <label className='text-muted mt-5'>Select Color</label>
            <Col lg={1} xl={6} xs={4} className='mt-4'>
              <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                <Row>
                  <Col className='mt-2'>
                    <FormControlLabel
                      value='red'
                      control={<Radio className={classes.grayRadio} />}
                      label={
                        <CustomRadioLabel
                          backgroundColor='#B01F18'
                          width='71.63px'
                          height='53.73px'
                        />
                      }
                    />
                  </Col>
                  <Col className='mt-2'>
                    <FormControlLabel
                      value='green'
                      control={<Radio className={classes.grayRadio} />}
                      label={
                        <CustomRadioLabel
                          backgroundColor='#15A308'
                          width='71.63px'
                          height='53.73px'
                        />
                      }
                    />{' '}
                  </Col>
                  <Col className='mt-2'>
                    <FormControlLabel
                      value='yellow'
                      control={<Radio className={classes.grayRadio} />}
                      label={
                        <CustomRadioLabel
                          backgroundColor='#EE9E03'
                          width='71.63px'
                          height='53.73px'
                        />
                      }
                    />
                  </Col>{' '}
                </Row>
              </RadioGroup>
            </Col>
          </Row>
          <Row>
            <h4 className='text-muted'>Advice Preview </h4>
            <Row>
              <div
                className='text-center  w-100 h-100 rounded-4 ms-3'
                style={{ backgroundColor: '#868E96' }}
              >
                <h5 className='mt-4 text-white'>
                  Your account is temporarily suspended.
                </h5>
                <p className='my-4 text-white'>
                  It appears that you have violated one of the platform's rules.
                  To find out more, please contact support.
                </p>
              </div>
            </Row>
          </Row>
        </Col>
        <Col md={4} className='mt-auto h-100'>
          <div className='m-4'>
            <button className='py-2 px-4 border-0 rounded-3 text-muted'>
              Cancel
            </button>
            <button className='ms-2 py-2  px-4  bg-dark text-white border-0 rounded-3 '>
              Publish
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default CreateMessage;
