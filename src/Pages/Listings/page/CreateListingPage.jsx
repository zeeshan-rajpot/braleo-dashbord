import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import EventsForm from "../components/EventsForm.jsx";
import PropertyForm from "../components/PropertyForm.jsx";
import ServiceForm from "../components/ServiceForm.jsx";
import VehicleForm from "../components/VehicleForm.jsx";
import WorkForm from "../components/WorkForm.jsx";

export const CreateListingPage = () => {
  const [listingType, setListingType] = useState("event");

  const handleListingTypeChange = (e) => {
    const newListingType = e.target.value;
    setListingType(newListingType);
  };

  return (
    <div>
      <Row>
        <Row>
          <h2 className="text-muted pt-4 ">Create new Listing</h2>
        </Row>
        <Row>
          <Row>
            <Col md={4} xs={12}>
              <div>
                <label className="text-muted">Select listing type</label>
                <select
                  className="border border-1 rounded-3 p-2 w-100"
                  name="listingType"
                  onChange={handleListingTypeChange}
                >
                  <option value="event">Events</option>
                  <option value="property">Property</option>
                  <option value="service">Service</option>
                  <option value="vehicle">Vehicle</option>
                  <option value="work">Work</option>
                </select>
              </div>
            </Col>
          </Row>
          {listingType === "event" && <EventsForm  />}
          {listingType === "property" && <PropertyForm />}
          {listingType === "service" && <ServiceForm />}
          {listingType === "vehicle" && <VehicleForm />}
          {listingType === "work" && <WorkForm />}
        </Row>
      </Row>
    </div>
  );
};
export default CreateListingPage;
