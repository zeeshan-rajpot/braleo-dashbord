import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AdvicesCard from "../Components/AdvicesCard.jsx";
import { baseUrl } from "../../../Constants/Constants.js";
import axios from "axios";
export const Advices = () => {
  const [advices, setAdvices] = useState([]);
  useEffect(() => {
    getAdvices();
  }, []);
  const getAdvices = () => {
    axios
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
      });
  };

  return (
    <div>
      <Row className="d-flex">
        {advices.map((advice) => (
          <Col lg={4} xl={4} xs={12} key={advice.id}>
            <AdvicesCard advice={advice} />
          </Col>
        ))}

        {/* <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col>
        <Col lg={4} xl={4} xs={12}>
          <AdvicesCard />
        </Col> */}
      </Row>
    </div>
  );
};
export default Advices;
