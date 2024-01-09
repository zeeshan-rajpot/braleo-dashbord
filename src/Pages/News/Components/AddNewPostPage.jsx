import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import TextEditor from "./TextEditor.jsx";
import ScheduleCard from "./ScheduleCard.jsx";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseUrl } from "../../../Constants/Constants.js";

export const AddNewPostPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Massive actions");
  const [displayData, setDisplayData] = useState("Filter");

  const [pisActive, psetIsActive] = useState(false);
  const [pselected, psetIsSelected] = useState("Paragraph");
  const [fisActive, fsetIsActive] = useState(false);
  const [fselected, fsetIsSelected] = useState("Font");
  const [szisActive, szsetIsActive] = useState(false);
  const [szselected, szsetIsSelected] = useState("12pt");
  const [errorOccurred, setErrorOccurred] = useState(false);
  // Define a function to handle dropdown item clicks
  const handleDropdownItemClick = (data) => {
    setIsSelected(data);
    setIsActive(false);

    // Update the displayed data based on the clicked item
    switch (data) {
      case "Archive":
        setDisplayData("");
        break;
      case "Disable":
        setDisplayData("");
        break;
      case "Delete":
        setDisplayData("");
        break;
      default:
        setDisplayData("");
        break;
    }
  };

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
  //------------------------- Modal---------------------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [postData, setPostData] = useState({
    postTitle: "",
    subtitle: "",
    content: "",
    postThumbnail: "",
    authorName: "",
    profilePic: "",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    keywords: keywords,
    scheduledAt: "2023-10-15T12:00:00Z", // Scheduled publication date and time in ISO format
    isActive: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const postThumbnailInputRef = useRef(null);
  const profilePicInputRef = useRef(null);

  const handleIconClick = (inputRef) => {
    // Trigger the file input when the icon is clicked
    inputRef.current.click();
  };

  const [postThumbnailPreview, setPostThumbnailPreview] = useState("");
  const [profilePicPreview, setProfilePicPreview] = useState("");

  const handlePostThumbnailSelected = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const uploadResponse = await axios.post(
          `${baseUrl}/api/upload/images?containerName=listing`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const imageUrl = uploadResponse.data.url;

        setPostData({
          ...postData,
          postThumbnail: imageUrl,
        });

        const reader = new FileReader();
        reader.onload = () => {
          setPostThumbnailPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error uploading post thumbnail:", error);
        toast.error("Error uploading post thumbnail");
      }
    }
  };

  const handleProfilePicSelected = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const uploadResponse = await axios.post(
          `${baseUrl}/api/upload/images?containerName=listing`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const imageUrl = uploadResponse.data.url;

        setPostData({
          ...postData,
          profilePic: imageUrl,
        });

        const reader = new FileReader();
        reader.onload = () => {
          setProfilePicPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error uploading profile pic:", error);
        toast.error("Error uploading profile pic");
      }
    }
  };

  const [postContent, setPostContent] = useState("");

  // Callback function to update content in AddNewPostPage
  const handleContentChange = (content) => {
    setPostContent(content);
  };

  const handlePublish = async () => {
    const postDataToSend = {
      ...postData,
      content: postContent, // Include the content in the post data
    };
    try {
      // Use axios to send the bannerData to your API endpoint
      const response = await axios.post(
        `${baseUrl}/api/post/new`,
        postDataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);
      console.log(postDataToSend);
    } catch (error) {
      console.log(postDataToSend);
      // Handle any errors from the API call
      console.error("Error posting Post data:", error);
      setErrorOccurred(true);
      toast.error(error.response.data.errors.msg);
    }
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
      <Row>
        <Col md={8}>
          {" "}
          <Row className="mt-3 ">
            <Col>
              <h2 className="text-muted ">Create new post</h2>
            </Col>
          </Row>
          <Row className="mt-3 ">
            <Col lg={12} xl={12} xs={12}>
              <label className="text-muted my-3">Post Title</label>
              <input
                placeholder="Immigration Paralegal Services"
                className="p-3 border border-1 rounded-3 p-2 w-100 "
                name="postTitle"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="mt-3 ">
            <Col lg={12} xl={12} xs={12}>
              <label className="text-muted my-3">Subtitle Post</label>
              <input
                placeholder="Immigration Paralegal Services"
                className="p-3 border border-1 rounded-3 p-2 w-100 "
                name="subtitle"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <label className="text-muted my-3">Write the content</label>
            <Row>
              <div
                className="text-center  w-100 h-100 rounded-4 ms-3 d-flex p-4"
                style={{ backgroundColor: "#596068" }}
              >
                <Col lg={6} xs={6} className="bg-white rounded-3 ">
                  <div className="dropdown">
                    <div
                      onClick={(e) => {
                        psetIsActive(!pisActive);
                      }}
                      className="dropdown-btn"
                    >
                      {pselected}
                      <span>
                        <img src="./dropdownicon.svg" alt="dropdown icon" />
                      </span>
                    </div>
                    <div
                      className="dropdown-content"
                      style={{ display: pisActive ? "block" : "none" }}
                    >
                      <div
                        onClick={(e) => {
                          psetIsSelected(e.target.textContent);
                          psetIsActive(!pisActive);
                        }}
                        className="item"
                      >
                        Archive
                      </div>
                      <div
                        className="item"
                        onClick={(e) => {
                          psetIsSelected(e.target.textContent);
                          psetIsActive(!pisActive);
                        }}
                      >
                        Disable
                      </div>
                      <div
                        className="item"
                        onClick={(e) => {
                          psetIsSelected(e.target.textContent);
                          psetIsActive(!pisActive);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} xs={3} className="bg-white rounded-3 me-2 ms-2">
                  <div className="dropdown">
                    <div
                      onClick={(e) => {
                        fsetIsActive(!fisActive);
                      }}
                      className="dropdown-btn"
                    >
                      {fselected}
                      <span>
                        <img src="./dropdownicon.svg" alt="dropdown icon" />
                      </span>
                    </div>
                    <div
                      className="dropdown-content"
                      style={{ display: fisActive ? "block" : "none" }}
                    >
                      <div
                        onClick={(e) => {
                          fsetIsSelected(e.target.textContent);
                          fsetIsActive(!fisActive);
                        }}
                        className="item"
                      >
                        Archive
                      </div>
                      <div
                        className="item"
                        onClick={(e) => {
                          fsetIsSelected(e.target.textContent);
                          fsetIsActive(!fisActive);
                        }}
                      >
                        Disable
                      </div>
                      <div
                        className="item"
                        onClick={(e) => {
                          fsetIsSelected(e.target.textContent);
                          fsetIsActive(!fisActive);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={2} xs={3} className="bg-white rounded-3">
                  <div className="dropdown">
                    <div
                      onClick={(e) => {
                        szsetIsActive(!szisActive);
                      }}
                      className="dropdown-btn"
                    >
                      {szselected}
                      <span>
                        <img src="./dropdownicon.svg" alt="dropdown icon" />
                      </span>
                    </div>
                    <div
                      className="dropdown-content"
                      style={{ display: szisActive ? "block" : "none" }}
                    >
                      <div
                        onClick={(e) => {
                          szsetIsSelected(e.target.textContent);
                          szsetIsActive(!szisActive);
                        }}
                        className="item"
                      >
                        Archive
                      </div>
                      <div
                        className="item"
                        onClick={(e) => {
                          szsetIsSelected(e.target.textContent);
                          szsetIsActive(!szisActive);
                        }}
                      >
                        Disable
                      </div>
                      <div
                        className="item"
                        onClick={(e) => {
                          szsetIsSelected(e.target.textContent);
                          szsetIsActive(!szisActive);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </Row>
          <Row className="mt-3">
            <Col xs={12} xl={12} lg={12}>
              <TextEditor onContentChange={handleContentChange} />
            </Col>
          </Row>
          <Row className="mt-5">
            <h6 className="text-muted mt-5 mt-md-0 pt-5 pb-3">
              Post Thumbnail
            </h6>
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
                  {postThumbnailPreview ? (
                    <img
                      src={postThumbnailPreview}
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
                      onClick={() => handleIconClick(postThumbnailInputRef)}
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
                    ref={postThumbnailInputRef}
                    style={{ display: "none" }}
                    onChange={handlePostThumbnailSelected}
                  />
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
          <Row className="mt-3 ">
            <Col lg={12} xl={12} xs={12}>
              <label className="text-muted my-3">Author's name</label>
              <input
                placeholder="Criss Germano"
                className="p-3 border border-1 rounded-3 p-2 w-100 "
                name="authorName"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xl={6} xs={12}>
              <h6 className="text-muted">Profile Pic</h6>
              <div
                className="d-flex flex-column justify-content-center align-items-center w-100 p-4"
                style={{
                  border: "2px dotted rgba(205, 148, 3, 0.5)",
                  height: "auto", // Set the height to auto
                  position: "relative", // Add position relative
                }}
              >
                <Col xs="auto">
                  {profilePicPreview ? (
                    <img
                      src={profilePicPreview}
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
                      onClick={() => handleIconClick(profilePicInputRef)}
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
                    ref={profilePicInputRef}
                    style={{ display: "none" }}
                    onChange={handleProfilePicSelected}
                  />
                </Col>
                <Col>
                  <p
                    className=" text-center  mt-2"
                    style={{ color: "#AB9E7D", fontSize: "16px" }}
                  >
                    Required dimensions
                    <br />
                    <span style={{ fontSize: "12px" }}>150x150 pixels</span>
                  </p>
                </Col>
              </div>
            </Col>
            <Col xl={6} xs={12}>
              <div className="w-100" style={{ height: "300px" }}>
                <h6 className="text-muted my-3 my-md-1">
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
                    className="d-flex flex-wrap mt-5"
                    style={{ height: "auto", width: "100%" }}
                  >
                    {keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="badge rounded-5 bg-warning p-2 me-2 text-center mt-3"
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
        </Col>
      </Row>
      <Row className="m-4">
        <Col md={5}></Col>
        <Col md={7} className=" h-100 d-flex mt-5 mt-md-0 ">
          <Col md={2}>
            <button
              variant="primary"
              onClick={handleShow}
              className="py-2 px-4 border-0 rounded-3 text-white w-100"
              style={{ backgroundColor: "#868E96" }}
            >
              Schedule
            </button>
          </Col>
          <div>
            <Modal
              style={{
                backgroundColor: "rgba(233, 236, 239, 0.19)",
                backdropFilter: "blur(14.5px)",
              }}
              show={show}
              onHide={handleClose}
              centered
            >
              <ScheduleCard onHide={handleClose} />
            </Modal>
          </div>
          <Col md={2}>
            <button
              className="ms-2 py-2 w-100 px-4  bg-dark text-white border-0 rounded-3 "
              style={{ backgroundColor: "#596068" }}
              onClick={handlePublish}
            >
              Publish
            </button>
          </Col>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};
export default AddNewPostPage;
