import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ArchCard from '../components/ArchivedCard.jsx';
export const ArchivedChat = () => {
  return (
    <div>
      <Row className='m-1'>
        {/* <Col xl={9}> */}
        <div
          className='my-4 border m-auto rounded-2 p-2 d-flex justify-content-between align-items-center'
          style={{ width: '105%' }}
        >
          <input type='search' placeholder='Search  |' className='w-100' />
          <img src='./Seacrh.svg' alt='' />
        </div>
        {/* </Col> */}
      </Row>

      <Row>
        <ArchCard
          Profile='./Chat Images/Profile.png'
          userName='Ryan Renold'
          message='I would like to make a complaint about..my account, could
                    you help me?'
          chatimage='./Chat Images/gallery.svg'
        />
        <ArchCard
          Profile='./Chat Images/JohnKnedy.png'
          userName='John Knedy'
          message='Is there a discount for large companies?'
        />
        <ArchCard
          Profile='./Chat Images/Anna.png'
          userName='Anna Mulana'
          message='I would like to make a complaint about..my account, could you help me?'
          chatimage='./Chat Images/gallery.svg'
        />
        <ArchCard
          Profile='./Chat Images/Jack.png'
          userName='Jack Markojek'
          message='I would like to make a complaint about..my account, could you help me?'
        />
        <ArchCard
          Profile='./Chat Images/Paul.png'
          userName='Paul Germano'
          message='I would like to make a complaint about..my account, could you help me?'
          chatimage='./Chat Images/gallery.svg'
        />
        <ArchCard
          Profile='./Chat Images/Germano.png'
          userName='Germano Bern'
          message='I would like to make a complaint about..my account, could you help me?'
        />
        <ArchCard
          Profile='./Chat Images/Rodrigo.png'
          userName='Rodrigo Sintra'
          message='I would like to make a complaint about..my account, could you help me?'
        />
        <ArchCard
          Profile='./Chat Images/Nabelle.png'
          userName='Nabelle Shop'
          message='I would like to make a complaint about..'
          chatimage='./Chat Images/gallery.svg'
        />
        <ArchCard
          Profile='./Chat Images/Paula.png'
          userName='Paula Muller'
          message='I would like to make a complaint about..'
        />
        <ArchCard
          Profile='./Chat Images/Gabriel.png'
          userName='Gabriel Passos'
          message='I would like to make a complaint about..'
        />
        <ArchCard
          Profile='./Chat Images/Renato.png'
          userName='Renato Bittencurt'
          message='Okay, thanks for the feedback.'
          chatimage='./Chat Images/gallery.svg'
        />
      </Row>
    </div>
  );
};
export default ArchivedChat;
