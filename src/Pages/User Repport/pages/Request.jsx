import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardUser from '../Components/CardUserrep.jsx';
export const Request = () => {
  return (
    <div>
      <Row className='d-flex justify-content-between align-items-center m-3'>
        <Col xl={4} xs={12} className='mt-3 mt-md-0'>
          <div
            className='d-flex p-2 rounded-4  justify-content-between justify-content-md-center  align-items-center w-100'
            style={{ backgroundColor: '#F7F8F9' }}
          >
            <img src='./sadsmilie.svg' />
            <p className='ms-4 ' style={{ color: '#868E96' }}>
              175 Reclains
            </p>{' '}
          </div>
        </Col>
        <Col xl={4} xs={12} className='mt-3 mt-md-0'>
          {' '}
          <div
            className='d-flex p-2 rounded-4  justify-content-between justify-content-md-center  align-items-center align-items-center w-100'
            style={{ backgroundColor: '#F7F8F9' }}
          >
            <img src='./happysmilie.svg' />
            <p className='ms-4 ' style={{ color: '#868E96' }}>
              885 Rates
            </p>{' '}
          </div>
        </Col>
        <Col xl={4} xs={12} className='mt-3 mt-md-0'>
          <div
            className='d-flex p-2 rounded-4  justify-content-between justify-content-md-center  align-items-center align-items-center w-100'
            style={{ backgroundColor: '#F7F8F9' }}
          >
            <img src='./excitedsmilie.svg' />
            <p className='ms-4 ' style={{ color: '#868E96' }}>
              295 Cases solved
            </p>
          </div>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col xl={3} xs={6} className='mt-3 mt-md-0'>
          <select className='w-100 p-2 border-1 border rounded-3 bg-transparent text-muted'>
            <option value=''>Filter by type</option>
            <option></option>
              
          </select>
        </Col>
        <Col xl={3} xs={6} className='mt-3 mt-md-0'>
          <select className='w-100 p-2 border-1 border rounded-3 bg-transparent text-muted'>
            <option value=''>Massive actions</option>
            <option></option>
              
          </select>
        </Col>
        <Col xl={6} xs={12} className='mt-3 mt-md-0'>
          <div className='d-flex justify-content-between  align-items-center p-2 border border-1 rounded-4'>
            <input placeholder='Search' type='search' />
            <img src='./Seacrh.svg' />
          </div>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col xl={4}>
          <CardUser
            headtitle='Reclain'
            title='Wilian Roberto'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='  September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='https://images.unsplash.com/photo-1551022372-0bdac482b9d6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Rate'
            title='Alana Michele'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/usergirlimage.png'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Reclain'
            title='Jeferson Silva'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Rate'
            title='Jonathan Kellvin'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/menuserimage.png'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Rate'
            title='Kelly Gonzales'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/userKellyimage.png'
          />
        </Col>
        <Col xl={4}>
          <CardUser
            headtitle='Reclain'
            title='Selena Silva'
            message="Hello, how are you? I'd like to report a problem that happened to me when I registered my product on the platform..."
            date='September 15, 2023 at 6pm | iOs | Florida'
            imageUrl='./image/userSelenaimage.png'
          />
        </Col>
      </Row>
    </div>
  );
};
export default Request;
