import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardUser from "../Components/InternalUserCard.jsx";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { baseurl } from "../../../const.js";

export const Internal = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/api/administration//get-all-internal-users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserData(response?.data?.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleUpdate = () => {
    fetchUserData();
  };

  return (
    <div>
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
        <CardUser userData={userData} onUpdate={handleUpdate} />
      )}
    </div>
  );
};
export default Internal;
