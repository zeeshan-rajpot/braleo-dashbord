import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
export const editedModal = ({ onSendResponse }) => {
  const [text, setText] = useState('');

  const handleSendResponse = () => {
    onSendResponse(text);
  };
  return (
    <div
      className='mt-5'
      style={{
        width: '50rem',
      }}
    >
      <Row className='bg-body p-4 w-100  rounded-4 ' style={{ height: '30vh' }}>
        <textarea
          placeholder='text Goes here'
          className='border-0 w-100 '
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </Row>

      <div
        className='mt-2 text-end'
        style={{
          width: '50rem',
        }}
      >
        <button
          onClick={handleSendResponse}
          className='border-0 p-2 w-25 rounded-3 text-white'
          style={{ backgroundColor: '#868E96' }}
        >
          Send Response
        </button>
      </div>
    </div>
  );
};
export default editedModal;
