import React from "react";
import PinsModal from "./pinsModal.jsx";
import { Row, Col } from "react-bootstrap";
import LinesEllipsis from "react-lines-ellipsis";
export const PinsPreviewModal = ({ pin }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "610px",
        height: "1150px",
        borderRadius: "12px 12px 12px 12px ",
      }}
    >
      <PinsModal Images={pin.adPictures} />

      <Row className="d-flex justify-content-between align-items-center mt-5 m-auto ">
        <Col xl={4} className="mt-4">
          <button
            className=" p-3 rounded-5 text-nowrap"
            style={{
              color: "#475467",
              border: "1px solid #EAECF0",
              backgroundColor: "transparent",
            }}
          >
            <img src="./cards/location.svg" alt="" className="me-3" />
            {pin.local || " Miami,Fl"}
          </button>
        </Col>
        <Col xl={5}></Col>
        <Col xl={3} className="mt-4">
          <p className="my-0">10 July 2023</p>
        </Col>
      </Row>
      <div
        className="m-auto"
        style={{
          width: "90%",
        }}
      >
        <div className="mt-4">
          <p
            style={{ fontWeight: "600", color: "#101828", fontSize: "27.47px" }}
          >
            Lide Business Group
            <br /> Florida
          </p>
          <LinesEllipsis
            text={pin.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            style={{ color: "#667085", fontSize: "15.41px" }}
          />
          {/* <p style={{ color: "#667085", fontSize: "15.41px" }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            ...
          </p> */}
        </div>
        <div className="mt-4">
          <p style={{ color: "#1D96FF", fontSize: "15.41px" }}>Read more</p>
        </div>
        <div className="mt-4">
          <p style={{ color: "#667085", fontSize: "12.41px" }}>Endereço</p>
        </div>
        <div>
          <p style={{ color: "#667085", fontSize: "12.41px" }}>
            City Hall Square, Florida | Miami | EUA
          </p>
        </div>
        <div className="mt-4">
          <img src="./image/google Map image.png" alt="" />
        </div>

        <div className="mt-5 d-flex justify-content-between align-items-center">
          <div>
            <p
              style={{
                color: "#667085",
                fontSize: "13.41px",
                fontWeight: "600",
              }}
            >
              Contato
            </p>
            <p
              style={{
                color: "#667085",
                fontSize: "10.41px",
                fontWeight: "600",
              }}
            >
              +1 (339) 215-9749
            </p>
          </div>
          <div>
            <img src="./social icons/Group 1000004550.svg" alt="" />
            <img
              src="./social icons/Group 1000004526.svg"
              alt=""
              className="ms-3"
            />
            <img
              src="./social icons/Group 1000004525.svg"
              alt=""
              className="ms-3"
            />
            <img
              src="./social icons/Group 1000004524.svg"
              alt=""
              className="ms-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PinsPreviewModal;
