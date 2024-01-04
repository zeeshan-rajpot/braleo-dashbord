import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AdsCard from "../components/AdsCard.jsx";
import axios from "axios";
import { baseUrl } from "../../../Constants/Constants.js";

export const Ads = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const getBannerAds = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/advertisement/get-ads?type=Banner&isArchived=true`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setBannerData(response.data.advertisements);
      } catch (error) {
        console.error("Error fetching banner data", error);
      }
    };

    getBannerAds();
  }, []);

  return (
    <div>
      <Row>
        {bannerData.map((banner) => (
          <Col key={banner._id} xl={4}>
            <AdsCard banner={banner} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Ads;
