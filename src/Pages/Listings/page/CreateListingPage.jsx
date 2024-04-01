import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../../const.js";

export const CreateListingPage = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [adPics, setAdPics] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [keywords, setKeywords] = useState([
    "Pub",
    "Restaurant",
    "Beauty Salon",
    "Bar",
    "DJ",
    "Coffee Shop",
    "Bakery",
    "Language School",
    "Technical Course ",
    "Barbershop",
    "Party Room",
    "Studio",
  ]);

  const [listingData, setListingData] = useState({
    listingType: "property",
    title: "",
    description: "",
    price: "",
    thumnail: thumbnail,
    images: adPics,
    keywords: keywords,
    location: {
      address: "",
      state: "",
      city: "",
      zipCode: "",
      coordinates: [],
    },

    date: "",
    time: "",
    start: "",
    end: "",

    socials: {
      whatsApp: "",
      instagram: "",
      facebook: "",
      website: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingData({
      ...listingData,
      [name]: value,
    });
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

  useEffect(() => {
    setListingData((prevState) => ({
      ...prevState,
      keywords: keywords,
    }));
  }, [keywords]);

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
      setThumbnail(response.data.url);

      setListingData((prevState) => ({
        ...prevState,
        thumbnail: response.data.url,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

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
        setAdpics((prevState) => [...prevState, url]);

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
      setAdPics((prevState) => [...prevState, response.data.url]);

      // Update pinData state with the new adPictures array
      setListingData((prevState) => ({
        ...prevState,
        images: [...prevState.images, response.data.url],
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${baseurl}/api/administration/new-listing`,
        listingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("POST API Response:", response.data);
      handleShow(true);
      toast.success("Listing Posted Successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error:", response.data.errors.msg);
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
        <Row>
          <h2 className="text-muted pt-4">Create new Listing</h2>
        </Row>
        <Row>
          <div>
            <label className="text-muted">Listing Title</label>
            <input
              placeholder="Immigration Paralegal Services"
              className="border border-1 rounded-3 p-2 w-100 "
              name="title"
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
                placeholder="Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions I"
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
                      className="badge rounded-5 bg-warning p-2 me-2 text-center mt-2"
                      style={{
                        backgroundColor: "rgba(254, 240, 203, 0.7)",
                        color: "#A77C0E",
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
          <Col md={3} xs={12}>
            {" "}
            <div>
              <label className="text-muted">Date</label>
              <input
                placeholder="13/09/2023"
                className="border border-1 rounded-3 p-2 w-100 "
                name="date"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <div>
              <label className="text-muted ">Hour</label>
              <input
                placeholder="4pm"
                className="border border-1 rounded-3 p-2 w-100 "
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <div>
              <label className="text-muted mt-3 mt-md-0">
                Start
                <small
                  className="ms-3 text-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {" "}
                  (Approximate time)
                </small>
              </label>
              <input
                placeholder="13/09/2023"
                className="border border-1 rounded-3 p-2 w-100 "
              />
            </div>
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <div>
              <label className="text-muted mt-3 mt-md-0">
                Hour
                <small
                  className="ms-3 text-nowrap "
                  style={{ fontSize: "13px" }}
                >
                  {" "}
                  (Approximate hour)
                </small>
              </label>
              <input
                placeholder="4pm"
                className="border border-1 rounded-3 p-2 w-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4} xs={12}>
            {" "}
            <div>
              <label className="text-muted">Zip Code</label>
              <input
                placeholder="SE1 7AB"
                className="border border-1 rounded-3 p-2 w-100 "
                name="zipCode"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            {" "}
            <div>
              <label className="text-muted mt-3 mt-md-0">Address</label>
              <input
                placeholder="Braelo Avenue, 888 Florida"
                className="border border-1 rounded-3 p-2 w-100 "
                name="address"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            {" "}
            <div>
              <label className="text-muted mt-3 mt-md-0">Phone number</label>
              <input
                placeholder="+1 (339) 215-9749"
                className="border border-1 rounded-3 p-2 w-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted">Website</label>
              <input
                placeholder="https://braelo.co/"
                className="border border-1 rounded-3 p-2 w-100 "
                name="website"
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
                name="whatsApp"
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
                        src="/BannerFilesIcon.svg"
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
                <p
                  className=" text-center  mt-2"
                  style={{ color: "#AB9E7D", fontSize: "16px" }}
                >
                  Required dimensions
                  <br />
                  <span style={{ fontSize: "12px" }}>1080x1920 pixels</span>
                </p>
              </Col>
            </div>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">
          <h6 className="text-muted">Ad pictures</h6>
          {[...Array(6)].map((_, index) => (
            <Col key={index}>
              <label htmlFor={`image-input-${index}`}>
                <input
                  id={`image-input-${index}`}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageChange(e, index)}
                />
                {imagePreviews[index] ? (
                  <img
                    src={imagePreviews[index]}
                    alt={`Preview ${index}`}
                    style={{
                      marginTop: "10px",
                      width: "110px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    className="d-flex flex-column justify-content-center align-items-center w-100 p-4 m-2"
                    style={{
                      border: "2px dotted #868E96",
                      borderRadius: "11.891px",
                      backgroundColor: "#DEE2E642",
                      width: "70px",
                    }}
                  >
                    <div>
                      <Col xs="auto">
                        <img
                          src="/Ad Picture.svg"
                          alt="files icon"
                          onClick={handleIconClick}
                          style={{
                            cursor: "pointer",
                            width: "70px",
                          }}
                        />
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileSelected}
                        />
                      </Col>
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
              <Link className="text-muted">
                <button
                  type="button"
                  className="ms-2 w-100 rounded-3 p-2 border-0 text-white "
                  style={{ backgroundColor: "#596068" }}
                >
                  Done
                </button>
              </Link>
            </Col>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
export default CreateListingPage;
