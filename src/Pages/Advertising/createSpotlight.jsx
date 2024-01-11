import React, { useState, useRef, useEffect } from "react";
import SideBar from "../../Components/SideBar.jsx";
import NaveBar from "../../Components/NaveBar.jsx";
import BannerTab from "./BannerTab";
import Modal from "react-bootstrap/Modal";
import AdvTabs from "./AdvTabs";
import ModalCard from "./Modal/spotlight/next.jsx";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../../Constants/Constants.js";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

export const CreateSpotlight = () => {
  const videoFileInputRef = useRef(null);
  const thumbnailFileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");
  const [videoPreview, setVideoPreview] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleIconClickVideo = () => {
    videoFileInputRef.current.click();
  };
  const handleIconClickthumbnail = () => {
    thumbnailFileInputRef.current.click();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    type: "Spotlight",
    title: "",
    price: "",
    category: "Entertainment",
    // selectedListing: "",
    video: "",
    videoThumbnail: "",
    link: "",
  });

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  useEffect(() => {
    const videoElement = document.getElementById("video-preview");

    if (videoElement && videoPreview) {
      videoElement.src = videoPreview;
    }
  }, [videoPreview]);

  const handleFileSelected = (e, field) => {
    const selectedFile = e.target.files[0];

    if (field === "videoThumbnail") {
      setFormData((prevData) => ({
        ...prevData,
        [field]: selectedFile,
      }));

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else if (field === "video") {
      setFormData((prevData) => ({
        ...prevData,
        [field]: selectedFile,
      }));

      const reader = new FileReader();
      reader.onload = () => {
        setVideoPreview(reader.result);
        setIsPlaying(true); // Assuming the video is playing by default
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const uploadVideo = async () => {
    setVideoLoading(true);

    const { video } = formData;

    if (video) {
      try {
        const formData = new FormData();
        formData.append("video", video);

        const uploadResponse = await axios.post(
          `https://braelo.azurewebsites.net/api/upload/videos?containerName=videos`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        return uploadResponse.data.url;
      } catch (error) {
        console.error("Error uploading video:", error);
      } finally {
        setVideoLoading(false);
      }
    }
  };

  const uploadThumbnail = async () => {
    setThumbnailLoading(true);

    const { videoThumbnail } = formData;

    if (videoThumbnail) {
      try {
        const formData = new FormData();
        formData.append("image", videoThumbnail);

        const uploadResponse = await axios.post(
          `https://braelo.azurewebsites.net/api/upload/images?containerName=listing`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        return uploadResponse.data.url;
      } catch (error) {
        console.error("Error uploading thumbnail:", error);
      } finally {
        setThumbnailLoading(false);
      }
    }
  };

  const handleNext = async () => {
    handleShow();
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
              <BannerTab activeBtn="newSpotlight" />
            </Row>
            <Row className="mt-4">
              <Row>
                <h4 className="mt-3 text-muted ">Create new Spotlight</h4>
              </Row>
              <Row className="mt-4">
                <Col xl={4} xs={12}>
                  <div>
                    <label className="text-muted">Ad title</label>
                    <input
                      placeholder="Immigration Paralegal Services"
                      className="border border-1 rounded-3 p-2 w-100 "
                      onChange={(e) => handleInputChange(e, "title")}
                    />
                  </div>
                </Col>
                <Col xl={4} xs={12}>
                  <div>
                    <label className="text-muted">Price</label>
                    <input
                      placeholder="$ 93,000"
                      className="border border-1 rounded-3 p-2 w-100 "
                      onChange={(e) => handleInputChange(e, "price")}
                    />
                  </div>
                </Col>
                <Col xl={4} xs={12}>
                  <div>
                    <label htmlFor="cars" className="text-muted">
                      Select listing
                    </label>
                    <select
                      name="cars"
                      id="cars"
                      className="text-muted border border-1 rounded-3 p-2 w-100 "
                      // onChange={(e) => handleInputChange(e, "selectedListing")}
                    >
                      <option value="Makeup Kit">Makeup Kit</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <h6 className="text-muted ">Upload Video</h6>
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 p-4"
                  style={{
                    border: "2px dotted rgba(205, 148, 3, 0.5)",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  <Col xs="auto">
                    {videoLoading ? (
                      <ClipLoader
                        color={"#ffcc35"}
                        loading={videoLoading}
                        size={100}
                      />
                    ) : (
                      <>
                        {videoPreview ? (
                          <video
                            id="video-preview"
                            controls
                            src={videoPreview}
                            muted
                            width="100%"
                            height="100%"
                            style={{
                              borderRadius: "8px",
                              display: isPlaying ? "block" : "none",
                            }}
                          />
                        ) : (
                          <img
                            src="./BannerFilesIcon.svg"
                            alt="files icon"
                            onClick={handleIconClickVideo}
                            style={{
                              cursor: "pointer",
                              marginTop: "50px",
                              width: "150%",
                            }}
                          />
                        )}
                        <input
                          type="file"
                          accept="video/*"
                          ref={videoFileInputRef}
                          style={{ display: "none" }}
                          onChange={(e) => handleFileSelected(e, "video")}
                        />
                      </>
                    )}
                  </Col>
                  <Col>
                    <p className="text-muted text-center fs-6 mt-2">
                      <span style={{ fontSize: "12px" }}>
                        Required dimensions 1080x1920 pixels
                      </span>
                    </p>
                  </Col>
                </div>
              </Col>
              <Col lg={6} xl={6} xs={12}>
                <h6 className="text-muted ">Video Thumbmail</h6>
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 p-4"
                  style={{
                    border: "2px dotted rgba(205, 148, 3, 0.5)",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  <Col xs="auto">
                    {thumbnailLoading ? (
                      <ClipLoader
                        color={"#ffcc35"}
                        loading={thumbnailLoading}
                        size={100}
                      />
                    ) : (
                      <>
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        ) : (
                          <img
                            src="./BannerFilesIcon.svg"
                            alt="files icon"
                            onClick={handleIconClickthumbnail}
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
                          ref={thumbnailFileInputRef}
                          style={{ display: "none" }}
                          onChange={(e) =>
                            handleFileSelected(e, "videoThumbnail")
                          }
                        />
                      </>
                    )}
                  </Col>
                  <Col>
                    <p className="text-muted text-center fs-6 mt-2">
                      <span style={{ fontSize: "12px" }}>
                        Required dimensions 150x150 pixels
                      </span>
                    </p>
                  </Col>
                </div>
              </Col>
              <p className="text-end mt-2">
                <img src="./spotlightbutton link.svg" alt="? icon" />
              </p>
            </Row>
            <Row>
              <Col>
                <label className="text-muted">Button Link</label>
                <input
                  placeholder="wa.me/+1 389XXXXXXXXXXX  |"
                  className="border border-1 rounded-3 p-2 w-100 "
                  onChange={(e) => handleInputChange(e, "link")}
                />
              </Col>
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
                    className="ms-2 w-100 rounded-3 p-2 border-0 text-white "
                    style={{ backgroundColor: "#596068" }}
                    onClick={handleShow}
                  >
                    Next
                  </button>
                </Col>
                <div>
                  <Modal show={show} onHide={handleClose} centered>
                    <ModalCard
                      onHide={handleClose}
                      data={formData}
                      uploadThumbnail={uploadThumbnail}
                      uploadVideo={uploadVideo}
                    />
                  </Modal>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateSpotlight;
