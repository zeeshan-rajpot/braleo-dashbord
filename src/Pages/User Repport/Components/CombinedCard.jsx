import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import Modal from 'react-bootstrap/Modal';
import Confirm from './ConfirmMessage.jsx';
import DeletedSelection from '../../Listings/components/Delet Modal/Delete.jsx';
import ArchieveCard from '../Components/ArchieveCard.jsx';
export const RRCombinedCard = ({
  headtitle,
  backgroundColor,
  pmodal,
  onHide,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isResponseVisible, setIsResponseVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isdelConfirmed, setIsdelConfirmed] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleResponseVisibility = () => {
    setIsResponseVisible(!isResponseVisible);
  };
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  const handleConfirmation = () => {
    // Set the state to true to show the paragraph
    setIsConfirmed(true);
  };

  const handledelConfirmation = () => {
    // Set the state to true to show the paragraph
    setIsdelConfirmed(true);
  };

  return (
    <>
      {!isdelConfirmed && (
        <div>
          {!isConfirmed && (
            <div>
              {isResponseVisible ? (
                <Row>
                  <div
                    className='bg-white rounded-4 w-100'
                    style={{ height: '60vh' }}
                  >
                    <div className='text-end p-2'>
                      <img
                        src='./X sign.svg'
                        role='button'
                        onClick={onHide}
                        alt=''
                      />
                    </div>
                    <div className='text-center my-5'>
                      <img src='./checkicon.svg' style={{}} alt='' />
                      <h5 className='mt-4 fs-3 text-muted'> You did it!</h5>
                      <p className='pt-2 text-secondary  fs-5'>
                        Your reply has been <br />
                        successfully sent!
                      </p>
                    </div>
                  </div>
                </Row>
              ) : (
                <div
                  className='p-5 mobilewidth'
                  style={{
                    width: '150%',
                    borderRadius: '18.477px',
                    border: '1.848px solid rgba(134, 142, 150, 0.16)',
                    backgroundColor: ' #F7F8F9',
                  }}
                >
                  <Row className='m-2'>
                    <div className='d-flex justify-content-between align-items-center p-2'>
                      <div
                        className='py-2 text-white rounded-5 w-25 text-center my-2'
                        style={{
                          backgroundColor: backgroundColor || '#F7F8F9',
                        }}
                      >
                        <p className='fontres'>{headtitle}</p>
                      </div>
                      <div>
                        <p className='fontres'>
                          September 15, 2023 at 6pm | iOs | Florida
                        </p>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Col xl={8}>
                        <div className='d-flex align-items-center '>
                          <div
                            style={{
                              width: '80px',
                              height: '80px',
                              borderRadius: '50%',
                              overflow: 'hidden',
                              display: 'inline-block',
                            }}
                          >
                            <img
                              src='./image/userKellyimage.png'
                              alt='User'
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                              }}
                            />
                          </div>
                          <div className='ms-3'>
                            <p
                              style={{
                                color: '#75818D',
                                fontSize: '27.459px',
                                fontWeight: '600',
                              }}
                            >
                              Jeferson Silva
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} xs={12}>
                        <Rating
                          count={5}
                          size={24}
                          value={3.2}
                          edit={false}
                          isHalf={true}
                          activeColor='#FFD700'
                        />
                      </Col>
                    </div>
                  </Row>
                  <Row className='mt-4'>
                    <p>
                      Hello, how are you? I'd like to report a problem that
                      happened to me when I registered my product on the
                      platform. Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s, when
                      an unknown printer took a galley of type and scrambled it
                      to make a type specimen book. It has survived not only
                      five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. Lorem Ipsum
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                  </Row>

                  <Row className='mt-4'>
                    <Col className='text-end m-2'>
                      <img
                        src='./image/card/editCard.svg'
                        alt='Edit'
                        role='button'
                        onClick={toggleEditing}
                      />
                      <img
                        src='./image/card/selectCard.svg'
                        alt='Select'
                        className='ms-3'
                        accordion
                      />

                      <img
                        src='./image/card/imageCard.svg'
                        alt='Image'
                        className='ms-3'
                        role='button'
                        onClick={handleConfirmation}
                      />
                      <img
                        src='./image/card/delCard.svg'
                        alt='Delete'
                        role='button'
                        onClick={handledelConfirmation}
                        className='ms-3'
                      />
                    </Col>
                  </Row>
                </div>
              )}
              {!isResponseVisible && (
                <div className='second-modal-container ms-3'>
                  {' '}
                  {isEditing && (
                    <div
                      className='mt-5 mobilewidth'
                      style={{
                        width: '150%',
                      }}
                    >
                      <Row
                        className='bg-body p-4 w-100  rounded-4 '
                        style={{ height: '30vh' }}
                      >
                        <textarea
                          placeholder='Text goes here'
                          className='border-0 w-100 '
                        />
                      </Row>
                      <Row>
                        <Col xl={8}></Col>
                        <Col xs={12} xl={4} className='mt-4 '>
                          <button
                            className='border-0 p-2 w-100 rounded-3 text-white'
                            style={{ backgroundColor: '#868E96' }}
                            onClick={toggleResponseVisibility}
                          >
                            Send Response
                          </button>
                        </Col>
                      </Row>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}{' '}
          {isConfirmed && (
            <div>
              <div className='bg-white h-100 w-75 rounded-3'>
                <div className='text-end p-3'>
                  <img
                    src='./X sign.svg'
                    alt='exit'
                    style={{ cursor: 'pointer' }}
                    onClick={onHide}
                  />
                </div>
                <div className='text-center'>
                  <img
                    src='./checkicon.svg'
                    alt='Checkicon'
                    className='mt-3'
                  />
                  <h2 className='mt-3 w-100 text-black fw-bold fs-5'>
                    It's gone!
                  </h2>
                  <p className='mt-3 pb-5 w-100 text-black'>
                    The items have been
                    <br /> successfully Archived!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {isdelConfirmed && (
        <div>
          <DeletedSelection onHide={onHide} />
        </div>
      )}
    </>
  );
};
export default RRCombinedCard;
