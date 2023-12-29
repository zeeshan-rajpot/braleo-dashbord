import { Row, Col } from "react-bootstrap";
import SpotlightCard from "./SpotlightCard";
import { useEffect, useState } from "react";
import { baseUrl } from "../../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"; // Import axios here

const Spotlights = () => {
  const [spotlightData, setSpotlightData] = useState();

  useEffect(() => {
    const getSpotlights = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/advertisement/get-ads?type=Spotlight`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setSpotlightData(response.data.advertisements);
      } catch (error) {
        console.error("Error fetching spotlight data", error);
        toast.error("Error While Completing Request");
      }
    };

    getSpotlights(); // Corrected function name
  }, []);

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
        {spotlightData &&
          spotlightData.map((spotlight) => (
            <Col key={spotlight._id} md={4}>
              <SpotlightCard spotlight={spotlight} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Spotlights;
