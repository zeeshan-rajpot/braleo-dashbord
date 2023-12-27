import { Row, Col } from "react-bootstrap";
import "./PromotionCard.css";

export const PromotionCard = ({message}) => {
  return (
    <div className="border rounded-3 p-3 mt-4  " style={{ width: "100%" }}>
      <Row>
        <Col md={1}>
          {" "}
          <label className="custom-check">
            <input type="checkbox" />
            <span className="custom-checkmark"></span>
          </label>
        </Col>
        <Col md={10}>
          <div className="border-bottom d-flex pb-3">
            <img src="./braeloicon.svg" alt="braelo icon" />
            <p className="text-muted ms-2 ">{message.title}</p>
          </div>
          <p className="text-muted ">{message.description}</p>
          <p className="text-end py-0 text-secondary ">
            {" "}
            {new Date(message.createdAt).toLocaleString()}
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default PromotionCard;
