import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DeleteCard from '../../Listings/components/Delet Modal/Delete.jsx';
export const RatesCard = ({ Name, Description, Date, Image }) => {
  const [show, setShow] = useState(false);
  const [archivedshow, archivedshowsetShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const archivedhandleClose = () => archivedshowsetShow(false);
  const archivedhandleShow = () => archivedshowsetShow(true);
  return (
    <>
      <div
        className='mt-4'
        style={{ backgroundColor: '#F4F7F4', width: '100%' }}
      >
        <div className='text-start p-3'>
          <div
            className='p-2 rounded-5 text-center'
            style={{ backgroundColor: '#5D86C2', width: '100px' }}
          >
            <p className='text-white'>Solved</p>
          </div>
        </div>
        <Row>
          <div className='text-center'>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <img
                src={Image}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
        </Row>

        <Row className='text-center m-4'>
          <p
            style={{
              color: ' #75818D',
              fontSize: '23.995px',
              fontWeight: ' 600',
            }}
          >
            {Name}
          </p>
          <p
            className='mt-3'
            style={{
              color: ' #75818D',
              fontSize: '12.465px',
              fontWeight: ' 500',
            }}
          >
            {Description}
          </p>
          <p
            className='mt-4'
            style={{ color: ' #75818D', fontSize: '10px', fontWeight: ' 700' }}
          >
            {Date}
          </p>
        </Row>

        <Row className='my-5'>
          <div className='mb-5 text-center'>
            <img
              src='./image/card/Solvedcard.svg'
              alt=''
              role='button'
              variant='primary'
              onClick={archivedhandleShow}
            />
            <img
              src='./image/card/delCard.svg'
              alt=''
              className='ms-4'
              role='button'
              variant='primary'
              onClick={handleShow}
            />
          </div>
        </Row>
      </div>
      <Modal show={show} centered>
        <DeleteCard onHide={handleClose} />
      </Modal>
      <Modal show={archivedshow} centered>
        <div>
          <div className='bg-white h-100 w-75 rounded-3'>
            <div className='text-end p-3'>
              <img
                src='./X sign.svg'
                alt='exit'
                style={{ cursor: 'pointer' }}
                onClick={archivedhandleClose}
              />
            </div>
            <div className='text-center'>
              <img
                src='./checkicon.svg'
                alt='Checkicon'
                className='mt-3'
              />
              <h2 className='mt-3 w-100 text-black fw-bold fs-5'>It's gone!</h2>
              <p className='mt-3 pb-5 w-100 text-black'>
                The items have been
                <br /> successfully Archived!
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default RatesCard;
