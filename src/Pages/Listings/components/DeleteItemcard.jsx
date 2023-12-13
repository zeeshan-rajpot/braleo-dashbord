import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ConfrimCard from './confirmDeleteCard.jsx';

export const DeleteItem = () => {
  const [isSectionOpen, setSectionOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [nextModalShow, setNextModalShow] = useState(false);

  const handleNextModalShow = () => {
    setModalShow(false);
    setNextModalShow(true);
  };

  const handleNextModalClose = () => {
    setNextModalShow(false);
  };

  const handleCancelClick = () => {
    // Call the onHide function to close the modal
    onHide();
  };

  return (
    <>
      {isSectionOpen && (
        <div className='bg-white h-100 w-75 rounded-3'>
          <div className='text-end p-3'>
            <img
              src='/public/X sign.svg'
              style={{ cursor: 'pointer' }}
              // onClick={closeModal}
              alt='exit'
            />
          </div>
          <div className='text-center'>
            <img src='/public/Listing Delbutton.svg' alt='del button' />
            <p className='mt-3 w-100 text-black fw-bold fs-5'>
              Are you sure you want
              <br /> to delete this item?
            </p>
          </div>
          <div className='text-center pb-4'>
            <button
              type='button'
              variant='secondary'
              onClick={handleNextModalShow}
              className='bg-secondary text-white mt-3 w-75 p-3 rounded-3 border-0'
            >
              Yes, I do
            </button>
            <h6 className='mt-3 text-muted' onClick={handleCancelClick}>
              Cancel
            </h6>
          </div>
        </div>
      )}

      <Row>
        <Col md={6} xl={6} xs={12}>
          <Modal show={nextModalShow} centered>
            <Modal.Body>
              <ConfrimCard onHide={handleNextModalClose} />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

export default DeleteItem;
