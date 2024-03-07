import { Row, Col } from "react-bootstrap";
import SpotlightCard from "./SpotlightCard";
import { useEffect, useState } from "react";
import { baseUrl } from "../../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const Spotlights = () => {
  const [spotlightData, setSpotlightData] = useState();
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpotlights();
  }, []);

  const handleUpdate = () => {
    getSpotlights();
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
          {spotlightData.map((spotlight) => (
            <Col key={spotlight._id} md={4}>
              <SpotlightCard spotlight={spotlight} onUpdate={handleUpdate} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Spotlights;
