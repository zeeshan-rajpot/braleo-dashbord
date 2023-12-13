import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

export const AddNewPostBannerTab = () => {
  const [activeTab, setActiveTab] = useState('newMessage'); // Default to 'newMessage' tab

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={9} lg={4} xs={4}>  
          <h3 className='text-muted'>News</h3>
        </Col>
        <Col xl={3} lg={3} xs={8}>
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
    
        </Col>
      </Row>
    </div>
  );
};

export default AddNewPostBannerTab;
