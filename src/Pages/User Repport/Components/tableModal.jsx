import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
function tableModal({ onHide }) {
  return (
    <Card className='resp rounded-4 ' style={{ width: '35rem' }}>
      <div className='cardimg ' style={{ borderRadius: '15px 15px 0 0' }}>
        <div className='text-end p-2 '>
          <img src='./X white sign.svg' onClick={onHide} role='button' alt='' />
        </div>
      </div>
      <Card.Body className='pb-5'>
        <Card.Title className='text-start title'>Criss Germano</Card.Title>
        <Card.Text className='text-start border-bottom py-3'>
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
        <Row className='mt-3'>
          <p className='other'>Active since September 23, 2023 at 5:33 PM</p>
          <Col xl={4}>
            <div className='d-flex mt-3'>
              <div>
                <img src='./TableMobileicon.svg' />
              </div>
              <div className='text-muted'>
                <p className='otherspan'>99%</p>
                <p className='otherspan'>Mobile</p>
              </div>
            </div>
          </Col>
          <Col xl={4}>
            <div className='d-flex mt-3'>
              <div>
                <img src='./ipad.svg' />
              </div>
              <div className='text-muted'>
                <p className='otherspan'>99%</p>
                <p className='otherspan'>Mobile</p>
              </div>
            </div>
          </Col>
          <Col xl={4}>
            <div className='d-flex mt-3'>
              <div>
                <img src='./laptop.svg' />
              </div>
              <div className='text-muted'>
                <p className='otherspan'>01%</p>
                <p className='otherspan'>Tablet</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mt-2 text-center'>
          <Col xl={6} xs={3}>
            <div className='d-flex mt-5'>
              <div>
                <img src='./tablefb.svg' alt='' />
              </div>
              <div className='ms-4'>
                <img src='./tableinsta.svg' alt='' />
              </div>
              <div className='ms-4'>
                <img src='./tablewhtsapp.svg' alt='' />
              </div>
            </div>
          </Col>
          <Col xl={6} xs={3}>
            <img src='./tableQRcode.svg' alt='' />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default tableModal;
