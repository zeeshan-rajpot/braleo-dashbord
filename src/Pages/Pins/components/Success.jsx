import React from "react";

export const Success = ({ onHide }) => {
  return (
    <div>
      <div className="bg-white h-100 w-75 rounded-3">
        <div className="text-end p-3">
          <img
            src="./X sign.svg"
            alt="exit"
            style={{ cursor: "pointer" }}
            onClick={onHide}
          />
        </div>
        <div className="text-center">
          <img src="./checkicon.svg" alt="Checkicon" className="mt-3" />
          <h2 className="mt-3 w-100 text-black fw-bold fs-5">Wonderful!</h2>
          <p className="mt-3 pb-5 w-100 text-black">
            Your pin has been
            <br /> successfully registered!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Success;
