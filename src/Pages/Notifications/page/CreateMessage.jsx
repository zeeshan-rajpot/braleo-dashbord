import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../../../Constants/Constants";
import { toast, ToastContainer } from "react-toastify";
import "./CreateMessage.css";
import {
  FormControlLabel,
  Radio,
  makeStyles,
  RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles({
  grayRadio: {
    color: "#E6E8EC", // Change this color to your desired gray color
  },
});
function CustomRadioLabel({ backgroundColor, width, height }) {
  return (
    <div
      className="rounded-3"
      style={{
        backgroundColor,
        width,
        height,
      }}
    ></div>
  );
}

export const CreateMessage = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("red"); // Set the default selected value

  const handleRadioChange = (event) => {
    const selectedColor = event.target.value;
  
    // Update the selected value in the state
    setSelectedValue(selectedColor);
  
    // Update the color property in adviceData
    setAdviceData((prevData) => ({
      ...prevData,
      color: selectedColor,
    }));
  };

  const [adviceData, setAdviceData] = useState({
    type: "Advice",
    title: "",
    description: "",
    color: selectedValue,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAdviceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "description" || name === "title") {
      setAdvicePreview((prevPreview) => ({
        ...prevPreview,
        [name]: value,
      }));
    }
  };

  const [advicePreview, setAdvicePreview] = useState({
    title: "",
    message: "",
    titlePlaceholder: "Your account is temporarily suspended",
    descriptionPlaceholder:
      "It appears that you have violated one of the platforms rules To find out more please contact support",
  });

  const handlePublish = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/advicenotification/new`,
        adviceData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Request", response);
      console.log(adviceData);
      toast.success("Advice Posted Successfully");
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response.data.errors.msg);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Row>
        <Col md={8}>
          {" "}
          <Row className="mt-3 ">
            <Col>
              <h2 className="text-muted ">Create new advice</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} xl={12} xs={12}>
              <label className="text-muted my-3">Advice Title</label>
              <input
                placeholder={advicePreview.titlePlaceholder}
                className="p-3 border border-1 rounded-3 p-2 w-100 "
                name="title"
                onChange={handleChange}
              />
            </Col>
            <Col lg={8} xl={8} xs={12}></Col>
          </Row>
          <Row>
            <Col lg={8} xl={12} xs={12}>
              <label className="text-muted mt-3">Description</label>
              <textarea
                placeholder={advicePreview.descriptionPlaceholder}
                className="border border-1 rounded-3 p-2 w-100 h-100"
                name="description"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="my-4">
            <label className="text-muted mt-5">Select Color</label>
            <Col lg={1} xl={6} xs={4} className="mt-4">
              <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                <Row>
                  <Col className="mt-2">
                    <FormControlLabel
                      value="red"
                      control={<Radio className={classes.grayRadio} />}
                      label={
                        <CustomRadioLabel
                          backgroundColor="red"
                          width="71.63px"
                          height="53.73px"
                        />
                      }
                    />
                  </Col>
                  <Col className="mt-2">
                    <FormControlLabel
                      value="green"
                      control={<Radio className={classes.grayRadio} />}
                      label={
                        <CustomRadioLabel
                          backgroundColor="green"
                          width="71.63px"
                          height="53.73px"
                        />
                      }
                    />{" "}
                  </Col>
                  <Col className="mt-2">
                    <FormControlLabel
                      value="yellow"
                      control={<Radio className={classes.grayRadio} />}
                      label={
                        <CustomRadioLabel
                          backgroundColor="yellow"
                          width="71.63px"
                          height="53.73px"
                        />
                      }
                    />
                  </Col>{" "}
                </Row>
              </RadioGroup>
            </Col>
          </Row>
          <Row>
            <h4 className="text-muted">Advice Preview </h4>
            <Row>
              <div
                className="text-center  w-100 h-100 rounded-4 ms-3"
                style={{ backgroundColor: "#868E96" }}
              >
                <h5 className="mt-4 text-white">
                  {adviceData.title === ""
                    ? advicePreview.titlePlaceholder
                    : advicePreview.title}
                </h5>
                <p className="my-4 text-white">
                  {adviceData.description === ""
                    ? advicePreview.descriptionPlaceholder
                    : advicePreview.description}
                </p>
              </div>
            </Row>
          </Row>
        </Col>
        <Col md={4} className="mt-auto h-100">
          <div className="m-4">
            <button className="py-2 px-4 border-0 rounded-3 text-muted">
              Cancel
            </button>
            <button
              className="ms-2 py-2  px-4  bg-dark text-white border-0 rounded-3 "
              onClick={handlePublish}
            >
              Publish
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default CreateMessage;
