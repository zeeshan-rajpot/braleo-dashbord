import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import CongratulationCard from '../Components/Success.jsx'


export const CreateNewUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row>
        <Col xl={6}>
          <p className='mt-3 fs-5' style={{ color: '#78828A' }}>
            Create new user
          </p>
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
          <div className='d-flex flex-column justify-content-start align-items-start w-100'>
            <label className='text-muted mb-2'>Name</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='Criss Germano'
            />
            <label className='text-muted mt-4 mb-2'>E-mail</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='criss@braelo.co'
            />
            <label className='text-muted mt-4 mb-2'>Phone</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='+1 (339) 215-9749'
            />
            <Row>
              <Col xl={6}>
                <label className='text-muted mt-4 mb-2'>Password</label>
                <input
                  type='text'
                  className='p-3 border rounded-4 w-100'
                  placeholder='**********'
                />
              </Col>
              <Col xl={6}>
                <label className='text-muted mt-4 mb-2'>Function</label>
                <select className='p-3 border rounded-4 w-100 text-muted'>
                  <option value='Administrator'>Administrator</option>
                  <option value='Comercial'>Comercial</option>
                  <option value='Web developer'>Web developer</option>
                  <option value='Copywriter'>Copywriter</option>
                  <option value='Visual Designer'>Visual Designer</option>
                    
                </select>
              </Col>
            </Row>
          </div>
          <div className='mb-5 mt-3'>
            <button
              className='border w-25 p-2 rounded-3 text-white'
              style={{ backgroundColor: '#868E96' }}
              variant='primary'
              onClick={handleShow}
            >
              Save
            </button>
          </div>
        </Col>
        <Modal show={show} centered>
          <CongratulationCard  onHide={handleClose}/>
        </Modal>
      </Row>
    </div>
  );
};
export default CreateNewUser;
