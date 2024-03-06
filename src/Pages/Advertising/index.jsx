import { Col, Container, Navbar, Row } from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import NaveBar from '../../Components/NaveBar';
import BannerTab from './BannerTab';
// import Advertisingbanner from "./Advertisingbanner";

const Advertising = () => {
  return (
    <>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0'
            style={{ backgroundColor: '#495057', height: '100vh' }}
          >
            <SideBar activetabe='Advertising' />
          </Col>
          <Col md={10} xs={10} style={{ height: '100vh', overflowY: 'auto' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row className='m-auto' style={{ width: '85%' }}>
              <BannerTab />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Advertising;
