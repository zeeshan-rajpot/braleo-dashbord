import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './singleuser.css';
function SingleUserDetails() {
  return (
    <Card className='resp' style={{ width: '35rem' }}>
      <div
        className=' '
        style={{
          backgroundImage: `url('./image/CrissGermanoCover.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '17rem',
        }}
      >
        <Col></Col>
        <Col
          className='text-end text-white me-2'
          style={{ marginTop: '210px' }}
        >
          <p>Device</p>
          <p>Iphone 14 Pro_0234</p>
        </Col>
      </div>
      <Card.Body className='pb-5'>
        <Card.Title className='text-center title'>Criss Germano</Card.Title>
        <Card.Text className='text-center'>
          <p className='title2'>@crissgermano</p>
          <p className='mt-2 othersmal'>User info</p>
          <p className='other'>
            {' '}
            <span className='otherspan'>Address: </span>Braelo Avenue,587
          </p>
          <p className='other'> Palm Beach- SE1 7AB </p>
          <p className='other'>
            {' '}
            <span className='otherspan'>Number:</span> +0 (000) 000-000{' '}
          </p>
          <p className='other'>
            {' '}
            <span className='otherspan'>Profile link:</span>{' '}
            https://wa.me/00000000
          </p>
        </Card.Text>
        <Row className='p-4 text-center'>
          <Col xl={3} xs={3}>
            <p className='headtitle'>20k</p>
            <span className='paragraph'>Listing</span>
          </Col>
          <Col xl={3} xs={3}>
            <p className='headtitle'>88k</p>
            <span className='text-nowrap paragraph'>Spotlights</span>
          </Col>
          <Col xl={3} xs={3}>
            <p className='headtitle'>158k</p>
            <span className='paragraph'>158k</span>
          </Col>
          <Col xl={3} xs={3}>
            <p className='headtitle'>158k</p>
            <span className='paragraph'>Clicks</span>
          </Col>
        </Row>
        <Row className='text-center px-5' style={{ fontSize: '13px' }}>
          <Col xl={3} xs={3}>
            <p className='smallheadtitle'>84</p>
            <span className='text-nowrap paragraph'>Messages</span>
          </Col>
          <Col xl={3} xs={3}>
            <p className='smallheadtitle'>05</p>
            <span className='text-nowrap paragraph'>Reports</span>
          </Col>
          <Col xl={3} xs={3}>
            <p className='smallheadtitle'>55</p>
            <span className='paragraph text-nowrap '>Reviews</span>
          </Col>
          <Col xl={3} xs={3}>
            <p className='smallheadtitle'>85</p>
            <span className='paragraph text-nowrap '>Pin Clicks</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SingleUserDetails;
