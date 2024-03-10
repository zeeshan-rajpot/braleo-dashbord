import { Col, Container, Navbar, Row } from "react-bootstrap";
import SideBar from "../../Components/SideBar";
import NaveBar from "../../Components/NaveBar";
import BannerTab from "./Components/BannerTab.jsx";
import TabBar from "./Components/Tabs.jsx";

const index = () => {
  return (
    <>
      <Container fluid className="  h-100">
        <Row>
          <Col
            xs={2}
            md={2}
            className="text-center p-0"
            style={{ backgroundColor: "#495057", height: "100vh" }}
          >
            <SideBar activetabe="Notification" />
          </Col>
          <Col md={10} xs={10} style={{ height: "100vh", overflowY: "auto" }}>
            <Row>
              <NaveBar />
            </Row>
            <Row  className='spaceadjust'>
              <BannerTab activeBtn="newMessage" />
            </Row>
            <Row  className='spaceadjust'>
              <TabBar />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
