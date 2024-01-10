import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardUser from "../Components/InternalUserCard.jsx";

import axios from "axios";
import { baseurl } from "../../../const.js";
export const Internal = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
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
      });
  }, []);
  return (
    <div>
      <CardUser userData={userData} />
    </div>
  );
};
export default Internal;
