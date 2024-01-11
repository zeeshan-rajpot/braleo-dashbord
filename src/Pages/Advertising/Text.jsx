import { useEffect, useState } from "react";
import { Col, Row, Badge } from "react-bootstrap";
import TextCard from "./TextCard";
import axios from "axios";
import { baseUrl } from "../../Constants/Constants.js";
import { ClipLoader } from "react-spinners";

const Text = () => {
  const [textData, setTextData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
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
          {textData.map((text) => (
            <Col key={text._id} md={4}>
              <TextCard text={text} />
            </Col>
          ))}
        </Row>
      )}
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
