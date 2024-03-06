import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import "./bannercard.css";
import BannerCard from "./BannerCard";
import { baseUrl } from "../../Constants/Constants.js";
import { ClipLoader } from "react-spinners";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/advertisement/get-ads?type=Banner`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setBannerData(response.data.advertisements);
      } catch (error) {
        console.error("Error fetching banner data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    await fetchData(); // You need to define fetchData function outside of useEffect
  };
  console.log(bannerData);

  return (
    <>
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
        <Row className="mt-3">
          {bannerData.map((banner) => (
            <Col key={banner._id} md={4}>
              <BannerCard banner={banner} onUpdate={handleUpdate} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Banner;
