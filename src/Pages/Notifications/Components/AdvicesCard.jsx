import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Delete from "../../Advertising/Modal/Delet Modal/Delete.jsx";

export const AdvicesCard = ({ advice }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className=" mt-5">
        <div
          className="text-center w-100 rounded-3"
          style={{ backgroundColor: "#868E96", height: "100%" }}
        >
          <Row>
            <div className="text-end my-2">
              <img
                src="./editadvice.svg"
                alt="edit Icon"
                style={{ width: "30px" }}
              />
              <img
                variant="primary"
                onClick={handleShow}
                src="./deladvice.svg"
                alt="del Icon"
                role="button"
                style={{ width: "30px" }}
                className="me-2 ms-2"
              />
            </div>
          </Row>
          <h5 className="text-white">{advice.title}</h5>
          <p className="text-white  p-2 pb-4">{advice.description}</p>
        </div>
      </div>
      <Modal show={show}>
        <Delete onHide={handleClose} />
      </Modal>
    </div>
  );
};
export default AdvicesCard;
