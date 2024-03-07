import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AdvicesCard from "../Components/AdvicesCard.jsx";
import { baseUrl } from "../../../Constants/Constants.js";
import { ClipLoader } from "react-spinners";
import axios from "axios";

export const Advices = () => {
  const [advices, setAdvices] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAdvices = async () => {
    await axios
      .get(`${baseUrl}/api/advicenotification/get?type=Advice`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Response: ", response);
        setAdvices(response.data.adviceNotifications);
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAdvices();
  }, []);

  const handleUpdate = () => {
    getAdvices();
  };

  return (
    <div>
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
        <Row className="d-flex">
          {advices.map((advice) => (
            <Col lg={4} xl={4} xs={12} key={advice.id}>
              <AdvicesCard advice={advice} onUpdate={handleUpdate} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
export default Advices;
