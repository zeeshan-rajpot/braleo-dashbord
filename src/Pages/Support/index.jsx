import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import NaveBar from '../../Components/NaveBar.jsx';
import BannerTab from './components/bannerTab.jsx';
import TabBar from './components/tabBar.jsx';

const Support = () => {
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
            <SideBar activetabe='Support' />
          </Col>
          <Col md={10} xs={10} style={{ height: '100vh', overflowY: 'auto' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row className='spaceadjust'>
              <BannerTab />
            </Row>
            <Row className='spaceadjust'>
              <TabBar />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Support;
