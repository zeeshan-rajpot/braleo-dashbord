import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../../Components/SideBar';
import NaveBar from '../../../Components/NaveBar.jsx';
import BannerTab from '../Components/plansbannerTab.jsx';
import TabBar from '../Components/tabBar.jsx';
import NewUsermainPage from '../Components/NewUsermainPage.jsx';
export const Createnewuser = () => {
  return (
    <div>
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
            <Row>
              <BannerTab />
            </Row>
            <Row className='p-5'>
              <NewUsermainPage />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Createnewuser;
