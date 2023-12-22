import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "../../spotlightCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../../../Constants/Constants";
import axios from "axios";

export const next = ({ onHide, data: formData }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const handleConfirmation = async (data) => {
    try {
      const [videoUrl, thumbnailUrl] = await Promise.all([
        uploadVideo(),
        uploadThumbnail(),
      ]);

      const finalData = {
        formData,
        video: videoUrl,
        videoThumbnail: thumbnailUrl,
      };

      console.log(finalData);
      const response = await axios.post(
        `${baseUrl}/api/advertisement/new`,
        finalData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      setIsConfirmed(true);
    } catch (error) {
      toast.error(error.response.data.errors.msg);
      console.log(error, "error");
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
      {!isConfirmed && !errorOccurred && (
        <div>
          <Row className="justify-content-center align-items-center">
            <Col>
              <Card
                className="cardbg rounded-4 mt-4 ms-auto me-auto bg-transparent "
                style={{ width: "18rem", height: "30rem" }}
              >
                <Row className="my-2">
                  <div className="align-items-center  justify-content-end  d-flex ">
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
                      <Badge
                        className="bg bg-danger d-flex justify-content-center align-items-center"
                        style={{
                          borderRadius: "22px",
                          marginLeft: "10px",
                          width: "38px",
                          height: "35px",
                        }}
                      >
                        <img
                          src="./Trash, Delete, Bin.svg"
                          style={{
                            width: "80%",
                            height: "80%",
                            objectFit: "contain",
                          }}
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
                      src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                      alt="headingpicture"
                      className="headingImage"
                      style={{
                        width: "80%",
                        height: "100%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                  <div className="contentSection">
                    <h1 className="heading">The Power of Networking</h1>
                    <p className="subheading1 my-0">
                      {" "}
                      <img
                        src="./price.svg"
                        alt="logo"
                        style={{
                          width: "10%",
                          height: "10%",
                          marginRight: "5px",
                        }}
                      />
                      $ VIP 199,00
                    </p>
                    <p className=" subheading my-0">
                      <img
                        src="./location.svg"
                        alt="logo"
                        style={{
                          width: "10%",
                          height: "10%",
                          marginRight: "5px",
                        }}
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
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col xs={12}>
              <button
                className="border-0 mt-4 bg text-white p-1 rounded-2 w-50 text-center d-flex align-items-center justify-content-center m-auto"
                style={{
                  backgroundColor: "rgba(89, 96, 104, 1)",
                }}
                variant="secondary"
                onClick={handleConfirmation}
              >
                {" "}
                Publish
              </button>
            </Col>
          </Row>
        </div>
      )}

      {isConfirmed && !errorOccurred && (
        <div>
          <div
            className="bg-white text-center rounded-4 "
            style={{ height: "500px", width: "80%" }}
          >
            <Row>
              <Col className="d-flex justify-content-end">
                <img
                  src="./X sign.svg"
                  onClick={onHide}
                  alt="exit"
                  style={{ width: "10%", cursor: "pointer" }}
                  className=""
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="mt-4">
                <img className="mt-5" src="./checkicon.svg" alt="checkIcon" />
              </Col>
            </Row>
            <Row>
              <Col className="mt-4">
                <h2>Wonderful!</h2>
              </Col>
            </Row>
            <Row>
              <Col xl={2}></Col>
              <Col xl={8} className="mt-3">
                <p>Your highlight has been published successfully!</p>
              </Col>
              <Col xl={2}></Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};
export default next;
