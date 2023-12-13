import React from 'react';
import LineGra from './lineGraph.jsx';

export const GraphCard = ({ title, value, Percentage }) => {
  return (
    <div
      className='d-flex justify-content-center align-items-center rounded-3'
      style={{ width: '100%', border: '0.898px solid #A9B4BF' }}
    >
      <div className='ms-2' style={{ width: '40%' }}>
        <h4
          // className='text-muted'
          style={{ fontSize: '14px', color: '#757575', fontWeight: '600' }}
        >
          {title}
        </h4>
        <h6
          className='text-secondary'
          style={{ fontSize: '18.55px', color: '#75818D', fontWeight: '700' }}
        >
          {value}
        </h6>
        <p style={{ color: '#26A51B' }}>{Percentage}</p>
      </div>
      <div style={{ width: '60%', boxSizing: 'border-box' }}>
        <LineGra style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default GraphCard;
