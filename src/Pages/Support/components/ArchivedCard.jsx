import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
export const ArchivedCard = ({ userName, chatimage, message, Profile }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDelete = () => {
    // Add logic for delete action
    console.log('Delete clicked');
  };

  const handleRestore = () => {
    // Add logic for restore action
    console.log('Restore clicked');
  };

  return (
    <div>
      <Row>
        <Col xl={12}>
          <div className='d-flex my-3 w-100'>
            <div
              className='d-flex justify-content-between align-items-center w-100'
              style={{ backgroundColor: '#E9ECEF' }}
            >
              <div className='d-flex justify-content-start align-items-center w-100 p-3 rounded-4 '>
                <div
                  style={{
                    width: '46.78px',
                    height: '46.78px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={Profile}
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
                    className=' my-0'
                    style={{
                      color: '#75818D',
                      marginBottom: '8px',
                      fontSize: '15.59px',
                      fontWeight: '600',
                    }}
                  >
                    {userName}
                  </p>
                  <p
                    className=' my-0'
                    style={{
                      color: '#75818D',
                      fontSize: '13.92px',
                      fontWeight: '500',
                    }}
                  >
                    <img
                      src='./Chat Images/Vector.svg'
                      alt=''
                      className='ms-1'
                    />
                    <img src={chatimage} alt='' className='ms-1 me-1' />

                    {message}
                  </p>
                </div>
              </div>
              <div>
                <div className='text-nowrap '>
                  <p
                    className='me-4'
                    style={{
                      fontSize: '11.7px',
                      color: '#757575',
                      fontWeight: '500',
                    }}
                  >
                    08.30 PM
                  </p>
                </div>
              </div>
            </div>
            <div className='ms-3'>
              <img
                src='./Chat Images/more.svg'
                alt=''
                onClick={toggleMenu}
                role='button'
              />
              {showMenu && (
                <div
                  className='d-flex flex-column justify-content-between align-items-center rounded-3'
                  style={{
                    transform: 'translateX(-130px) translateY(-25px)',
                    backgroundColor: '#fff',
                    border: '1px solid #75818D80',
                    width: '180%',
                  }}
                >
                  <p
                    onClick={handleDelete}
                    className='rounded-3 border-0 p-1 w-100'
                    style={{ backgroundColor: '#868E96', color: '#fff' }}
                  >
                    Delete
                  </p>
                  <p
                    onClick={handleRestore}
                    className=' rounded-3 border-0 p-1 w-100'
                    style={{ color: '#75818D', backgroundColor: '#fff' }}
                  >
                    Restore
                  </p>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ArchivedCard;
