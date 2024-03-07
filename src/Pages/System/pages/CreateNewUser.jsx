import React, { useState, useRef } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CongratulationCard from "../Components/Success.jsx";
import { baseUrl } from "../../../Constants/Constants.js";

const CreateNewUser = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
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

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
console.log(selectedFile)
    if (selectedFile) {
      setSelectedImage(URL.createObjectURL(selectedFile));
      setFormData((prevFormData) => ({
        ...prevFormData,
        profileImage: selectedFile,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      // First, check if an image was selected
      if (formData.profileImage) {
        const imageFormData = new FormData();
        imageFormData.append("image", formData.profileImage);

        const uploadResponse = await axios.post(
          `${baseUrl}/api/upload/images?containerName=admin`,
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(uploadResponse);

        // Check if the image upload was successful
        if (uploadResponse.data.success) {
          const imageUrl = uploadResponse.data.url;

          // Update the profileImage field with the obtained URL
          setFormData((prevFormData) => ({
            ...prevFormData,
            profileImage: imageUrl,
          }));


          const data = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            role: formData.role,
            profileImage: imageUrl,
            password: formData.password,
          };
          // Now, make the signup API call with the URL
          const response = await axios.post(
            `${baseUrl}/api/administration/signup`,
            data,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          console.log(data);
          handleShow();
        } else {
          // Handle the case where image upload failed
          toast.error(uploadResponse.data.msg || "Image upload failed.");
        }
      } else {
        // Handle the case where no image was selected
        toast.error("Please select an image.");
      }
    } catch (error) {
      console.error("Error posting user data:", error);
      toast.error(error.response?.data?.errors?.msg || "An error occurred.");
    
    }
  };
console.log(formData)
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
                      src={selectedImage}
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
                  <option value=""></option>
                  <option value="administrator">Administrator</option>
                  {/* <option value="Comercial">Comercial</option> */}
                  <option value="web developer">Web developer</option>
                  <option value="designer">Web Designer</option>
                  <option value="copywriter">Copywriter</option>
                  <option value="visual designer">Visual Designer</option>
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
