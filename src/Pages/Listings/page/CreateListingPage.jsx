import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const CreateListingPage = () => {
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

  return (
    <div>
      <Row>
        <Row>
          <h2 className='text-muted pt-4'>Create new Listing</h2>
        </Row>
        <Row>
          <div>
            <label className='text-muted'>Listing Title</label>
            <input
              placeholder='Immigration Paralegal Services'
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
                placeholder='Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions I'
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
                      className='badge rounded-5 bg-warning p-2 me-2 text-center mt-2'
                      style={{
                        backgroundColor: 'rgba(254, 240, 203, 0.7)',
                        color: '#A77C0E',
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
          <Col md={3} xs={12}>
            {' '}
            <div>
              <label className='text-muted'>Date</label>
              <input
                placeholder='13/09/2023'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={3} xs={12}>
            {' '}
            <div>
              <label className='text-muted '>Hour</label>
              <input
                placeholder='4pm'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={3} xs={12}>
            {' '}
            <div>
              <label className='text-muted mt-3 mt-md-0'>
                Start
                <small
                  className='ms-3 text-nowrap'
                  style={{ fontSize: '13px' }}
                >
                  {' '}
                  (Approximate time)
                </small>
              </label>
              <input
                placeholder='13/09/2023'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={3} xs={12}>
            {' '}
            <div>
              <label className='text-muted mt-3 mt-md-0'>
                Hour
                <small
                  className='ms-3 text-nowrap '
                  style={{ fontSize: '13px' }}
                >
                  {' '}
                  (Approximate hour)
                </small>
              </label>
              <input
                placeholder='4pm'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={4} xs={12}>
            {' '}
            <div>
              <label className='text-muted'>Postal Code</label>
              <input
                placeholder='SE1 7AB'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            {' '}
            <div>
              <label className='text-muted mt-3 mt-md-0'>Address</label>
              <input
                placeholder='Braelo Avenue, 888 Florida'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            {' '}
            <div>
              <label className='text-muted mt-3 mt-md-0'>Phone number</label>
              <input
                placeholder='+1 (339) 215-9749'
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
                border: '2px dotted rgba(205, 148, 3, 0.5)',
                height: '300px',
                borderRadius: '11.891px',
              }}
            >
              <Col xs='auto'>
                {/* <img src='./BannerFilesIcon.svg' alt='files icon' /> */}
                <img
                  src='./BannerFilesIcon.svg'
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
                  className=' text-center  mt-2'
                  style={{ color: '#AB9E7D', fontSize: '16px' }}
                >
                  Required dimensions
                  <br />
                  <span style={{ fontSize: '12px' }}>1080x1920 pixels</span>
                </p>
              </Col>
            </div>
          </Col>
        </Row>
        <Row className='mb-5 mt-5'>
          <h6 className='text-muted '>Ad pictures</h6>
          <Col xl={2} xs={5}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center w-100 p-4'
              style={{
                border: '2px dotted rgba(205, 148, 3, 0.5)',
                borderRadius: '11.891px',
              }}
            >
              <Col xs='auto'>
                <img
                  src='./Ad Picture.svg'
                  alt='files icon'
                  onClick={handleIconClick}
                  style={{
                    cursor: 'pointer',
                    width: '70px',
                  }}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                />
              </Col>
            </div>
          </Col>
          <Col xl={2} xs={5}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center w-100 p-4'
              style={{
                border: '2px dotted rgba(205, 148, 3, 0.5)',
                borderRadius: '11.891px',
              }}
            >
              <Col xs='auto'>
                <img
                  src='./Ad Picture.svg'
                  alt='files icon'
                  onClick={handleIconClick}
                  style={{
                    cursor: 'pointer',
                    width: '70px',
                  }}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                />
              </Col>
            </div>
          </Col>
          <Col xl={2} xs={5}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center w-100 p-4'
              style={{
                border: '2px dotted rgba(205, 148, 3, 0.5)',
                borderRadius: '11.891px',
              }}
            >
              <Col xs='auto'>
                <img
                  src='./Ad Picture.svg'
                  alt='files icon'
                  onClick={handleIconClick}
                  style={{
                    cursor: 'pointer',
                    width: '70px',
                  }}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                />
              </Col>
            </div>
          </Col>
          <Col xl={2} xs={5}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center w-100 p-4'
              style={{
                border: '2px dotted rgba(205, 148, 3, 0.5)',
                borderRadius: '11.891px',
              }}
            >
              <Col xs='auto'>
                <img
                  src='./Ad Picture.svg'
                  alt='files icon'
                  onClick={handleIconClick}
                  style={{
                    cursor: 'pointer',
                    width: '70px',
                  }}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                />
              </Col>
            </div>
          </Col>
          <Col xl={2} xs={5}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center w-100 p-4'
              style={{
                border: '2px dotted rgba(205, 148, 3, 0.5)',
                borderRadius: '11.891px',
              }}
            >
              <Col xs='auto'>
                <img
                  src='./Ad Picture.svg'
                  alt='files icon'
                  onClick={handleIconClick}
                  style={{
                    cursor: 'pointer',
                    width: '70px',
                  }}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                />
              </Col>
            </div>
          </Col>
          <Col xl={2} xs={5}>
            <div
              className='d-flex flex-column mt-3 justify-content-center align-items-center w-100 p-4'
              style={{
                border: '2px dotted rgba(205, 148, 3, 0.5)',
                borderRadius: '11.891px',
              }}
            >
              <Col xs='auto'>
                <img
                  src='./Ad Picture.svg'
                  alt='files icon'
                  onClick={handleIconClick}
                  style={{
                    cursor: 'pointer',
                    width: '70px',
                  }}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                />
              </Col>
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
              <Link className='text-muted' to='/CreateListingPreview'>
                <button
                  type='button'
                  className='ms-2 w-100 rounded-3 p-2 border-0 text-white '
                  style={{ backgroundColor: '#596068' }}
                >
                  Next
                </button>
              </Link>
            </Col>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
export default CreateListingPage;
