import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

export const NewsBannerTab = () => {
  const [activeTab, setActiveTab] = useState('newMessage'); 

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };
  const [isActive, setIsActive] = useState('');
  const [selected, setIsSelected] = useState('Massive actions');
  const [displayData, setDisplayData] = useState('');

  const handleDropdownItemClick = data => {
    setIsSelected(data);
    setIsActive(false);

    // Update the displayed data based on the clicked item
    switch (data) {
      case 'Disable':
        setDisplayData('');
        break;
      case 'Enable':
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={3} lg={4} xs={12}>
          {/* <Link className='text-muted' to='/Listings'> */}
          <h3 className='text-muted'>News</h3>
          {/* </Link> */}
        </Col>
        <Col xl={2} lg={2} xs={12}>
          <div
            className='dropdown mb-3 mb-md-0 w-100 responsivedrop'
            style={{ marginLeft: '130%' }}
          >
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className='dropdown-btn'
            >
              {selected}
              <span>
                <img src='./dropdownicon.svg' alt='dropdown icon' />
              </span>
            </div>
            <div
              className='dropdown-content'
              style={{ display: isActive ? 'block' : 'none' }}
            >
              <div
                onClick={() => handleDropdownItemClick('Publish')}
                className='item'
              >
                Publish
              </div>
              <div
                onClick={() => handleDropdownItemClick('Disable')}
                className='item'
              >
                Disable
              </div>
              <div
                onClick={() => handleDropdownItemClick('Enable')}
                className='item'
              >
                Enable
              </div>
              <div
                onClick={() => {
                  handleDropdownItemClick('Delete');
                  handleShow();
                }}
                className='item'
                variant='primary'
              >
                Delete
              </div>
            </div>
          </div>
        </Col>
        <Col
          xl={4}
          lg={3}
          xs={6}
          className='d-flex justify-content-end align-items-center '
        >
          {/* <Col md={1} lg={2} xs={6}> */}
          {/* <Link className='text-muted' to='/Actionsbutton'> */}
            <div
              className=' d-flex  me-3 justify-content-center align-items-center rounded-3'
            >
              <img src='./listingCopy.svg' alt='copybutton' />{' '}
            </div>
          {/* </Link> */}
          {/* </Col> */}
          {/* <Col md={2} lg={2} xs={6}> */}
          <img src='./listingFilter.svg' alt='copybutton' />
          {/* </Col> */}
        </Col>
        <Col xl={3} lg={3} xs={6}>
          <Link className='text-muted' to='/AddNewPost'>
            <h3
              className={`d-flex align-items-center justify-content-center fs-6 rounded-2 ${
                activeTab === 'newMessage' ? 'active-tab' : ''
              }`}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor:
                  activeTab === 'newMessage' ? '#CD9403' : '#868E9633',
                color: activeTab === 'newMessage' ? 'white' : '#75818D',
                cursor: 'pointer',
              }}
              onClick={() => handleTabClick('newMessage')}
            >
              Ad new post
            </h3>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default NewsBannerTab;
