import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { baseUrl } from "../../../../Constants/Constants";
import axios from "axios";

export const Delete = ({ onHide, id, type, onUpdate}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmation = async () => {
    try {
      const apiUrl = `${baseUrl}/api/advertisement/delete-ad/${id}?type=${type}`;

      const authToken = localStorage.getItem("token");

      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      console.log("Delete successful", response.data);
      setIsConfirmed(true);
      onUpdate();
    } catch (error) {
      console.error("Error deleting banner", error);
    }
  };

  return (
    <>
      {!isConfirmed && (
        <div className="bg-white rounded-4" style={{ width: "80%" }}>
          <div className="text-end p-3">
            <img src="./X sign.svg" alt="" role="button" onClick={onHide} />
          </div>
          <div className="text-center">
            <img src="./Deleteicon.svg" alt="" className="mt-5" />
            <p className="my-3">Are you sure you want to delete this item?</p>
            <Row className="d-flex justify-content-center align-items-center flex-column ">
              <Col xl={5}>
                <button
                  className="text-white p-3 rounded-3 border-0 w-100 mt-4"
                  style={{
                    backgroundColor: "#78828A",
                  }}
                  onClick={handleConfirmation}
                >
                  Yes, I do
                </button>
              </Col>
              <Col xl={5}>
                <button
                  className="p-3 rounded-3 border-0 w-100 mt-3 bg-transparent mb-5"
                  style={{
                    color: "#ACB6BE",
                  }}
                >
                  Cancel
                </button>
              </Col>
            </Row>
          </div>
        </div>
      )}
      {isConfirmed && (
        <div
          className="bg-white rounded-4 "
          style={{ height: "500px", width: "80%" }}
        >
          <div className="text-end p-3">
            <img src="./X sign.svg" alt="" onClick={onHide} role="button" />
          </div>
          <div className="text-center">
            <img src="./checkicon.svg" alt="" className="mt-5" />
            <p className="my-3">It's gone!</p>
            <p className="mt-3 mb-5">
              The items have been successfully deleted!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Delete;
