import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../../../Constants/Constants";
import { toast, ToastContainer } from "react-toastify";

export const NewMessage = () => {
  const [messageData, setMessageData] = useState({
    type: "Notification", // Type can be either "Advice" or "Notification"
    title: "",
    description: "",
  });

  const [messagePreview, setMessagePreview] = useState({
    message: "",
    placeholder:
      "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Do not waste time get the plan that best fits your pocket now I",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData({
      ...messageData,
      [name]: value,
    });

    if (name === "description") {
      setMessagePreview({
        ...messagePreview,
        message: value,
      });
    }
  };

  const handlePublish = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/advicenotification/new`,
        messageData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Request", response);
      console.log(messageData);
      toast.success("Message sent Successfully");
      resetForm();
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response.data.errors.msg);
    }
  };

  const resetForm = () => {
    setMessageData({
      type: "Notification",
      title: "",
      description: "",
    });

    setMessagePreview({
      message: "",
      placeholder:
        "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Do not waste time get the plan that best fits your pocket now I",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Row>
        <Col md={10}>
          {" "}
          <Row className="mt-3 ">
            <Col>
              <h2 className="text-muted ">Create new message</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} xl={8} xs={12}>
              <label className="text-muted my-3">Message Title</label>
              <input
                placeholder="Tic Tac, Tic Tac! Your plan needs you!"
                className="p-3 border border-1 rounded-3 p-2 w-100 "
                name="title"
                onChange={handleChange}
              />
            </Col>
            <Col lg={8} xl={8} xs={12}></Col>
          </Row>
          <Row>
            <Col lg={8} xl={8} xs={12}>
              <label className="text-muted mt-3">Description</label>
              <textarea
                placeholder={messagePreview.placeholder}
                className="border border-1 rounded-3 p-2 w-100 h-100"
                name="description"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="my-4">
            <Col lg={8} xl={8} xs={12}>
              <label className="text-muted mt-5">Message Preview</label>
              <div className="mt-5 borderyellow p-4">
                <Row className="border-bottom  ">
                  <div className="d-flex mb-2">
                    <img src="./braeloicon.svg" alt="logo" className="me-2" />
                    <p className="text-muted fw-bold  ">Braelo promotions</p>
                  </div>
                </Row>
                <p className="mt-4 text-muted ">
                  {messageData.description === ""
                    ? messagePreview.placeholder
                    : messagePreview.message}
                </p>
              </div>
            </Col>
            <Col md={4} className="mt-auto h-100">
              <div className="m-4 ">
                <button className="py-2 px-4 border-0 rounded-3 text-muted">
                  Cancel
                </button>
                <button
                  className="ms-2 py-2  px-4  bg-dark text-white border-0 rounded-3 "
                  type="submit"
                  onClick={() => handlePublish()}
                >
                  Publish
                </button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};
export default NewMessage;
