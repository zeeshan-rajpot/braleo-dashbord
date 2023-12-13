import { Col, Container, Row , Badge} from "react-bootstrap";
import SideBar from "../../Components/SideBar";
import NaveBar from "../../Components/NaveBar";

const AddBanner = () => {
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
            <SideBar activetabe="Advertising" />
          </Col>
          <Col xs={10} md={10}>
            <Col md={10} xs={10} style={{ height: "100vh", overflowY: "auto" }}>
              <Row>
                <NaveBar />
              </Row>


         
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddBanner;
