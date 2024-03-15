import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardUser from "../Components/InternalUserCard.jsx";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { baseurl } from "../../../const.js";

export const Internal = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = () => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    // Fetch user data from the API using Axios with the token in the header
    axios
      .get(`${baseurl}/api/administration//get-all-internal-users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data.data);

        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  });

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
        <CardUser userData={userData} onUpdate={handleUpdate}/>
      )}
    </div>
  );
};
export default Internal;
