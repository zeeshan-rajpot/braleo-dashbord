import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../../Components/SideBar.jsx";
import NaveBar from "../../../Components/NaveBar.jsx";
import BannerTab from "../BannerTab";
import { useParams } from "react-router";
import axios from "axios";
import { baseurl } from "../../../const.js";
import { ToastContainer, toast } from "react-toastify";
const EditTextAds = () => {
  const { id } = useParams();
  //------------------------- Modal---------------------------------------


  const [textData, setTextData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/api/advertisement/get-ad/${id}?type=TextAd`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setTextData(response?.data?.advertisement);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching banner data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updatedData = {
    type: "TextAd",
    action: "update",
    updateFields: {
      type: "TextAd",
      title: textData.title,
      description: textData.description,
      archive: false,
    },
  };

  const updateTextAd = async () => {
    try {
      const response = await axios.put(
        `${baseurl}/api/advertisement/update-ad/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      toast.success("TextAd updated successfully!");
    } catch (err) {
      console.error("Error updating banner data", err);
      toast.error("Error updating banner data");
    }
  };

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
          <Col md={10} xs={10} style={{ height: "100vh", overflowY: "auto" }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab activeBtn="newAdd" />
            </Row>
            <Row className="mt-4">
              <h4 className="mt-3 text-muted ">Update Text Ad</h4>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <label className="text-muted">Ad title</label>
                <input
                  placeholder="Immigration Paralegal Services"
                  className="border border-1 rounded-3 p-2 w-100 "
                  value={textData.title}
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
                  value={textData.description}
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
                      onClick={updateTextAd}
                      className=" w-100 p-1 border-0 rounded-2 text-white"
                      style={{ backgroundColor: "#CD9403" }}
                    >
                      Update
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default EditTextAds;
