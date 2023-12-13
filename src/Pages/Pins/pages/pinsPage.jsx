import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ConfrimModal from '../components/Success.jsx';
export const pinsPage = () => {
  const [keywordInput, setKeywordInput] = useState('');
  const [keywords, setKeywords] = useState([
    'Pub',
    'Restaurant',
    'Beauty Salon',
    'Bar',
    'DJ',
    'Coffee Shop',
    'Bakery',
    'Language School',
    'Technical Course ',
    'Barbershop',
    'Party Room',
    'Studio',
  ]);
  const addKeyword = () => {
    if (keywordInput.trim() !== '') {
      setKeywords([...keywords, keywordInput]);
      setKeywordInput('');
    }
  };

  const removeKeyword = index => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    // Trigger the file input when the icon is clicked
    fileInputRef.current.click();
  };

  const handleFileSelected = e => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file (e.g., upload or display it)
  };
  // Using listinginput field data to other
  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row>
        <Row>
          <h2 className='text-muted pt-4'>New Pin</h2>
        </Row>
        <Row>
          <div>
            <label className='text-muted'>Pin Name</label>
            <input
              placeholder='Ali Dev store Dubai'
              className='border border-1 rounded-3 p-2 w-100 '
            />
          </div>
        </Row>
        <Row className='mt-4'>
          <Col xl={6} xs={12}>
            <div className='w-100'>
              <h6 className='text-muted'>Description</h6>
              <textarea
                style={{ height: '150px' }}
                placeholder="Get to know Legally and Co's services and ask your questions, Get to know Legally and Co's services and ask your questions, Get to know Legally and Co's services and ask your questions I"
                className='border border-1 rounded-3 p-2 w-100 h-70'
              />
            </div>
          </Col>
          <Col xl={6} xs={12}>
            <div className='w-100'>
              <h6 className='text-muted '>
                Keywords{' '}
                <small className='ms-3 ' style={{ fontSize: '10px' }}>
                  {' '}
                  (Words or categories related to this item)
                </small>
              </h6>
              <div className='border  border-1 w-100 h-100 p-2 rounded-3 '>
                <div className='mt-2'>
                  <input
                    placeholder='Restaurante |'
                    value={keywordInput}
                    onChange={e => setKeywordInput(e.target.value)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        addKeyword();
                      }
                    }}
                    className=' p-1 w-100'
                  />
                </div>
                <div
                  className='d-flex flex-wrap'
                  style={{ height: 'auto', width: '100%' }}
                >
                  {keywords.map((keyword, index) => (
                    <div
                      key={index}
                      className='badge rounded-5 p-2 me-2 text-center mt-2'
                      style={{
                        backgroundColor: '#c4c8cc',
                        color: '#fff',
                        cursor: 'pointer',
                        width: 'auto',
                        height: '28px',
                      }}
                      onClick={() => removeKeyword(index)}
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6} xs={12}>
            <div>
              <label className='text-muted'>Local</label>
              <input
                placeholder='Immigration Paralegal Services'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className='text-muted mt-3 mt-md-0'>Postal Code</label>
              <input
                placeholder='SE1 7AB'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6} xs={12}>
            <div>
              <label className='text-muted'>Website</label>
              <input
                placeholder='https://braelo.co/'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className='text-muted mt-3 mt-md-0'>Whatsapp</label>
              <input
                placeholder='https://wa.me/00000000'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6} xs={12}>
            <div>
              <label className='text-muted'>Facebook</label>
              <input
                placeholder='fb.com/youraccount'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className='text-muted mt-3 mt-md-0'>Instagram</label>
              <input
                placeholder='https://wa.me/00000000'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <h6 className='text-muted '>Ad Thumbmail</h6>
          <Col xl={12} xs={12}>
            <div
              className='d-flex flex-column justify-content-center align-items-center w-100 p-4'
              style={{
                border: '2px dotted #868E96',
                height: '300px',
                borderRadius: '11.891px',
                backgroundColor: '#DEE2E642',
              }}
            >
              <Col xs='auto'>
                <img
                  src='./pinsthumbnail.svg'
                  alt='files icon'
                  onClick={handleIconClick}
                  style={{
                    cursor: 'pointer',
                    marginTop: '50px',
                    width: '150%',
                  }}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                />
              </Col>
              <Col>
                <p
                  className=' text-center  mt-4'
                  style={{ color: '#78828A', fontSize: '16px' }}
                >
                  (Words or categories related to this item)
                </p>
              </Col>
            </div>
          </Col>
        </Row>
        <Row className='mb-5 mt-5'>
          <h6 className='text-muted '>Ad pictures</h6>
          <Col xl={2} xs={12}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center position-relative'
              style={{
                borderRadius: '11.891px',
                overflow: 'hidden',
                width: '161px',
                height: '160px',
              }}
            >
              <div
                className='delete-icon'
                style={{ position: 'absolute', top: '5px', right: '5px' }}
              >
                <img src='./Delete, Disabled.svg' alt='Delete' />
              </div>
              <div
                className='image-container'
                style={{
                  backgroundImage: `url('./rectangularIMAGEPNG.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              ></div>
            </div>
          </Col>
          <Col xl={2} xs={12}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center position-relative'
              style={{
                borderRadius: '11.891px',
                overflow: 'hidden',
                width: '161px',
                height: '160px',
              }}
            >
              <div
                className='delete-icon'
                style={{ position: 'absolute', top: '5px', right: '5px' }}
              >
                <img src='./Delete, Disabled.svg' alt='Delete' />
              </div>
              <div
                className='image-container'
                style={{
                  backgroundImage: `url('./rectangularIMAGEPNG.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              ></div>
            </div>
          </Col>
          <Col xl={2} xs={12}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center position-relative'
              style={{
                borderRadius: '11.891px',
                overflow: 'hidden',
                width: '161px',
                height: '160px',
              }}
            >
              <div
                className='delete-icon'
                style={{ position: 'absolute', top: '5px', right: '5px' }}
              >
                <img src='./Delete, Disabled.svg' alt='Delete' />
              </div>
              <div
                className='image-container'
                style={{
                  backgroundImage: `url('./rectangularIMAGEPNG.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              ></div>
            </div>
          </Col>
          <Col xl={2} xs={12}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center position-relative'
              style={{
                borderRadius: '11.891px',
                overflow: 'hidden',
                width: '161px',
                height: '160px',
              }}
            >
              <div
                className='delete-icon'
                style={{ position: 'absolute', top: '5px', right: '5px' }}
              >
                <img src='./Delete, Disabled.svg' alt='Delete' />
              </div>
              <div
                className='image-container'
                style={{
                  backgroundImage: `url('./rectangularIMAGEPNG.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              ></div>
            </div>
          </Col>
          <Col xl={2} xs={12}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center position-relative'
              style={{
                borderRadius: '11.891px',
                overflow: 'hidden',
                width: '161px',
                height: '160px',
              }}
            >
              <div
                className='delete-icon'
                style={{ position: 'absolute', top: '5px', right: '5px' }}
              >
                <img src='./Delete, Disabled.svg' alt='Delete' />
              </div>
              <div
                className='image-container'
                style={{
                  backgroundImage: `url('./rectangularIMAGEPNG.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              ></div>
            </div>
          </Col>
          <Col xl={2} xs={12}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center position-relative'
              style={{
                borderRadius: '11.891px',
                overflow: 'hidden',
                width: '161px',
                height: '160px',
              }}
            >
              <div
                className='delete-icon'
                style={{ position: 'absolute', top: '5px', right: '5px' }}
              >
                <img src='./Delete, Disabled.svg' alt='Delete' />
              </div>
              <div
                className='image-container'
                style={{
                  backgroundImage: `url('./rectangularIMAGEPNG.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              ></div>
            </div>
          </Col>
        </Row>
        <Row className='mt-4 mb-4'>
          <Col lg={8}></Col>
          <Col
            lg={4}
            className='d-flex justify-content-center align-items-center'
          >
            <Col>
              <button
                type='button'
                className='w-100 rounded-3 p-2 border-0'
                style={{
                  backgroundColor: 'rgba(134, 142, 150, 0.2)',
                  color: '#868E96',
                }}
              >
                Cancel
              </button>
            </Col>
            <Col>
              <button
                type='button'
                variant='primary'
                onClick={handleShow}
                className='ms-4 w-100 rounded-3 p-2 border-0 text-white '
                style={{ backgroundColor: '#596068' }}
              >
                Next
              </button>
            </Col>
          </Col>
        </Row>
        <Modal show={show} centered>
          <ConfrimModal onHide={handleClose} />
        </Modal>
      </Row>
    </div>
  );
};
export default pinsPage;
