import { Looks } from '@mui/icons-material';
import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
export const CreateIllustrationsUser = () => {
  const [sessionTitle, setSessionTitle] = useState('Session Preview');
  const [description, setDescription] =
    useState(`Your ad was successfully registered!
To see how it looks, simply go to the item 
in your menu called "My Items" 
and it will be there.`);

  const [selectedImage, setSelectedImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    // Trigger the file input click when the image is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div style={{ height: '170vh' }}>
      <Row>
        <p className='mt-3 fs-5' style={{ color: '#78828A' }}>
          Manage Illustrations
        </p>
      </Row>
      <Row className='mt-5'>
        <Col xl={6}>
          <div className='d-flex flex-column justify-content-start align-items-start w-100'>
            <label className='text-muted mb-2'>Session Title</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100 text-muted'
              placeholder='Yeah!! Good job!'
              value={sessionTitle}
              onChange={e => setSessionTitle(e.target.value)}
            />

            <label className='text-muted mt-5 mb-2'>Description</label>
            <textarea
              type='text'
              className='p-3 border rounded-4 w-100 text-start text-muted'
              style={{ height: '20vh' }}
              placeholder={`Your ad was successfully registered!
To see how it looks, simply go to the item 
in your menu called "My Items" 
and it will be there.`}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <label className='text-muted mt-5 mb-2'>Select Page</label>
            <select className='p-3 border rounded-4 w-100 text-muted'>
              <option value='Screen New Listing'>Screen New Listing</option>
            </select>
          </div>
          <div className='mb-5 mt-5'>
            <button
              className='border w-25 p-2 rounded-3 text-white'
              style={{ backgroundColor: '#868E96' }}
            >
              Save
            </button>
          </div>
        </Col>
        <Col
          xl={6}
          className='m-auto d-flex flex-column justify-content-start align-items-start'
        >
          <label className='text-muted mb-2'> Upload image or video</label>
          <div
            className='d-flex flex-column align-items-center justify-content-center '
            style={{
              width: '70%',
              height: '100%',
              flexShrink: '0',
              borderRadius: '11.891px',
              border: '1px dashed #868E96',
              backgroundColor: 'rgba(222, 226, 230, 0.26)',
            }}
          >
            <img
              src='./ImageDimension.svg'
              alt=''
              className='mt-5 pt-5'
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              id='imageInput'
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <p className='text-muted mb-5 pb-5'>
              Required dimensions
              <br /> 1080x1920 pixels
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={6}></Col>
        <Col xl={6}>
          <div className='bg-light rounded-4 text-center'>
            <p className='text-muted pt-5'>{sessionTitle}</p>
            <img
              className='mt-4'
              src={
                selectedImage ||
                './image/Illustration User/guy offers discounts at an online store.svg'
              }
              alt=''
              onClick={handleImageClick}
              style={{ cursor: 'pointer', width: '350px', height: '350px' }}
            />
            <h5 className='text-black mt-2'>Good Job!</h5>
            <p className='pb-5 text-muted text-center w-50 m-auto'>
              {description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default CreateIllustrationsUser;
