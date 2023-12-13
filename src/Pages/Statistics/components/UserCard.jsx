import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './userCard.css';
import UserDetails from './singleuserDetails.jsx';
export const UsersCard = ({ isSelected, onCardClick, isInactive }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardStyle = {
    // Apply reduced opacity if 'InActive' is selected
    opacity: isInactive ? 0.7 : 1,
    // Highlight the card when it's selected
    backgroundColor: isSelected ? '' : '',
  };
  return (
    <>
      <div className='user-card' style={cardStyle} onClick={onCardClick}>
        <Row
          className='ms-0 ms-md-2 '
          role='button'
          variant='primary'
          onClick={handleShow}
        >
          <div
            className='mt-4 d-flex flex-column'
            style={{ borderRadius: '11.928px', backgroundColor: '#F5F7F9' }}
          >
            <Col xl={12}>
              <div className='text-end'>
                <p className=' p-2 text-muted'>
                  <img src='./greenActive.svg' className='me-3' />
                  Active subscription
                </p>
              </div>
            </Col>
            <Col className='d-flex' xl={12}>
              <Col xl={3} className='mb-4'>
                <img
                  className='userImage'
                  src='./image/Criss Germano.png'
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
                  Criss Germano
                </p>
                <p
                  className='mt-1 title2user'
                  style={{
                    color: '#78828A',
                    fontSize: '19px',
                  }}
                >
                  Consumer
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

              <Col className='text-center mt-5' xl={3}>
                <img
                  src='./usereyes.svg'
                  className='p-3 ms-0 ms-md-4 usericon'
                  style={{
                    width: '65px',
                    backgroundColor: '#DEE2E6',
                    borderRadius: '50%',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                  }}
                />
              </Col>
            </Col>
          </div>
        </Row>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <UserDetails />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default UsersCard;
