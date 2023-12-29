import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DelCard from '../../Listings/components/Delet Modal/Delete.jsx';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

export const InternalUserCard = ({ userData }) => {
  const [show, setShow] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedUserId(null);
  };

  const handleShow = userId => {
    setShow(true);
    setSelectedUserId(userId);
  };

  // console.log(userData[0]._id)
  return (
    <>
      <Row className='ms-1'>
        {userData.map((user, index) => (
          <Col key={index} xl={6}>
            <div className='bg-light mt-3 p-4 rounded-4 w-100 d-flex justify-content-center align-items-center'>
              <div className='d-flex justify-content-start align-items-center w-100'>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={user.profileImage}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt=''
                  />
                </div>
                <div className='ms-3'>
                  <p
                    className='fs-4 my-0'
                    style={{ color: '#75818D', marginBottom: '8px' }}
                  >
                    {user.name}
                  </p>
                  <p
                    className='fs-6 my-0'
                    style={{ color: '#75818D', marginBottom: '8px' }}
                  >
                    {user.role}
                  </p>
                </div>
              </div>

              <div className='m-auto w-50 d-flex justify-content-end align-items-end '>
                <Link to={`/EditUser/${user._id}`}>
                  <img src='/public/Systemiconpen.svg' alt='' />
                </Link>
                <img
                  src='/public/Systemicondel.svg'
                  alt=''
                  role='button'
                  className='ms-4'
                  variant='primary'
                  onClick={() => handleShow(user._id)}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={show} centered onHide={handleClose}>
        <DelCard onHide={handleClose} userId={selectedUserId} />
      </Modal>
    </>
  );
};

export default InternalUserCard;
