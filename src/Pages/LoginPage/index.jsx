import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { baseUrl } from "../../Constants/Constants";
import axios from "axios";

export const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      const apiUrl = `${baseUrl}/api/administration/login`;
      const response = await axios.post(
        apiUrl,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Correctly access the token from the response
      const token = response.data.token;

      // Save the token to local storage
      localStorage.setItem("token", token);

      console.log("Login successful:", response.data.token);

      // Reset the form after successful login
      setEmail("");
      setPassword("");

      navigateTo("/Dashboard");
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error during login:", error);
    }
  };
  return (
    <Row>
      <Col
        xl={6}
        className="d-flex justify-content-center align-items-center"
        style={{ height: "98vh", overflowY: " hidden" }}
      >
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center w-75">
            <p
              className="mt-5 mt-md-0"
              style={{
                fontWeight: "700",
                fontSize: "25.1px",
                color: "#232F30",
              }}
            >
              Braelo Power admin
            </p>
            <div className="w-100 mt-5 mt-md-4">
              <input
                name="email"
                value={email}
                onChange={handleInputChange}
                type="text"
                placeholder="crissgermano@gmail.com |"
                className="w-100 border p-2 rounded-3"
              />
            </div>
            <div className="mt-5 mt-md-4 w-100">
              <input
                name="password"
                value={password}
                onChange={handleInputChange}
                type="password"
                placeholder="******** |"
                className="w-100 border p-2 rounded-3"
              />
            </div>
            <div className="mt-5 mt-md-4 w-100">
              <button
                className="bg-black text-white rounded-3 p-3 w-100 border-0"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </Col>

      <Col xl={6} style={{ height: "98vh", overflowY: " hidden" }}>
        <div
          className="d-flex justify-content-end align-items-center w-100 mt-5 mt-md-0"
          style={{
            maxWidth: "100%",
            order: "0",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderRadius: "40px 0 0 40px",
              backgroundColor: "#FFCC35",
              padding: "0 0 0 35px" /* Adjust the padding as needed */,
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                borderRadius: "40px 0 0 40px",
                backgroundColor: "#EE9E03",
                overflowY: "hidden",
                padding: "0 0 0 35px" /* Adjust the padding as needed */,
              }}
            >
              <div
                style={{
                  borderRadius: "40px 0 0 40px",
                  overflowY: "hidden",
                }}
              >
                <img
                  src="./image/Group 1000005200.png"
                  alt=""
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;
