import React, { useEffect, useState } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import PromotionCard from "../Components/PromotionCard.jsx";
import DisableCard from "../Components/DisableCard.jsx";
import "../Components/PromotionCard.css";
import { baseUrl } from "../../../Constants/Constants.js";
import { ClipLoader } from "react-spinners";
import axios from "axios";

export const MessageSent = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Massive actions");
  const [displayData, setDisplayData] = useState([]);
  const [isActivee, setIsActivee] = useState(false);
  const [selectedd, setIsSelectedd] = useState("Filter by time");
  const [loading, setLoading] = useState(true);

  const handleDropdownItemClick = (data) => {
    setIsSelected(data);
    setIsActive(false);

    // Update the displayed data based on the clicked item
    switch (data) {
      case "Archive":
        setDisplayData([]);
        break;
      case "Disable":
        setDisplayData([<DisableCard />]);
        break;
      case "Delete":
        setDisplayData([]);
        break;
      default:
        setDisplayData([]);
        break;
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    axios
      .get(
        `${baseUrl}/api/advicenotification/get?type=Notification&enabled=true`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setDisplayData(response.data.adviceNotifications);
        console.log("Response", response);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <Row className="mt-3">
            <Col>
              <h2 className="text-muted">Messages sent</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3} xl={3} xs={12}>
              <div className="dropdown">
                <div
                  onClick={(e) => {
                    setIsActivee(!isActivee);
                  }}
                  className="dropdown-btn"
                >
                  {selectedd}
                  <span>
                    <img src="./dropdownicon.svg" alt="dropdown icon" />
                  </span>
                </div>
                <div
                  className="dropdown-content"
                  style={{ display: isActivee ? "block" : "none" }}
                >
                  <div
                    onClick={(e) => {
                      setIsSelectedd(e.target.textContent);
                      setIsActivee(!isActivee);
                    }}
                    className="item"
                  >
                    Archive
                  </div>
                  <div
                    className="item"
                    onClick={(e) => {
                      setIsSelectedd(e.target.textContent);
                      setIsActivee(!isActivee);
                    }}
                  >
                    Disable
                  </div>
                  <div
                    className="item"
                    onClick={(e) => {
                      setIsSelectedd(e.target.textContent);
                      setIsActivee(!isActivee);
                    }}
                  >
                    Delete
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} xl={3} xs={12}>
              <div className="dropdown">
                <div
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  className="dropdown-btn"
                >
                  {selected}
                  <span>
                    <img src="./dropdownicon.svg" alt="dropdown icon" />
                  </span>
                </div>
                <div
                  className="dropdown-content"
                  style={{ display: isActive ? "block" : "none" }}
                >
                  <div
                    onClick={() => handleDropdownItemClick("Archive")}
                    className="item"
                  >
                    Archive
                  </div>
                  <div
                    onClick={() => handleDropdownItemClick("Disable")}
                    className="item"
                  >
                    Disable
                  </div>
                  <div
                    onClick={() => handleDropdownItemClick("Delete")}
                    className="item"
                  >
                    Delete
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xl={4} xs={12}>
              <InputGroup className="mb-3 mt-2">
                <FormControl
                  type="search"
                  placeholder="Search message"
                  className="border rounded-3 text-muted"
                  style={{ padding: "10px " }}
                />
                <img
                  src="./Seacrh.svg"
                  alt="Search"
                  style={{
                    transform: "translateX(-30px )",
                    width: "20px",
                    zIndex: "5",
                  }}
                />
              </InputGroup>
            </Col>
            <Col md={2} xl={2} xs={12}>
              <button className="border rounded-3 p-2 bg-dark w-100 mt-2 text-white">
                Filter
              </button>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
      {loading ? (
        <div
          className="d-flex justify-content-center   align-items-center  "
          style={{
            height: "70vh",
          }}
        >
          <ClipLoader color={"#ffcc35"} loading={loading} size={200} />
        </div>
      ) : (
        <Row>
          {displayData.map((message) => (
            <Col md={6} xl={6} xs={12} key={message._id}>
              <PromotionCard message={message} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MessageSent;
