import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ConfrimModal from "../components/Success.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../../const.js";

export const PinsPage = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [thumnail, setThumnail] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [adpics, setAdpics] = useState([]);
  const [keywords, setKeywords] = useState([
    "Pub",
    "Restaurant",
    "Beauty Salon",
    "Bar",
    "DJ",
    "Coffee Shop",
    "Bakery",
    "Language School",
    "Technical Course",
    "Barbershop",
    "Party Room",
    "Studio",
  ]);

  const [pinData, setPinData] = useState({
    type: "PinAd",
    name: "",
    description: "",
    postalCode: "",
    keywords: keywords,
    location: "",
    contact: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
    adThumbnail: thumnail,
    adPictures: adpics,
  });

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `${baseurl}/api/upload/images?containerName=listing`,
        formData
      );
      setImagePreview(URL.createObjectURL(file));
      setThumnail(response.data.url);

      setPinData((prevState) => ({
        ...prevState,
        adThumbnail: response.data.url,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const addKeyword = () => {
    if (keywordInput.trim() !== "") {
      setKeywords([...keywords, keywordInput]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (index) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPinData({
      ...pinData,
      [name]: value,
    });
  };

  useEffect(() => {
    setPinData((prevState) => ({
      ...prevState,
      keywords: keywords,
    }));
  }, [keywords]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const newPreviews = [...imagePreviews];
      newPreviews[index] = event.target.result;
      setImagePreviews(newPreviews);

      // Upload image to the database and store the URL
      const url = await uploadImage(file);
      if (url) {
        setAdPics((prevState) => [...prevState, url]);

        // Update pinData state here
        setPinData((prevState) => ({
          ...prevState,
          adPictures: [...prevState.adPictures, url],
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `${baseurl}/api/upload/images?containerName=listing`,
        formData
      );

      // Update adPics state with the new image URL
      setAdpics((prevState) => [...prevState, response.data.url]);

      // Update pinData state with the new adPictures array
      setPinData((prevState) => ({
        ...prevState,
        adPictures: [...prevState.adPictures, response.data.url],
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const renderImagePreviews = () => {
    return imagePreviews.map((preview, index) => (
      <div
        key={index}
        className="d-flex flex-column mt-3 justify-content-center align-items-center position-relative"
        style={{
          borderRadius: "11.891px",
          overflow: "hidden",
          width: "161px",
          height: "160px",
          background: "black",
        }}
      >
        <div
          className="delete-icon"
          style={{ position: "absolute", top: "5px", right: "5px" }}
        >
          <img src="/Delete, Disabled.svg" alt="Delete" />
        </div>
        <img
          src={preview}
          alt={`Preview ${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundImage: `url('/rectangularIMAGEPNG.png')`,
          }}
        />
      </div>
    ));
  };

  const Postapi = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${baseurl}/api/advertisement/new`,
        pinData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("POST API Response:", response.data);
      handleShow(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Row>
        <Row>
          <h2 className="text-muted pt-4">New Pin</h2>
        </Row>
        <Row>
          <div>
            <label className="text-muted">Pin Name</label>
            <input
              placeholder="Ali Dev store Dubai"
              className="border border-1 rounded-3 p-2 w-100 "
              name="name"
              onChange={handleChange}
            />
          </div>
        </Row>
        <Row className="mt-4">
          <Col xl={6} xs={12}>
            <div className="w-100">
              <h6 className="text-muted">Description</h6>
              <textarea
                style={{ height: "150px" }}
                placeholder="Get to know Legally and Co's services and ask your questions, Get to know Legally and Co's services and ask your questions, Get to know Legally and Co's services and ask your questions I"
                className="border border-1 rounded-3 p-2 w-100 h-70"
                name="description"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col xl={6} xs={12}>
            <div className="w-100">
              <h6 className="text-muted ">
                Keywords{" "}
                <small className="ms-3 " style={{ fontSize: "10px" }}>
                  {" "}
                  (Words or categories related to this item)
                </small>
              </h6>
              <div className="border  border-1 w-100 h-100 p-2 rounded-3 ">
                <div className="mt-2">
                  <input
                    placeholder="Restaurante |"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        addKeyword();
                      }
                    }}
                    className=" p-1 w-100"
                  />
                </div>
                <div
                  className="d-flex flex-wrap"
                  style={{ height: "auto", width: "100%" }}
                >
                  {keywords.map((keyword, index) => (
                    <div
                      key={index}
                      className="badge rounded-5 p-2 me-2 text-center mt-2"
                      style={{
                        backgroundColor: "#c4c8cc",
                        color: "#fff",
                        cursor: "pointer",
                        width: "auto",
                        height: "28px",
                      }}
                      onClick={() => removeKeyword(index)}
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted">Location</label>
              <input
                placeholder="Immigration Paralegal Services"
                className="border border-1 rounded-3 p-2 w-100 "
                name="location"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted mt-3 mt-md-0">Postal Code</label>
              <input
                placeholder="SE1 7AB"
                className="border border-1 rounded-3 p-2 w-100 "
                name="postalCode"
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted">Contact </label>
              <input
                placeholder="+0000000000000"
                className="border border-1 rounded-3 p-2 w-100 "
                name="contact"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted mt-3 mt-md-0">Whatsapp</label>
              <input
                placeholder="https://wa.me/00000000"
                className="border border-1 rounded-3 p-2 w-100 "
                name="whatsapp"
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted">Facebook</label>
              <input
                placeholder="fb.com/youraccount"
                className="border border-1 rounded-3 p-2 w-100 "
                name="facebook"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted mt-3 mt-md-0">Instagram</label>
              <input
                placeholder="https://wa.me/00000000"
                className="border border-1 rounded-3 p-2 w-100 "
                name="instagram"
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <h6 className="text-muted ">Ad Thumbmail</h6>
          <Col xl={12} xs={12}>
            <div
              className="d-flex flex-column justify-content-center align-items-center w-100 p-4"
              style={{
                border: "2px dotted #868E96",

                borderRadius: "11.891px",
                backgroundColor: "#DEE2E642",
                minHeight: "300px", // Set the height to auto
                position: "relative", // Add position relative
              }}
            >
              <Col xs="auto">
                {loading ? (
                  <ClipLoader color={"#ffcc35"} loading={loading} size={100} />
                ) : (
                  <>
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="preview"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    ) : (
                      <img
                        src="/pinsthumbnail.svg"
                        alt="files icon"
                        onClick={handleIconClick}
                        style={{
                          cursor: "pointer",
                          marginTop: "50px",
                          width: "150%",
                        }}
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileSelected}
                    />
                  </>
                )}
              </Col>

              <Col>
                <p className="text-muted text-center fs-6 mt-2">
                  <span style={{ fontSize: "12px" }}>
                    (Words or categories related to this item)
                  </span>
                </p>
              </Col>
            </div>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">
          <h6 className="text-muted ">Ad pictures</h6>
          {[...Array(6)].map((_, index) => (
            <Col key={index} md={4}>
              <label htmlFor={`image-input-${index}`}>
                <input
                  id={`image-input-${index}`}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageChange(e, index)}
                />
                {imagePreviews[index] ? (
                  <>
                    <div
                      className="delete-icon"
                      style={{ position: "absolute", top: "5px", right: "5px" }}
                    >
                      <img src="./Delete, Disabled.svg" alt="Delete" />
                    </div>
                    <img
                      src={imagePreviews[index]}
                      alt={`Preview ${index}`}
                      style={{
                        marginTop: "10px",
                        width: "161px",
                        height: "160px",
                        objectFit: "cover",
                      }}
                    />
                  </>
                ) : (
                  <div
                    className="d-flex flex-column mt-3 justify-content-center align-items-center position-relative"
                    style={{
                      borderRadius: "11.891px",
                      overflow: "hidden",
                      width: "161px",
                      height: "160px",
                    }}
                  >
                    <div
                      className="delete-icon"
                      style={{ position: "absolute", top: "5px", right: "5px" }}
                    >
                      <img src="/Delete, Disabled.svg" alt="Delete" />
                    </div>
                    <div
                      className="image-container"
                      style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url('./rectangularIMAGEPNG.png')`,
                      }}
                    >

                    </div>
                  </div>
                )}
              </label>
            </Col>
          ))}
        </Row>
        <Row className="mt-4 mb-4">
          <Col lg={8}></Col>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Col>
              <button
                type="button"
                className="w-100 rounded-3 p-2 border-0"
                style={{
                  backgroundColor: "rgba(134, 142, 150, 0.2)",
                  color: "#868E96",
                }}
              >
                Cancel
              </button>
            </Col>
            <Col>
              <button
                type="button"
                variant="primary"
                onClick={Postapi}
                className="ms-4 w-100 rounded-3 p-2 border-0 text-white "
                style={{ backgroundColor: "#596068" }}
              >
                Next
              </button>
            </Col>
          </Col>
        </Row>
        <Modal show={show} centered>
          <ConfrimModal onHide={handleClose} />
        </Modal>
      </Row>
    </div>
  );
};

export default PinsPage;
