import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConfirmCard from "./ConfirmCard.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../../Constants/Constants.js";
import axios from "axios";
import { ScaleLoader } from "react-spinners";


const NextModal = ({ onHide, data: bannerData }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  

  const handleConfirmation = async (data) => {
    try {
      // Use axios to send the bannerData to your API endpoint
      const response = await axios.post(
        `${baseUrl}/api/advertisement/new`,
        bannerData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);
      setIsConfirmed(true);
    } catch (error) {
      // Handle any errors from the API call
      console.error("Error posting banner data:", error);
      setErrorOccurred(true);
      toast.error(error.response.data.errors.msg);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Col lg={12}>
        {!isConfirmed && !errorOccurred && (
          <div>
            <div
              style={{ backgroundColor: "#EE9E03" }}
              className="d-flex w-100 rounded-4 p-1"
            >
              <Col lg={8}>
                <Row>
                  <Col lg={11} className="ms-3 mt-3">
                    <h3 className="text-white fs-4">
                      Advertise your company at Braelo!
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col lg={7} className=" ms-3">
                    <p className="text-white">
                      Check out our plans and boost your sales!
                    </p>
                  </Col>
                </Row>

                <button
                  type="button"
                  className="m-3 w-50 border-0 p-1 rounded-5 text-white"
                  style={{ background: "rgba(0, 0, 0, 0.3)" }}
                >
                  Advertise now
                </button>
              </Col>
              <Col lg={4}>
                <img src="./ModalCardicon.svg" style={{ width: "100%" }} />
              </Col>
            </div>
            <Row className="mt-4">
              <Col lg={12}>
                <button
                  type="button"
                  variant="secondary"
                  centered
                  onClick={handleConfirmation}
                  className="ms-2 w-100 rounded-3 p-2 border-0 text-white "
                  style={{ backgroundColor: "#596068" }}
                >
                  Publish
                </button>
              </Col>
            </Row>
          </div>
        )}{" "}
        {isConfirmed && !errorOccurred && (
          <div
            className="bg-white text-center rounded-4 "
            style={{ height: "500px", width: "80%" }}
          >
            <Row>
              <Col className="d-flex justify-content-end">
                <img
                  src="./X sign.svg"
                  alt="exit"
                  style={{ width: "10%", cursor: "pointer" }}
                  onClick={onHide}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mt-5">
              <Col className="">
                <img className="" src="./checkicon.svg" alt="checkIcon" />
              </Col>
            </Row>
            <Row>
              <Col className="mt-4">
                <h2>Great!</h2>
              </Col>
            </Row>
            <Row>
              <Col xl={2}></Col>
              <Col xl={8} className="mt-3">
                <p>
                  Your ad was successfully registered! Now all you have to do is
                  cross your fingers and stay positive!
                </p>
              </Col>
              <Col xl={2}></Col>
            </Row>
          </div>
        )}
      </Col>
    </>
  );
};
export default NextModal;
