import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Delete from "../components/Delet Modal/Delete.jsx";
import "./Card.css";
import { Link } from "react-router-dom";

export const ListingCard = ({ listing, onUpdate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div
        className="border-1 d-flex border p-2 rounded-3  m-2"
        style={{ width: "100%" }}
      >
        <div className="main" style={{ width: "50%", height: "100%" }}>
          <div
            className="rounded-3 "
            style={{
              backgroundImage: `url(${
                listing.thumnail ||
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className="p-2 d-flex"
              style={{ width: "60%", height: "100%" }}
            >
              <img
                src="./eyeiconlistingcard.svg"
                style={{
                  width: "30px",
                }}
                alt="Icon 1"
              />
              <Link to="/EditListing">
                <img
                  src="./editiconlistingcard.svg"
                  style={{ width: "30px" }}
                  alt="Icon 2"
                  className="ms-1"
                />
              </Link>
              <img
                src="./delbuttonlistingcard.svg"
                style={{ width: "30px" }}
                variant="primary"
                onClick={handleShow}
                role="button"
                alt="Icon 3"
                className="ms-1"
              />
            </div>

            <p
              className="text-white ms-2"
              style={{ fontSize: "9px", marginTop: "100px" }}
            >
              User @{listing.uploaderName}
              <br /> Register ID {listing.user} <br />
              October 12, 2023 at 2:43 pm
            </p>
          </div>
        </div>
        <div className="ms-2" style={{ width: "50%", height: "100%" }}>
          <h5 className="text-muted mt-md-4" style={{ fontSize: "18px" }}>
            {listing.title}
          </h5>
          <h6 className="text-muted mt-md-4 fw-bold">$ {listing.price}</h6>
          <div className="d-flex mt-md-4 mt-3 w-100 d-block d-md-flex media">
            <div className="d-flex justify-content-center align-items-center ">
              <img
                src="./lisitingeye.svg"
                alt=""
                className="ms-1"
                style={{ width: "20px" }}
              />
              <span className="ms-1 text-nowrap" style={{ fontSize: "10px" }}>
                {listing.views} Views
              </span>
            </div>

            <div className="d-flex justify-content-center align-items-center ">
              <img
                src="./savelistingcard.svg"
                className="ms-1"
                alt=""
                style={{ width: "20px" }}
              />
              <span className="ms-1 text-nowrap" style={{ fontSize: "10px" }}>
                {listing.saves} Saves
              </span>
            </div>

            <div className="d-flex justify-content-center align-items-center ">
              <img
                src="./clickslistingcard.svg"
                alt=""
                className="ms-1"
                style={{ width: "20px" }}
              />
              <span className="ms-1 text-nowrap " style={{ fontSize: "10px" }}>
                {listing.clicks} Clicks
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} centered>
        <Delete onHide={handleClose} id={listing._id} onUpdate={onUpdate} />
      </Modal>
    </div>
  );
};
export default ListingCard;
