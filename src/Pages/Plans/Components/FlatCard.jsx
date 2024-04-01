import React from "react";
import { Row } from "react-bootstrap";
import "./faltCard.css";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../../const.js";

export const FlatCard = ({ plan, onUpdate }) => {
  const handleDelete = async () => {
    try {
      const apiUrl = `${baseurl}/api/plan/delete/${plan._id}`;

      const authToken = localStorage.getItem("token");

      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      console.log("Delete successful", response.data);
      toast.success("Delete successful");
      setTimeout(() => {
        onUpdate();
      }, [2000]);
    } catch (error) {
      console.error("Error deleting banner", error);
      toast.error("Error deleting banner", error);
    }
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
      <div
        className="mb-5 pb-5"
        style={{
          borderRadius: " 27.042px",
          border: "2.221px solid #CD9403",
          height: "449px",
          width: "100%",
          margin: "auto",
          background: `${plan.color}`,
        }}
      >
        <div className="d-flex justify-content-end p-2">
          <Link to={`/CreatenewPlan/${plan._id}`}>
            <Badge
              className="bg bg-secondary d-flex justify-content-center align-items-center "
              style={{
                borderRadius: "22px",
                marginLeft: "10px",
                width: "38px",
                height: "35px",
              }}
            >
              <img
                src="/Pen, Edit.svg"
                style={{ width: "80%", height: "80%", objectFit: "contain" }}
                alt="Icon 2"
              />
            </Badge>
          </Link>

          <Badge
            className="bg bg-danger d-flex justify-content-center align-items-center"
            style={{
              borderRadius: "22px",
              marginLeft: "10px",
              width: "38px",
              height: "35px",
            }}
            role="button"
            variant="primary"
            onClick={handleDelete}
          >
            <img
              src="./Trash, Delete, Bin.svg"
              style={{ width: "80%", height: "80%", objectFit: "contain" }}
              alt="Icon 3"
            />
          </Badge>
        </div>

        <div
          className="text-center w-75 m-auto mb-3 mt-5"
          style={{ borderBottom: "1px solid #EFD89D" }}
        >
          <p
            style={{
              color: "#282928",
              fontFamily: "AllRoundGothic-Bold",
              fontSize: "48.296px",
              fontWeight: "400",
            }}
          >
            {plan.title}
          </p>
          <p className="mb-4 mt-3 " style={{ fontSize: "27.04px" }}>
            <b> $ {plan.price} </b>
            <span
              className="ms-1"
              style={{
                color: "#616161",
                fontSize: "   15.21px",
              }}
            >
              /month
            </span>{" "}
          </p>
        </div>
        <div
          className=" w-75 m-auto mt-4"
          style={{ fontSize: "13.52px", fontWeight: "500" }}
        >
          <p>
            {plan.description.split("\n").map((line, index) => (
              <div key={index}>
                <img
                  src="./Darker Tick mark.svg"
                  alt="tick mark"
                  className="me-3"
                />
                <span>{line}</span>
              </div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
export default FlatCard;
