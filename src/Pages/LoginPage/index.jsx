import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { baseurl } from '../../const';
export const index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const handleLogin = async () => {
    try {
      // Make a POST request to the login API
      const response = await axios.post(`${baseurl}/api/administration/login`, {
        email,
        password,
      });

      // Assuming the API returns a token
      const token = response.data.token;

      // console.log(response)
      // Save the token to local storage
      localStorage.setItem('token', token);
      // console.log(response.data.msg)

      toast.success(response.data.msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      // Redirect to the Dashboard page after successful login
      setTimeout(() => {
        navigate('/Dashboard');
      }, 3000);
    } catch (error) {
      // console.error( error);
      // Handle login error (show a message, etc.)
      toast.error(error.response.data.errors.msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <>
      <Row>
        <Col
          xl={6}
          className='d-flex justify-content-center align-items-center'
          style={{ height: '100vh', overflowY: ' hidden' }}
        >
          <div
            className='m-auto d-flex flex-column justify-content-center align-items-center'
            style={{ width: '75%' }}
          >
            <div className='d-flex flex-column justify-content-center align-items-center w-75'>
              <p
                className='mt-5 mt-md-0'
                style={{
                  fontWeight: '700',
                  fontSize: '25.1px',
                  color: '#232F30',
                }}
              >
                Braelo Power admin
              </p>
              {/* <div className='w-100 mt-5 mt-md-4'>
                <input
                  type='text'
                  placeholder='crissgermano@gmail.com |'
                  className='w-100  p-2 rounded-3'
                  style={{ border: '1.22px solid #EFEFEF' }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='mt-5 mt-md-4 w-100'>
                <input
                  type='password'
                  placeholder='**** |'
                  style={{ border: ' 1.22px solid #1D96FF' }}
                  className='w-100  p-2 rounded-3'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div> */}
              <div className='w-100 mt-5 mt-md-4'>
                <input
                  type='text'
                  placeholder='crissgermano@gmail.com |'
                  className='w-100 p-2 rounded-3'
                  style={{
                    border: emailActive
                      ? '1.22px solid #1D96FF'
                      : '1.22px solid #EFEFEF',
                  }}
                  value={email}
                  onFocus={() => setEmailActive(true)}
                  onBlur={() => setEmailActive(false)}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='mt-5 mt-md-4 w-100'>
                <input
                  type='password'
                  placeholder='**** |'
                  style={{
                    border: passwordActive
                      ? '1.22px solid #1D96FF'
                      : '1.22px solid #EFEFEF',
                  }}
                  className='w-100 p-2 rounded-3'
                  value={password}
                  onFocus={() => setPasswordActive(true)}
                  onBlur={() => setPasswordActive(false)}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className='mt-5 mt-md-4 w-100'>
                {/* <Link to='/Dashboard'> */}
                <button
                  className='bg-black text-white rounded-3 p-3 w-100 border-0'
                  onClick={handleLogin}
                >
                  Login
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </Col>

        <Col xl={6} style={{ height: '100vh', overflowY: ' hidden' }}>
          <div
            className='d-flex justify-content-end align-items-center w-100 mt-5 mt-md-0'
            style={{
              maxWidth: '100%',
              order: '0',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '40px 0 0 40px',
                backgroundColor: '#FFCC35',
                padding: '0 0 0 35px',
                maxWidth: '100%',
              }}
            >
              <div
                style={{
                  borderRadius: '40px 0 0 40px',
                  backgroundColor: '#EE9E03',
                  overflowY: 'hidden',
                  padding: '0 0 0 35px',
                }}
              >
                <img
                  src='./image/Group 1000005200.png'
                  alt=''
                  style={{
                    height: '650px',
                  }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />
    </>
  );
};

export default index;
