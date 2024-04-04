import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { baseurl } from "../../../../const";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Delete = ({ onHide, onUpdate, id }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const deleteData = {
    listings: [`${id}`],
    operation: "delete",
  };

  const handleConfirmation = async () => {
    const token = localStorage.getItem("token");
    try {
      // Make a DELETE request to your API endpoint with the userId and token
      await axios.put(
        `${baseurl}/api/administration/listing/modify`,
        deleteData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Set the state to true to show the confirmation message
      setIsConfirmed(true);
      setTimeout(() => {
        onUpdate();
      }, 1000);
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item");
    }
    console.log(deleteData);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {!isConfirmed && (
        <div className="bg-white rounded-4 respmob" style={{ width: "80%" }}>
          <div className="text-end p-3">
            <img src="./X sign.svg" alt="" role="button" onClick={onHide} />
          </div>
          <div className="text-center">
            <img src="./Deleteicon.svg" alt="" className="mt-5" />
            <p className="my-3">Are you sure you want to delete this item?</p>
            <Row className="d-flex justify-content-center align-items-center flex-column ">
              <Col xl={5} xs={5}>
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
          className="bg-white rounded-4 respmob"
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
