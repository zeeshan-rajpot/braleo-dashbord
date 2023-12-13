import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export const HanckingCard = ({
  Icons,
  Profile,
  Designation,
  Name,
  isActive,
  onClick,
}) => {
  const [cardActive, setCardActive] = useState(isActive);

  useEffect(() => {
    setCardActive(isActive);
  }, [isActive]);

  const handleClick = () => {
    setCardActive(true); // Set the clicked card as active
    onClick(); // Notify parent about the active card change
  };

  const activeIcon = './Grid, Layout.svg';
  const defaultIcon = './Grid, Layout light.svg';
  const iconSrc = cardActive ? activeIcon : defaultIcon;

  return (
    <div className='mt-4'>
      <Row>
        <Col xl={8}>
          <div className='d-flex' role='button'>
            <div
              className='d-flex justify-content-start align-items-center w-100 p-5'
              style={{ backgroundColor: '#F5F7F9' }}
              onClick={handleClick}
            >
              <div
                style={{
                  width: '84.49px',
                  height: '84.49px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={Profile}
                  // src='./image/Internal User/Marly Silva.png'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  alt=''
                />
              </div>

              <div className='ms-3'>
                <p
                  className=' my-0'
                  style={{
                    color: '#75818D',
                    marginBottom: '8px',
                    fontSize: '20px',
                    fontWeight: '700',
                  }}
                >
                  {Name}
                </p>
                <p
                  className=' my-0'
                  style={{
                    color: '#75818D',
                    fontSize: '13.92px',
                    fontWeight: '500',
                  }}
                >
                  {Designation}
                </p>
                <p
                  className=' my-0 mt-3'
                  style={{
                    color: '#75818D',
                    fontSize: '10.51px',
                    fontWeight: '400',
                  }}
                >
                  Active since Sept. 12, 2023 at 4:32 pm
                </p>
              </div>
            </div>
            <div className='ms-3'>
              {/* <img src='./Grid, Layout.svg' alt='' /> */}
              <img src={iconSrc} alt='' />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HanckingCard;
