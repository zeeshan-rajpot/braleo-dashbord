import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Components/SideBar.jsx";
import NaveBar from "../../Components/NaveBar.jsx";
import BannerTab from "./BannerTab";
import ModalCard from "./Modal/NextModal.jsx";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CreateBanner = () => {
  const [keywordInput, setKeywordInput] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [errorOccurred, setErrorOccurred] = useState(false);

  const [bannerData, setBannerData] = useState({
    type: "Banner",
    title: "",
    link: "",
    description: "",
    keywords: [
      "Pub",
      "Restaurant",
      "Beauty Salon",
      "Bar",
      "DJ",
      "Coffeshop",
      "Bakery",
      "Language School",
      "Technical Course ",
      "Barbershop",
      "Party Room",
      "Studio",
    ],
    listingType: "Premium",
    thumbnailPicture: "",
  });

  const addKeyword = () => {
    if (keywordInput.trim() !== "") {
      setBannerData({
        ...bannerData,
        keywords: [...bannerData.keywords, keywordInput],
      });
      setKeywordInput("");
    }
  };

  const removeKeyword = (index) => {
    const updatedKeywords = [...bannerData.keywords];
    updatedKeywords.splice(index, 1);
    setBannerData({ ...bannerData, keywords: updatedKeywords });
  };

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    // Trigger the file input when the icon is clicked
    fileInputRef.current.click();
  };

  const handleFileSelected = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      try {
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append("image", selectedFile);

        // Use axios to upload the image to the image upload API
        const uploadResponse = await axios.post(
          "https://braelo.azurewebsites.net/api/upload/images?containerName=listing",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Assuming the image upload API returns a URL in the response
        const imageUrl = uploadResponse.data.url;

        // Update the bannerData with the uploaded image URL
        setBannerData({
          ...bannerData,
          thumbnailPicture: imageUrl,
        });
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image");
      }
    }
  };

  const handleNext = () => {
    handleShow();
  };

  //------------------------- Modal---------------------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <BannerTab activeBtn="newBanner" />
            </Row>
            <Row>
              <h4 className="mt-3 text-muted ">Create new banner</h4>
            </Row>
            <Row>
              <Col xl={6} xs={12}>
                <div>
                  <h6 className="text-muted">Ad title</h6>
                  <input
                    placeholder="Immigration Paralegal Services"
                    className="border border-1 rounded-3 p-2 w-100 "
                    value={bannerData.title}
                    onChange={(e) =>
                      setBannerData({ ...bannerData, title: e.target.value })
                    }
                    required
                  />
                </div>
              </Col>
              <Col xl={6} xs={12}>
                <div>
                  <h6 className="text-muted">Button Link</h6>
                  <input
                    placeholder="Immigration Paralegal Services"
                    className="border border-1 rounded-3 p-2 w-100 "
                    value={bannerData.link}
                    onChange={(e) =>
                      setBannerData({
                        ...bannerData,
                        link: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xl={6} xs={12}>
                <div className="w-100">
                  <h6 className="text-muted">Description</h6>
                  <textarea
                    style={{ height: "150px" }}
                    placeholder="Get to know Legally and Cos services..."
                    className="border border-1 rounded-3 p-2 w-100 h-70"
                    value={bannerData.description}
                    onChange={(e) =>
                      setBannerData({
                        ...bannerData,
                        description: e.target.value,
                      })
                    }
                    required
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
                        placeholder="Add more Keywords |"
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            addKeyword();
                          }
                        }}
                        required
                        className=" p-1 w-100"
                      />
                    </div>
                    <div
                      className="d-flex flex-wrap"
                      style={{ height: "auto", width: "100%" }}
                    >
                      {bannerData.keywords.map((keyword, index) => (
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
            <Row>
              <h6 className="text-muted ">Ad Thumbmail</h6>
              <Col xl={12} xs={12}>
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 p-4"
                  style={{
                    border: "2px dotted rgba(205, 148, 3, 0.5)",
                    height: "auto", // Set the height to auto
                    position: "relative", // Add position relative
                  }}
                >
                  <Col xs="auto">
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
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </Col>
                <div>
                  <Modal show={show} centered onHide={handleClose}>
                    <ModalCard onHide={handleClose} data={bannerData} />
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
export default CreateBanner;
