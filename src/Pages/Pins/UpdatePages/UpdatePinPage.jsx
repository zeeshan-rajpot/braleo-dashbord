import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { baseurl } from "../../../const.js";
import { useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export const UpdatePinPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [thumnail, setThumnail] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [adpics, setAdpics] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);

  const [pinData, setPinData] = useState({
    keywords: [],
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
      console.log("THUMNAIL Response:", response.data);
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
      setPinData((prevData) => ({
        ...prevData,
        keywords: [...prevData.keywords, keywordInput],
      }));
      setKeywordInput("");
    }
  };

  const removeKeyword = (index) => {
    setPinData((prevData) => {
      const updatedKeywords = [...prevData.keywords];
      updatedKeywords.splice(index, 1);
      return {
        ...prevData,
        keywords: updatedKeywords,
      };
    });
  };

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
      console.log("Image uploaded:", response.data.url);

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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/api/advertisement/get-ad/${id}?type=PinAd`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPinData(response.data.advertisement);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching banner data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const udpdatedData = {
    type: "PinAd",
    action: "update",
    updateFields: {
      type: "PinAd",
      name: pinData.name,
      postalCode: pinData.postalCode,
      description: pinData.description,
      keywords: pinData.keywords,
      whatsapp: pinData.whatsapp,
      contact: pinData.whatsapp,
      facebook: pinData.facebook,
      location: pinData.location,
      instagram: pinData.instagram,
      adThumbnail: thumnail,
      adPictures: adpics,
    },
  };

  // {
  //   action: "update",
  //   type: "PinAd",
  //   name: pinData.name,
  //   postalCode: pinData.postalCode,
  //   description: pinData.description,
  //   keywords: pinData.keywords,
  //   whatsapp: pinData.whatsapp,
  //   contact: pinData.whatsapp,
  //   facebook: pinData.facebook,
  //   location: pinData.location,
  //   instagram: pinData.instagram,
  //   adThumbnail: thumnail,
  //   adPictures: adpics,
  // };

  const updatePinAd = async () => {
    try {
      const response = await axios.put(
        `${baseurl}/api/advertisement/update-ad/${id}`,
        udpdatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      toast.success("Pin updated successfully!");

      setTimeout(() => {
        navigate("/Dashboard");
      }, 3000);
    } catch (err) {
      console.error("Error updating Pin data", err);
      toast.error("Error updating Pin data");
      console.log(udpdatedData);
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
          <h2 className="text-muted pt-4">New Pin</h2>
        </Row>
        <Row>
          <div>
            <label className="text-muted">Pin Name</label>
            <input
              placeholder="Ali Dev store Dubai"
              className="border border-1 rounded-3 p-2 w-100 "
              value={pinData.name}
              onChange={(e) => setPinData({ ...pinData, name: e.target.value })}
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
                value={pinData.description}
                onChange={(e) =>
                  setPinData({ ...pinData, description: e.target.value })
                }
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
                  {pinData.keywords &&
                    pinData.keywords.map((keyword, index) => (
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
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted">Location</label>
              <input
                placeholder="Immigration Paralegal Services"
                className="border border-1 rounded-3 p-2 w-100 "
                value={pinData.location}
                onChange={(e) =>
                  setPinData({ ...pinData, location: e.target.value })
                }
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted mt-3 mt-md-0">Postal Code</label>
              <input
                placeholder="SE1 7AB"
                className="border border-1 rounded-3 p-2 w-100 "
                value={pinData.postalCode}
                onChange={(e) =>
                  setPinData({ ...pinData, postalCode: e.target.value })
                }
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted">Phone</label>
              <input
                placeholder="https://braelo.co/"
                className="border border-1 rounded-3 p-2 w-100 "
                value={pinData.contact}
                onChange={(e) =>
                  setPinData({ ...pinData, contact: e.target.value })
                }
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted mt-3 mt-md-0">Whatsapp</label>
              <input
                placeholder="https://wa.me/00000000"
                className="border border-1 rounded-3 p-2 w-100 "
                value={pinData.whatsapp}
                onChange={(e) =>
                  setPinData({ ...pinData, whatsapp: e.target.value })
                }
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
                value={pinData.facebook}
                onChange={(e) =>
                  setPinData({ ...pinData, facebook: e.target.value })
                }
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div>
              <label className="text-muted mt-3 mt-md-0">Instagram</label>
              <input
                placeholder="https://wa.me/00000000"
                className="border border-1 rounded-3 p-2 w-100 "
                value={pinData.instagram}
                onChange={(e) =>
                  setPinData({ ...pinData, instagram: e.target.value })
                }
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
            <Col key={index} xl={2} xs={12}>
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
                      <img src="/Delete, Disabled.svg" alt="Delete" />
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
                        backgroundImage: `url('/rectangularIMAGEPNG.png')`,
                      }}
                    ></div>
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
                className="ms-4 w-100 rounded-3 p-2 border-0 text-white "
                style={{ backgroundColor: "#596068" }}
                onClick={updatePinAd}
              >
                Update
              </button>
            </Col>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default UpdatePinPage;
