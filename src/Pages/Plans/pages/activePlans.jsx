import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FlatCard from "../Components/FlatCard.jsx";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { baseUrl } from "../../../Constants/Constants.js";

export const activePlans = () => {
  const [planData, setPlanData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/plan/get-all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setPlanData(response.data.plans);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching banner data", error);
      toast.error("Error fetching banner data");
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
      {" "}
      <div className="mt-5">
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
            {planData &&
              planData.map((plan) => (
                <Col key={plan._id} md={4}>
                  <FlatCard plan={plan} onUpdate={handleUpdate} />
                </Col>
              ))}
          </Row>
        )}
      </div>
    </>
  );
};
export default activePlans;
