import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import RRCombinedCard from './CombinedCard.jsx';
import ArchieveCard from '../Components/ArchieveCard.jsx';
import DelCard from '../../Listings/components/Delet Modal/Delete.jsx';
export const CardUserrep = ({ imageUrl, title, message, date, headtitle }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [delshow, delsetShow] = useState(false);
  const delhandleClose = () => delsetShow(false);
  const delhandleShow = () => delsetShow(true);

  const [arcshow, arcsetShow] = useState(false);

  const archandleClose = () => arcsetShow(false);
  const archandleShow = () => arcsetShow(true);

  // Define variables to store background color and icons based on headtitle
  let backgroundColor;
  let rateIcon;
  let reclainIcon;

  if (headtitle === 'Rate') {
    backgroundColor = '#5D86C2';
    rateIcon = (
      <>
        <img
          src='./image/rateselectionicon.svg'
          variant='primary'
          onClick={() => {
            handleShow();
          }}
          role='button'
        />
        <img
          src='./image/rateimageicon.svg'
          className='ms-3'
          variant='primary'
          role='button'
          onClick={archandleShow}
        />
        <img
          src='./userdeleticon.svg'
          className='ms-3'
          role='button'
          variant='primary'
          onClick={delhandleShow}
        />
      </>
    );
  } else if (headtitle === 'Reclain') {
    backgroundColor = '#CE605A';
    reclainIcon = (
      <>
        <img
          src='./Userselecticon.svg'
          variant='primary'
          onClick={() => {
            handleShow();
          }}
          role='button'
        />
        <img
          src='./userImageicon.svg'
          className='ms-3'
          role='button'
          variant='primary'
          onClick={archandleShow}
        />
        <img
          src='./userdeleticon.svg'
          className='ms-3'
          variant='primary'
          role='button'
          onClick={delhandleShow}
        />
      </>
    );
  }

  return (
    <>
      <div
        className='ms-4 rounded-4 p-2 mt-4'
        style={{ backgroundColor: '#F7F8F9' }}
      >
        <Row>
          <Col
            className='p-2 text-white rounded-5 w-25 text-center m-4'
            xl={2}
            style={{ backgroundColor: backgroundColor || '#F7F8F9' }}
          >
            <p>{headtitle}</p>
          </Col>
        </Row>
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
                src={imageUrl}
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
            {title}
          </p>
          <p
            className='mt-3'
            style={{
              color: ' #75818D',
              fontSize: '12.465px',
              fontWeight: ' 500',
            }}
          >
            {message}
          </p>
          <p
            className='mt-4'
            style={{ color: ' #75818D', fontSize: '10px', fontWeight: ' 700' }}
          >
            {date}
          </p>
        </Row>

        <Row className='my-5'>
          <div className='d-flex justify-content-center align-items-center'>
            {rateIcon}
            {reclainIcon}
          </div>
        </Row>
      </div>
      <Modal show={show} >
        <RRCombinedCard
          headtitle={headtitle}
          pmodal={handleClose}
          backgroundColor={backgroundColor}
          onHide={handleClose}
        />
      </Modal>
      <Modal show={delshow} centered>
        <DelCard onHide={delhandleClose} />
      </Modal>
      <Modal show={arcshow} centered>
        <ArchieveCard onHide={archandleClose} />
      </Modal>
    </>
  );
};

export default CardUserrep;
