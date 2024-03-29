import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseUrl } from "../../../Constants/Constants.js";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate;
  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        `${baseUrl}/api/upload/images?containerName=admin`,
        formData
      );
      console.log("admin pic:", response.data);
      setSelectedImage(URL.createObjectURL(selectedFile));

      setFormData((prevState) => ({
        ...prevState,
        profileImage: response.data.url,
      }));
    } catch (error) {
      console.error("Error uploading thumbnail:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsersData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/administration/get-admin/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFormData(response.data.admin);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const adminData = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    role: formData.role,
    password: formData.password,
    profileImage: formData.profileImage,
  };

  const handleAdminUpdate = async () => {
    try {
      const response = await axios.put(
        `${baseUrl}/api/administration/update-admin/${id}`,
        adminData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      toast.success("Admin updated successfully!");
      setTimeout(() => {
        navigate("/System");
      }, 2000);
    } catch (error) {
      console.error("Error updating Admin data", error);
      toast.error(error.response.data.errors.msg);
      console.log(adminData);
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
            Update Existing User
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
                      src="/defaultProfile.jpg"
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
                    src="/Layer 2.svg"
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
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-3 border rounded-4 w-100"
              placeholder="Criss Germano"
            />
            <label className="text-muted mt-4 mb-2">E-mail</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-3 border rounded-4 w-100"
              placeholder="criss@braelo.co"
            />
            <label className="text-muted mt-4 mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="p-3 border rounded-4 w-100"
                  placeholder="****"
                />
              </Col>
              <Col xl={6}>
                <label className="text-muted mt-4 mb-2">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
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
              onClick={handleAdminUpdate}
            >
              Save
            </button>
          </div>
        </Col>
        {/* <Modal show={show} centered>
          <CongratulationCard onHide={handleClose} />
        </Modal> */}
      </Row>
    </div>
  );
};

export default EditUser;
