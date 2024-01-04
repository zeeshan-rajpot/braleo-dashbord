import { React } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import "./Card.css";

export const AdsCard = ({ banner }) => {
  return (
    <div>
      <Card
        className="text-left border-0  mt-4 position-relative rounded-4 "
        style={{
          width: "100%",
          height: "90%",
          backgroundImage: `url(${
            banner.thumbnailPicture ||
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className="overlay"></div>
        <Row className="my-2">
          <Col className="d-flex justify-content-end me-3 position-absolute">
            <img
              src="./Archieve.svg"
              alt=""
              className="archive-icon"
              // style={{ width: '12%' }}
            />
          </Col>
        </Row>
        <Card.Body className="">
          <Card.Title style={{ fontSize: "17px", color: "#fff" }}>
            {banner.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "15px" }}>
            <p
              className="my-0 mt-3"
              style={{ width: "35%", color: "#fff", fontSize: "10.72px" }}
            >
              {banner.description}
            </p>
            <button className="cardbtn rounded-4 p-2 border-0 mt-3">
              {banner.link || "Advertise Now"}
            </button>
            <p
              // className='my-0'
              style={{
                fontSize: "10px",
                textAlign: "right",
                color: "#fff",
                marginBottom: "15px",
              }}
            >
              Joined at 4:33pm by @crissgermano <br />
              Saturday 23 September 2023 - Florida Miami
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default AdsCard;
