import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import NaveBar from '../../Components/NaveBar.jsx';
import BannerTab from './Components/plansbannerTab.jsx';
import TabBar from './Components/tabBar.jsx';
const Plans = () => {
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
            <SideBar activetabe='Plans' />
          </Col>
          <Col xs={10} md={10} style={{ overflowY: 'auto', height: '100vh' }}>
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

export default Plans;
