import { Row, Col } from 'react-bootstrap';
export const RequestCard = ({ imageUrl, title, message, date, headtitle }) => {
  return (
    <>
      <div
        className='ms-4 rounded-4 p-2 mt-4'
        style={{ backgroundColor: '#F7F8F9' }}
      >
        <Row className='d-flex justify-content-between align-items-center'>
          <Col
            className='p-2 text-white rounded-5 w-25 text-center m-4'
            xl={2}
            style={{ backgroundColor: '#868E96', opacity: '0.5' }}
          >
            <p>{headtitle}</p>
          </Col>
          <Col xl={2}>
            <img src='./Archieve.svg' alt='' />
          </Col>
        </Row>
        <Row>
          <div className='text-center'>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'inline-block',
                opacity: '0.5',
              }}
            >
              <img
                src={imageUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
        </Row>
        <Row className='text-center m-4' style={{ opacity: '0.5' }}>
          <p
            style={{
              color: ' #75818D',
              fontSize: '23.995px',
              fontWeight: ' 600',
            }}
          >
            {title}
          </p>
          <p
            className='mt-3'
            style={{
              color: ' #75818D',
              fontSize: '12.465px',
              fontWeight: ' 500',
            }}
          >
            {message}
          </p>
          <p
            className='mt-4'
            style={{ color: ' #75818D', fontSize: '10px', fontWeight: ' 700' }}
          >
            {date}
          </p>
        </Row>

        <Row className='my-5' style={{ opacity: '0.5' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <img src='./Archieveimages/Frame 427320867.svg' />
          </div>
        </Row>
      </div>
    </>
  );
};

export default RequestCard;
