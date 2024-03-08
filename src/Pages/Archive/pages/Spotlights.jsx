import { useEffect, useState } from "react";
import { baseUrl } from "../../../Constants/Constants.js";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import SpotlightCard from "../components/SpotlightCard.jsx";
import { ClipLoader } from "react-spinners";

export const Spotlights = () => {
  const [spotlightData, setSpotlightData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSpotlights = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/advertisement/get-ads?type=Spotlight&isArchived=true`,
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
      } finally {
        setLoading(false);
      }
    };

    getSpotlights();
  }, []);

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
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "70vh",
          }}
        >
          <ClipLoader color={"#ffcc35"} loading={loading} size={200} />
        </div>
      ) : (
        <>
          {spotlightData.length > 0 ? (
            <>
              <Row>
                {spotlightData.map((spotlight) => (
                  <Col key={spotlight._id} xl={4}>
                    <SpotlightCard spotlight={spotlight} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "60vh",
                color: "#ACB6BE",
                fontSize: "1.25rem",
              }}
            >
              No Ads Available
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Spotlights;
