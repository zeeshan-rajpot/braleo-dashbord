import React from "react";
import { Row } from "react-bootstrap";
import "./faltCard.css";
import { Link } from "react-router-dom";

export const FlatCard = ({ plan }) => {
  return (
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
      <div className="text-end p-3">
        <Link to={`/EditPlans/${plan._id}`}>
          <img src="/cards/Group 1000004914 (1).svg" alt="" />
        </Link>
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
  );
};
export default FlatCard;
