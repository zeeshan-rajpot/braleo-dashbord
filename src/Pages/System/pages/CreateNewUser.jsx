import React, { useState, useRef } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CongratulationCard from "../Components/Success.jsx";
import { baseUrl } from "../../../Constants/Constants.js";

const CreateNewUser = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    profileImage: "",
    password: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const uploadResponse = await axios.post(
          `${baseUrl}/api/upload/images?containerName=admin`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const imageUrl = uploadResponse.data.url;

        setFormData((prevFormData) => ({
          ...prevFormData,
          profileImage: imageUrl,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/administration/signup`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);
      handleShow();
    } catch (error) {
      // Handle any errors from the API call
      console.error("Error posting banner data:", error);
      toast.error(error.response.data.errors.msg);
    }
  };

  return (
    <div>
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
      <Row>
        <Col xl={6}>
          <p className="mt-3 fs-5" style={{ color: "#78828A" }}>
            Create new user
          </p>
          <div className="mt-3">
            <p style={{ color: "#78828A" }}>Profile Picture</p>
            <div className="mt-4">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "10px solid #CD9403",
                }}
              >
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                  />
                ) : (
                  <img
                    src="./defaultProfile.jpg"
                    alt="Default Profile Pic"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  backgroundColor: "#CD9403",
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  transform: "translateY(-60px) translateX(150px)",
                  border: "5px solid #fff",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <img
                  src="./Layer 2.svg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                  onClick={handleImageClick}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start w-100">
            <label className="text-muted mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-3 border rounded-4 w-100"
              placeholder="Criss Germano"
            />
            <label className="text-muted mt-4 mb-2">E-mail</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 border rounded-4 w-100"
              placeholder="criss@braelo.co"
            />
            <label className="text-muted mt-4 mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-3 border rounded-4 w-100"
              placeholder="+1 (339) 215-9749"
            />
            <Row>
              <Col xl={6}>
                <label className="text-muted mt-4 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="p-3 border rounded-4 w-100"
                  placeholder="****"
                />
              </Col>
              <Col xl={6}>
                <label className="text-muted mt-4 mb-2">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="p-3 border rounded-4 w-100 text-muted"
                >
                  <option value="Administrator">Administrator</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Web developer">Web developer</option>
                  <option value="Copywriter">Copywriter</option>
                  <option value="Visual Designer">Visual Designer</option>
                </select>
              </Col>
            </Row>
          </div>
          <div className="mb-5 mt-3">
            <button
              className="border w-25 p-2 rounded-3 text-white"
              style={{ backgroundColor: "#868E96" }}
              variant="primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </Col>
        <Modal show={show} centered>
          <CongratulationCard onHide={handleClose} />
        </Modal>
      </Row>
    </div>
  );
};

export default CreateNewUser;
