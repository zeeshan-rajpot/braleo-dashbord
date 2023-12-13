import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextEditor from './TextEditor.jsx';
import ScheduleCard from './ScheduleCard.jsx';
import Modal from 'react-bootstrap/Modal';
export const AddNewPostPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('Massive actions');
  const [displayData, setDisplayData] = useState('Filter');

  const [pisActive, psetIsActive] = useState(false);
  const [pselected, psetIsSelected] = useState('Paragraph');
  const [fisActive, fsetIsActive] = useState(false);
  const [fselected, fsetIsSelected] = useState('Font');
  const [szisActive, szsetIsActive] = useState(false);
  const [szselected, szsetIsSelected] = useState('12pt');
  // Define a function to handle dropdown item clicks
  const handleDropdownItemClick = data => {
    setIsSelected(data);
    setIsActive(false);

    // Update the displayed data based on the clicked item
    switch (data) {
      case 'Archive':
        setDisplayData('');
        break;
      case 'Disable':
        setDisplayData('');
        break;
      case 'Delete':
        setDisplayData('');
        break;
      default:
        setDisplayData('');
        break;
    }
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
  //------------------------- Modal---------------------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row>
        <Col md={8}>
          {' '}
          <Row className='mt-3 '>
            <Col>
              <h2 className='text-muted '>Create new post</h2>
            </Col>
          </Row>
          <Row className='mt-3 '>
            <Col lg={12} xl={12} xs={12}>
              <label className='text-muted my-3'>Post Title</label>
              <input
                placeholder='Immigration Paralegal Services'
                className='p-3 border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
          </Row>
          <Row className='mt-3 '>
            <Col lg={12} xl={12} xs={12}>
              <label className='text-muted my-3'>Subtitle Post</label>
              <input
                placeholder='Immigration Paralegal Services'
                className='p-3 border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
          </Row>
          <Row className='mt-3'>
            <label className='text-muted my-3'>Write the content</label>
            <Row>
              <div
                className='text-center  w-100 h-100 rounded-4 ms-3 d-flex p-4'
                style={{ backgroundColor: '#596068' }}
              >
                <Col lg={6} xs={6} className='bg-white rounded-3 '>
                  <div className='dropdown'>
                    <div
                      onClick={e => {
                        psetIsActive(!pisActive);
                      }}
                      className='dropdown-btn'
                    >
                      {pselected}
                      <span>
                        <img src='./dropdownicon.svg' alt='dropdown icon' />
                      </span>
                    </div>
                    <div
                      className='dropdown-content'
                      style={{ display: pisActive ? 'block' : 'none' }}
                    >
                      <div
                        onClick={e => {
                          psetIsSelected(e.target.textContent);
                          psetIsActive(!pisActive);
                        }}
                        className='item'
                      >
                        Archive
                      </div>
                      <div
                        className='item'
                        onClick={e => {
                          psetIsSelected(e.target.textContent);
                          psetIsActive(!pisActive);
                        }}
                      >
                        Disable
                      </div>
                      <div
                        className='item'
                        onClick={e => {
                          psetIsSelected(e.target.textContent);
                          psetIsActive(!pisActive);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} xs={3} className='bg-white rounded-3 me-2 ms-2'>
                  <div className='dropdown'>
                    <div
                      onClick={e => {
                        fsetIsActive(!fisActive);
                      }}
                      className='dropdown-btn'
                    >
                      {fselected}
                      <span>
                        <img src='./dropdownicon.svg' alt='dropdown icon' />
                      </span>
                    </div>
                    <div
                      className='dropdown-content'
                      style={{ display: fisActive ? 'block' : 'none' }}
                    >
                      <div
                        onClick={e => {
                          fsetIsSelected(e.target.textContent);
                          fsetIsActive(!fisActive);
                        }}
                        className='item'
                      >
                        Archive
                      </div>
                      <div
                        className='item'
                        onClick={e => {
                          fsetIsSelected(e.target.textContent);
                          fsetIsActive(!fisActive);
                        }}
                      >
                        Disable
                      </div>
                      <div
                        className='item'
                        onClick={e => {
                          fsetIsSelected(e.target.textContent);
                          fsetIsActive(!fisActive);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={2} xs={3} className='bg-white rounded-3'>
                  <div className='dropdown'>
                    <div
                      onClick={e => {
                        szsetIsActive(!szisActive);
                      }}
                      className='dropdown-btn'
                    >
                      {szselected}
                      <span>
                        <img src='./dropdownicon.svg' alt='dropdown icon' />
                      </span>
                    </div>
                    <div
                      className='dropdown-content'
                      style={{ display: szisActive ? 'block' : 'none' }}
                    >
                      <div
                        onClick={e => {
                          szsetIsSelected(e.target.textContent);
                          szsetIsActive(!szisActive);
                        }}
                        className='item'
                      >
                        Archive
                      </div>
                      <div
                        className='item'
                        onClick={e => {
                          szsetIsSelected(e.target.textContent);
                          szsetIsActive(!szisActive);
                        }}
                      >
                        Disable
                      </div>
                      <div
                        className='item'
                        onClick={e => {
                          szsetIsSelected(e.target.textContent);
                          szsetIsActive(!szisActive);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </Row>
          <Row className='mt-3'>
            <Col xs={12} xl={12} lg={12}>
              <TextEditor />
            </Col>
          </Row>
          <Row className='mt-5'>
            <h6 className='text-muted mt-5 mt-md-0 pt-5 pb-3'>
              Post Thumbnail
            </h6>
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
          <Row className='mt-3 '>
            <Col lg={12} xl={12} xs={12}>
              <label className='text-muted my-3'>Author's name</label>
              <input
                placeholder='Criss Germano'
                className='p-3 border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col xl={6} xs={12}>
              <h6 className='text-muted'>Profile Pic</h6>
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
                    <span style={{ fontSize: '12px' }}>150x150 pixels</span>
                  </p>
                </Col>
              </div>
            </Col>
            <Col xl={6} xs={12}>
              <div className='w-100' style={{ height: '300px' }}>
                <h6 className='text-muted my-3 my-md-1'>
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
                    className='d-flex flex-wrap mt-5'
                    style={{ height: 'auto', width: '100%' }}
                  >
                    {keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className='badge rounded-5 bg-warning p-2 me-2 text-center mt-3'
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
        </Col>
      </Row>
      <Row className='m-4'>
        <Col md={5}></Col>
        <Col md={7} className=' h-100 d-flex mt-5 mt-md-0 '>
          <Col md={2}>
            <button
            variant="primary" onClick={handleShow}
              className='py-2 px-4 border-0 rounded-3 text-white w-100'
              style={{ backgroundColor: '#868E96' }}
            >
              Schedule
            </button>
          </Col>
          <div>
            <Modal
              style={{
                backgroundColor: 'rgba(233, 236, 239, 0.19)',
                backdropFilter: 'blur(14.5px)',
              }}
              show={show} onHide={handleClose}
              centered
            >
              <ScheduleCard  onHide={handleClose} />
            </Modal>
          </div>
          <Col md={2}>
            <button
              className='ms-2 py-2 w-100 px-4  bg-dark text-white border-0 rounded-3 '
              style={{ backgroundColor: '#596068' }}
            >
              Publish
            </button>
          </Col>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};
export default AddNewPostPage;
