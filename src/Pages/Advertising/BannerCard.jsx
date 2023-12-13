import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Delete from "./Modal/Delet Modal/Delete.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const BannerCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for deleting the banner
      const apiUrl = "YOUR_API_ENDPOINT";

      // Replace 'YOUR_AUTH_TOKEN' with the actual authorization token
      const authToken = "YOUR_AUTH_TOKEN";

      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      // Handle success (e.g., show a success message, update UI, etc.)
      console.log("Delete successful", response.data);

      // Close the modal or handle any other UI updates as needed
      handleClose();
    } catch (error) {
      // Handle errors (e.g., show an error message, log the error, etc.)
      console.error("Error deleting banner", error);

      // Close the modal or handle any other UI updates as needed
      handleClose();
    }
  };

  return (
    <>
      <Card
        className="text-left border-0 bannercard"
        style={{ width: "100%", height: "90%" }}
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
            <Link to="/editBanner">
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
                onClick={handleDelete}
              />
            </Badge>
          </Col>
        </Row>
        <Card.Body>
          <Card.Title style={{ fontSize: "15px", color: "#fff" }}>
            Advertise your company at Braelo!
          </Card.Title>
          <Card.Text style={{ fontSize: "15px" }}>
            <p className="my-0" style={{ width: "50%", color: "#fff" }}>
              Check out our plans and boost your sales!
            </p>
            <button className="cardbtn rounded-4 p-2 border-0 mt-3">
              Advertise Now
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
        <Delete onHide={handleClose} />
      </Modal>
    </>
  );
};

export default BannerCard;
