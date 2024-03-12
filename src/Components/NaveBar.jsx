import { Col, Container, Row } from "react-bootstrap";
import "./navbar.css";

const   NaveBar = () => {
  return (
    <>
      <Container className=" border-bottom pb-3 ">
        <Row className="mt-2">
          <Col xs={12} md={8}>
            <div className="input-container">
              {/* <p>Search</p> */}
              <img src="/Seacrh.svg" alt="" />
              <input type="text " className="w-100 " />
            </div>
          </Col>
          <Col xs={4} md={1} className="text-center paddingtop">
            <div
              className=" rounded-5 p-1 text-center align-items-center d-flex justify-content-center  "
              style={{ background: "#FFE2E2", width: "50px", height: "50px" }}
            >
              <img src="/Group 1000004827.svg" alt="" />
            </div>
          </Col>
          <Col xs={8} md={3} className="paddingtop">
            <div className="align-items-center d-flex justify-content-start ">
              <img
                src="/Rectangle 3.png"
                width="60px"
                style={{ height: "60px" }}
                alt=""
              />

              <p className=" ps-4 text-secondary fontmobile ">
                Criss Germano <br /> Administrator{" "}
                <img src="/lock.svg" alt="" />{" "}
              </p>
              {/* <p className=" ps-4 text-secondary fontmobile ">
                Criss Germano <br /> Administrator{" "}
                <img src="/lock.svg" alt="" />{" "}
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NaveBar;
