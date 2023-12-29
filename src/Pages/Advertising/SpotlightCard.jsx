import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "./spotlightCard.css";
import Modal from "react-bootstrap/Modal";
import Delete from "./Modal/Delet Modal/Delete.jsx";
import { Link } from "react-router-dom";
const SpotlightCard = ({ spotlight }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        className="cardbg rounded-4 mt-4 ms-auto me-auto "
        style={{ width: "18rem", height: "30rem" }}
      >
        <Row className="my-2">
          <div className="align-items-center d-flex justify-content-between ">
            <Col lg={3} className="  ">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </Col>
            <Col lg={9} className="d-flex ">
              <Badge
                className="bg bg-secondary rounded-circle "
                style={{
                  borderRadius: "22px",
                  marginLeft: "50px",
                  width: "38px",
                  height: "35px",
                }}
              >
                <img
                  src="./Group 1000004491.svg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  alt="Icon 1"
                />
              </Badge>
              <Link to="/Editspotlight">
                <Badge
                  className="bg bg-secondary d-flex justify-content-center align-items-center "
                  style={{
                    borderRadius: "22px",
                    marginLeft: "10px",
                    width: "38px",
                    height: "35px",
                  }}
                >
                  <img
                    src="./Pen, Edit.svg"
                    style={{
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                    }}
                    alt="Icon 2"
                  />
                </Badge>
              </Link>
              <Badge
                className="bg bg-danger d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: "22px",
                  marginLeft: "10px",
                  width: "38px",
                  height: "35px",
                }}
                role="button"
                variant="primary"
                onClick={handleShow}
              >
                <img
                  src="./Trash, Delete, Bin.svg"
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                  alt="Icon 3"
                />
              </Badge>
            </Col>
          </div>
        </Row>

        <div
          className="Rectangular d-flex ms-auto me-auto"
          style={{ marginTop: "220px", width: "90%" }}
        >
          <div className="imgSection">
            <img
              src={spotlight.videoThumbnail}
              alt="headingpicture"
              className="headingImage"
              style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            />
          </div>
          <div className="contentSection">
            <h1 className="heading">{spotlight.title}</h1>
            <p className="subheading1 my-0">
              {" "}
              <img
                src="./price.svg"
                alt="logo"
                style={{ width: "10%", height: "10%", marginRight: "5px" }}
              />
              VIP ${spotlight.price}
            </p>
            <p className=" subheading my-0">
              <img
                src="./location.svg"
                alt="logo"
                style={{ width: "10%", height: "10%", marginRight: "5px" }}
              />
              Miami
            </p>
          </div>
        </div>
        <Card.Text className="last text-white text-align-right me-3">
          <strong className="lastheading">
            Joined at 4:33pm by @crissgermano{" "}
          </strong>
          <br />
          Saturday 23 September 2023 - Florida Miami
        </Card.Text>
      </Card>

      <Modal show={show} centered>
        <Delete onHide={handleClose} />
      </Modal>
    </>
  );
};

export default SpotlightCard;
