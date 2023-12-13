import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import NaveBar from '../../Components/NaveBar';
import DashBroadCard from './DashBroadCard';
import LineCharts from './LineChart';
import ImgCard from './ImgCard';
import HalfPieChart from './HalfPieChart';
import ListofPerson from './ListofPerson';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            md={2}
            xs={2}
            className=' text-center p-0'
            style={{ backgroundColor: '#495057', height: '100vh' }}
          >
            <SideBar activetabe='Dashboard' />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <NaveBar />
            </Row>

            <Row>
              <Col md={8}>
                <Row className='mt-4 mt-md-2'>
                  <DashBroadCard />
                </Row>
                <Row>
                  <Col xs={6} md={3}>
                    <Link to='/NewListing'>
                      <ImgCard
                        title='New Listing'
                        img='/media-library-folder.1.svg'
                      />
                    </Link>
                  </Col>
                  <Col xs={6} md={3}>
                    <Link to='/NewAdd'>
                      <ImgCard title='New Ad' img='/ads.svg' />
                    </Link>
                  </Col>
                  <Col xs={6} md={3}>
                    <Link to='/NewSpotLight'>
                      <ImgCard
                        title='New Spotlight'
                        img='/Loading, Plus, Circle, Add.svg'
                      />
                    </Link>
                  </Col>
                  <Col xs={6} md={3}>
                    <Link to='/NewPost'>
                      <ImgCard title='New Post' img='/postimg.svg' />
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ height: '300px' }}>
                    <LineCharts />
                  </Col>
                </Row>
              </Col>
              <Col md={4} className='mt-md-2 mt-5'>
                <Row
                  className=' rounded-4 border '
                  style={{ backgroundColor: '#F8F9FA', width: '110%' }}
                >
                  <HalfPieChart />
                </Row>
                <Row>
                  <Col>
                    <ListofPerson />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
