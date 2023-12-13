// import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar = props => {
  const [activeTab, setActiveTab] = useState(props.activetabe);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        className='logo-img text-center  py-4  '
        style={{ backgroundColor: `#FFCC35 ` }}
      >
        <img src='/logo.svg' className='mobilenone' alt='' />
        <img src='/faveicon.svg' className='desktopnone' width='24px' alt='' />
      </div>

      <div
        className='AllTabbutn text-center '
        style={{ backgroundColor: '#495057' }}
      >
        <h4 className=' text-start ms-4 mt-3 text-light'>
          {' '}
          <b> Plataform </b>
        </h4>
        <Link to='/Dashboard'>
          <div
            className={`d-flex align-items-center text-center justify-content-start  sidebardiv ${
              activeTab === 'Dashboard' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Dashboard')}
          >
            <img src='/Group.svg' alt='' />
            <p className='mb-0 '>Dashboard</p>
          </div>
        </Link>
        <Link to='/AdvertisingPage'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Advertising' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Advertising')}
          >
            {' '}
            <img src='/Slides, Windows.svg' alt='' />
            <p>Advertising</p>
          </div>
        </Link>
        <Link to='/Notification'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Notification' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Notification')}
          >
            {' '}
            <img src='/bell-big-17-ringing.svg' alt='' />
            <p>Notification</p>
          </div>
        </Link>
        <Link to='/Listing'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Listing' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Listing')}
          >
            {' '}
            <img src='/media-library-folder.1.svg' alt='' />
            <p>Listing</p>
          </div>
        </Link>
        <Link to='/News'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'News' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('News')}
          >
            {' '}
            <img src='/Elements, Object, Copy.svg' alt='' />
            <p>News</p>
          </div>
        </Link>
        <Link to='/Statistics'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Statistics' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Statistics')}
          >
            {' '}
            <img src='/Statistics, Analytics,Arrow, Up, Square,.svg' alt='' />
            <p>Statistics</p>
          </div>
        </Link>
        <Link to='/UserRepport'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'UserRepport' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('UserRepport')}
          >
            {' '}
            <img src='/User, Share.svg' alt='' />
            <p>UserRepport</p>
          </div>
        </Link>

        <Link to='/Plans'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Plans' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Plans')}
          >
            {' '}
            <img src='/Coins,Money.svg' alt='' />
            <p>Plans</p>
          </div>
        </Link>

        <Link to='/Hanking'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Hanking' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Hanking')}
          >
            {' '}
            <img src='/Medal, Prize, Reward.svg' alt='' />
            <p>Hanking</p>
          </div>
        </Link>

        <Link to='/Pins'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Pins' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Pins')}
          >
            {' '}
            <img src='/pin-location-hand-select.svg' alt='' />
            <p>Pins</p>
          </div>
        </Link>

        <Link to='/Support'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Support' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Support')}
          >
            {' '}
            <img src='/Chat, Messages, Bubble.svg' alt='' />
            <p>Support</p>
          </div>
        </Link>
        <Link to='/System'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'System' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('System')}
          >
            {' '}
            <img src='/grid-layout-36-square.svg' alt='' />
            <p>System</p>
          </div>
        </Link>
        <Link to='/Archive'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Archive' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Archive')}
          >
            {' '}
            <img src='/inage.svg' alt='' />
            <p>Archive</p>
          </div>
        </Link>
        <Link to='/PrivacyPolicy'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Privacy' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Privacy')}
          >
            {' '}
            <img src='/document-legal-users.svg' alt='' />
            <p>Privacy Policy</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
