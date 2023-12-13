import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import NaveBar from '../../Components/NaveBar.jsx';
import BannerTab from './components/Bannertab.jsx';
import PinsCard from './components/PinsCard.jsx';
const Pins = () => {
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
            <SideBar activetabe='Pins' />
          </Col>
          <Col xs={10} md={10} style={{ overflowY: 'auto', height: '100vh' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab />
            </Row>
            <Row className='m-0 m-md-3'>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/Rectangle 101.png'
                  TitleP='Germano 
                  Shoes Store'
                  ProfileImage='./PinsImages/Rectangle 23835.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/codebg.png'
                  TitleP='Ali iOS 
                  Developer'
                  ProfileImage='./PinsImages/2.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/cardbg.png'
                  TitleP='Jordan Vehicles 
                  Store'
                  ProfileImage='./PinsImages/3.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/Rectangle 101.png'
                  TitleP='Germano 
                  Shoes Store'
                  ProfileImage='./PinsImages/Rectangle 23835.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/codebg.png'
                  TitleP='Ali iOS 
                  Developer'
                  ProfileImage='./PinsImages/2.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/cardbg.png'
                  TitleP='Jordan Vehicles 
                  Store'
                  ProfileImage='./PinsImages/3.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/Rectangle 101.png'
                  TitleP='Germano 
                  Shoes Store'
                  ProfileImage='./PinsImages/Rectangle 23835.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/codebg.png'
                  TitleP='Ali iOS 
                  Developer'
                  ProfileImage='./PinsImages/2.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/cardbg.png'
                  TitleP='Jordan Vehicles 
                  Store'
                  ProfileImage='./PinsImages/3.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/Rectangle 101.png'
                  TitleP='Germano 
                  Shoes Store'
                  ProfileImage='./PinsImages/Rectangle 23835.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/codebg.png'
                  TitleP='Ali iOS 
                  Developer'
                  ProfileImage='./PinsImages/2.svg'
                />
              </Col>
              <Col xl={4}>
                <PinsCard
                  backgroundImage='./PinsImages/cardbg.png'
                  TitleP='Jordan Vehicles 
                  Store'
                  ProfileImage='./PinsImages/3.svg'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pins;
