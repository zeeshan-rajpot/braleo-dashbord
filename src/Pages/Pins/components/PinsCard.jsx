import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import PinsPreviewModal from '../components/PinsPreviewModal.jsx';
import DelModalCard from '../components/DelModalCard.jsx';
import './PinsCard.css';
export const PinsCard = ({ backgroundImage, TitleP, ProfileImage }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [delshow, delsetShow] = useState(false);

  const delhandleClose = () => delsetShow(false);
  const delhandleShow = () => delsetShow(true);

  return (
    <div>
      <Card
        className='text-left border-0 backgroundofCard mt-4'
        style={{
          width: '100%',
          height: '213.4px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: ' cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Row className='my-2'>
          <Col className='d-flex justify-content-end me-3 '>
            <img src='./PinsImages/Group 1000004492.svg' className='me-2' />
            <Link to='/EditPins'>
              <img src='./PinsImages/Group 1000004486.svg' className='me-2' />
            </Link>
            <img
              src='./PinsImages/Group 1000004490.svg'
              variant='primary'
              onClick={delhandleShow}
              role='button'
            />
          </Col>
        </Row>
        <Card.Body role='button' variant='primary' onClick={handleShow}>
          <Card.Title
            className='ms-4'
            style={{
              fontSize: '19.67px',
              color: '#fff',
              fontWeight: '600',
              fontFamily: 'PlusJakartaSans-Bold',
              width: '30%',
            }}
          >
            {TitleP}
          </Card.Title>
          <Card.Text
            className='d-flex justify-content-start  align-items-center mt-5'
            // style={{ fontSize: '15px' }}
          >
            <div>
              {/* <img src='./PinsImages/Rectangle 23835.svg' alt='' /> */}
              <img src={ProfileImage} alt='' />
            </div>
            <div className='ms-2'>
              <p
                className='my-0'
                style={{ width: '60%', color: '#FFFFFF', fontSize: '9px' }}
              >
                Created at 4:33pm by @crissgermano Saturday 23 September 2023 -
                Florida Miami
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} centered onHide={handleClose}>
        <PinsPreviewModal />
      </Modal>
      {/* //Del Modal ------------------- */}
      <Modal show={delshow}>
        <DelModalCard onHide={delhandleClose} />{' '}
      </Modal>
    </div>
  );
};

export default PinsCard;
