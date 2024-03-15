import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../Components/SideBar";
import NaveBar from "../../Components/NaveBar.jsx";
import BannerTab from "./components/Bannertab.jsx";
import PinsCard from "./components/PinsCard.jsx";
import axios from "axios";
import { baseUrl } from "../../Constants/Constants.js";
import { ClipLoader } from "react-spinners";

const Pins = () => {
  const [pinData, setPinData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/advertisement/get-ads?type=PinAd`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPinData(response.data.advertisements);
      console.log(response.data.advertisements);
    } catch (error) {
      console.error("Error fetching banner data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async () => {
    await fetchData();
  };

  return (
    <>
      <Container fluid className="  h-100">
        <Row>
          <Col
            xs={2}
            md={2}
            className="text-center p-0"
            style={{ backgroundColor: "#495057", height: "100vh" }}
          >
            <SideBar activetabe="Pins" />
          </Col>
          <Col xs={10} md={10} style={{ overflowY: "auto", height: "100vh" }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab />
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
              <Row className="m-0 m-md-3">
                {pinData.map((pin) => (
                  <Col xl={4} key={pin._id}>
                    <PinsCard
                      // backgroundImage="./PinsImages/Rectangle 101.png"

                      ProfileImage="./PinsImages/Rectangle 23835.svg"
                      pin={pin}
                      onUpdate={handleUpdate}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pins;
