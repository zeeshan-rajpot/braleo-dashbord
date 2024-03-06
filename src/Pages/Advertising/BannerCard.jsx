import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Delete from "./Modal/Delet Modal/Delete.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Constants/Constants.js";

const BannerCard = ({ banner, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [selectedBannerId, setSelectedBannerId] = useState(null);
  // console.log(banner._id);
  const handleClose = () => {
    setShow(false);
    setSelectedBannerId(null);
  };

  const handleShow = (bannerId) => {
    setShow(true);
    setSelectedBannerId(bannerId);
  };

  // const handleDelete = async (bannerId) => {
  //   try {
  //     const apiUrl = `${baseUrl}/api/advertisement/delete-ad/${bannerId}?type=Banner`;

  //     const authToken = localStorage.getItem("token");

  //     const response = await axios.delete(apiUrl, {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     });

  //     console.log("Delete successful", response.data);
  //     onUpdate();
  //   } catch (error) {
  //     console.error("Error deleting banner", error);
  //   }
  // };

  const handleUpdate = async () => {
    try {
      const apiUrl = `${baseUrl}/api/advertisement/update-ad/${banner._id}`;
      const response = await axios.put(apiUrl, banner, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Update Success", response.data);
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <>
      <Card
        className="text-left border-0 bannercard"
        style={{
          width: "100%",
          height: "90%",
          backgroundImage: `url(${
            banner.thumbnailPicture ||
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row className="my-2">
          <Col className="d-flex justify-content-end me-3">
            <Badge
              className="bg bg-secondary rounded-circle d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "22px",
                marginLeft: "",
                width: "38px",
                height: "35px",
              }}
            >
              <img
                src="/Group 1000004491.svg"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                alt="Icon 1"
              />
            </Badge>
            <Link to={`/editBanner/${banner._id}`}>
              <Badge
                className="bg bg-secondary d-flex justify-content-center align-items-center "
                style={{
                  borderRadius: "22px",
                  marginLeft: "10px",
                  width: "38px",
                  height: "35px",
                }}
              >
                <img
                  src="/Pen, Edit.svg"
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                  alt="Icon 2"
                  onClick={handleUpdate}
                />
              </Badge>
            </Link>

            <Badge
              className="bg bg-danger d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "22px",
                marginLeft: "10px",
                width: "38px",
                height: "35px",
              }}
              role="button"
              variant="primary"
              onClick={handleShow}
            >
              <img
                src="./Trash, Delete, Bin.svg"
                style={{ width: "80%", height: "80%", objectFit: "contain" }}
                alt="Icon 3"
                // onClick={() => handleDelete(banner._id)}
              />
            </Badge>
          </Col>
        </Row>
        <Card.Body>
          <Card.Title style={{ fontSize: "15px", color: "#fff" }}>
            {banner.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "15px" }}>
            <p className="my-0" style={{ width: "50%", color: "#fff" }}>
              {banner.description}
            </p>
            <button className="cardbtn rounded-4 p-2 border-0 mt-3">
              {banner.link || "Advertise Now"}
            </button>
            <p
              // className='my-0'
              style={{
                fontSize: "10px",
                textAlign: "right",
                color: "#fff",
                marginBottom: "15px",
              }}
            >
              Joined at 4:33pm by @crissgermano <br />
              Saturday 23 September 2023 - Florida Miami
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} centered>
        <Delete
          onHide={handleClose}
          bannerId={selectedBannerId}
          id={banner._id}
          type="Banner"
          onUpdate={onUpdate}
        />
      </Modal>
    </>
  );
};

export default BannerCard;
