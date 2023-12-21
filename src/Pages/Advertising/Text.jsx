import { useEffect, useState } from "react";
import { Col, Row, Badge } from "react-bootstrap";
import TextCard from "./TextCard";
import axios from "axios";
import { baseUrl } from "../../Constants/Constants.js";

const Text = () => {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/advertisement/get-ads?type=TextAd`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setTextData(response.data.advertisements);
      } catch (error) {
        console.error("Error fetching banner data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Row>
        {textData.map((text) => (
          <Col key={text._id} md={4}>
            <TextCard text={text} />
          </Col>
        ))}
        {/* <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>

        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>

        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>

        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col>

        <Col md={4}>
          <TextCard />
        </Col>
        <Col md={4}>
          <TextCard />
        </Col> */}
      </Row>
    </>
  );
};

export default Text;

// {
//   bannerData.map((banner) => (
//     <Col key={banner._id} md={4}>
//       <BannerCard banner={banner} />
//     </Col>
//   ));
// }
