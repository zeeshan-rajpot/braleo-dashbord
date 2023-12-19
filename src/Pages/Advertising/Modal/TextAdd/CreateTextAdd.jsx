import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";

export const CreateTextAdd = ({ onHide, data }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmation = () => {
    data();
    setIsConfirmed(true);
  };
  return (
    <>
      {!isConfirmed && (
        <div>
          <div
            className="rounded-3"
            style={{
              background: " rgb(0,0,0)",
              background:
                "linear-gradient(0deg, rgba(73, 80, 87, 0.75), rgba(73, 80, 87, 0.75)), linear-gradient(95.42deg, #000000 2.45%, #CD9403 105.69%)",
            }}
          >
            <Row className="p-5 text-white">
              <h2>Advertise your business!</h2>
              <p className="p-3 ">
                Choose the plan according to your business needs and get access
                to exclusive benefits!
              </p>
            </Row>
          </div>
          <Row>
            <Col xs={12}>
              <button
                className="border-0 w-100 rounded-2 text-white p-2 m-auto mt-4"
                style={{ backgroundColor: "#CD9403" }}
                variant="secondary"
                onClick={handleConfirmation}
              >
                Publish
              </button>
            </Col>
          </Row>
        </div>
      )}{" "}
      {isConfirmed && (
        <div>
          <div
            className="bg-white text-center rounded-4 "
            style={{ height: "500px", width: "90%" }}
          >
            <Row>
              <Col className="d-flex justify-content-end" onClick={onHide}>
                <img
                  src="./X sign.svg"
                  alt="exit"
                  style={{ width: "10%", cursor: "pointer" }}
                  className=""
                />
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col className="mt-4">
                <img className="mt-5" src="./checkicon.svg" alt="checkIcon" />
              </Col>
            </Row>
            <Row>
              <Col className="mt-4">
                <h2>It's all done!</h2>
              </Col>
            </Row>
            <Row>
              <Col xl={2}></Col>
              <Col xl={8} className="mt-3">
                <p>Your TextAd has been published successfully! </p>
              </Col>
              <Col xl={2}></Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};
export default CreateTextAdd;
