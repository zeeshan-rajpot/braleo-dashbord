import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Components/SideBar.jsx";
import NaveBar from "../../Components/NaveBar.jsx";
import BannerTab from "./BannerTab";
import ModalCard from "./Modal/TextAdd/CreateTextAdd.jsx";
import Modal from "react-bootstrap/Modal";
import { baseUrl } from "../../Constants/Constants.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CreateTextAdd = () => {
  //------------------------- Modal---------------------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [textData, setTextData] = useState({
    // Add your request data here
    type: "TextAd",
    title: "",
    description: "",
  });

  const handleNextButtonClick = async () => {
    try {
      if (!textData.title || !textData.description) {
        toast.error("Please fill in all required fields");
        return;
      }

      const response = await axios.post(
        `${baseUrl}/api/advertisement/new`,
        textData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Request", response);
      handleShow();
    } catch (error) {
      console.error("Error:", error);
      toast.error("AD submission failed");
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
      <ToastContainer />
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
          <Col md={10} xs={10} style={{ height: "100vh", overflowY: "auto" }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab activeBtn="newAdd" />
            </Row>
            <Row className="mt-4">
              <h4 className="mt-3 text-muted ">Create new Text Ad</h4>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <label className="text-muted">Ad title</label>
                <input
                  placeholder="Immigration Paralegal Services"
                  className="border border-1 rounded-3 p-2 w-100 "
                  onChange={(e) =>
                    setTextData({ ...textData, title: e.target.value })
                  }
                  required
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <label className="text-muted">Description</label>
                <textarea
                  placeholder="Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions I"
                  className="border border-1 rounded-3 p-2 w-100 h-100"
                  onChange={(e) =>
                    setTextData({ ...textData, description: e.target.value })
                  }
                  required
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <Row className="mt-5 justify-content-end">
                  <Col lg={3} xl={3} xs={12}>
                    <button className="w-100 p-1 border-0 rounded-2 text-dark">
                      Cancel
                    </button>
                  </Col>
                  <Col lg={3} xl={3} xs={12}>
                    <button
                      variant="primary"
                      onClick={handleNextButtonClick}
                      className=" w-100 p-1 border-0 rounded-2 text-white"
                      style={{ backgroundColor: "#CD9403" }}
                    >
                      Next
                    </button>
                  </Col>
                  <div>
                    <Modal show={show} onHide={handleClose} centered>
                      <ModalCard
                        onHide={handleClose}
                        data={handleNextButtonClick}
                      />
                    </Modal>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateTextAdd;
