import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
// import AdvTabs from './AdvTabs';
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import "./Bannertab.css";
const BannerTab = (props) => {
  console.log(props.activeBtn);
  const [activeTab, setActiveTab] = useState(props.activeBtn);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [showFilter, setShowFilter] = useState(true);

  const handleFilterClick = () => {
    setShowFilter(false);
  };

  return (
    <>
      <Container className="">
        <Row className="mt-4 border-bottom pb-3  ">
          {showFilter ? (
            <Col md={4} sm={3} className="mb-3">
              <h3 className="text-muted">
                <Link className="text-muted" to="/AdvertisingPage">
                  Advertising
                </Link>
              </h3>
            </Col>
          ) : (
            <Col md={4} sm={3} className="mb-3">
              <NavDropdown
                title="Filter by time"
                id="multi-list-dropdown"
                style={{ height: "" }}
                className="w-100 p-2 border text-muted fs-6 rounded-3 bg-white"
              >
                {/* Time filters */}
                <NavDropdown.Item>Last week</NavDropdown.Item>
                <NavDropdown.Item>Last 15 days</NavDropdown.Item>
                <NavDropdown.Item>Last 30 days</NavDropdown.Item>
                <NavDropdown.Item>Last 90 days</NavDropdown.Item>
                <NavDropdown.Item>Personalized</NavDropdown.Item>

                {/* Category filters */}
                <NavDropdown title="Filter by category" id="our-pick-dropdown">
                  <NavDropdown.Item href="#pick-Adds">Adds</NavDropdown.Item>
                  <NavDropdown.Item href="#pick-Spotlight">
                    Spotlight
                  </NavDropdown.Item>
                </NavDropdown>
                {/* User filters */}
                <NavDropdown title="Filter by user" id="our-pick-2-dropdown">
                  <NavDropdown.Item href="#pick2-Ali Dev">
                    Ali Dev
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#pick2-Criss Germano">
                    Criss Germano
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Location filters */}
                <NavDropdown
                  title="Filter by location"
                  id="our-pick-3-dropdown"
                >
                  <NavDropdown.Item href="#pick3-2021">
                    Grand Canyon, USA
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#pick3-2022">
                    Tokyo, Japan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#pick3-2023">
                    Mount Everest, Nepal/Tibet
                  </NavDropdown.Item>
                </NavDropdown>
                {/* State filters */}
                <NavDropdown title="Filter by state" id="our-pick-4-dropdown">
                  <NavDropdown.Item href="#pick4-2021">
                    California
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#pick4-2022">
                    Queensland
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#pick4-2022">Sicily</NavDropdown.Item>
                </NavDropdown>
                {/* County filters */}
                <NavDropdown title="Filter by county" id="our-pick-5-dropdown">
                  <NavDropdown.Item href="#pick5-2021">
                    United States
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#pick5-2022">
                    Australia
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#pick5-2022">
                    Germany
                  </NavDropdown.Item>
                </NavDropdown>

                <Row className="my-5">
                  <Col xl={3}></Col>
                  <Col xl={4} xs={6}>
                    <button
                      className="border-0 w-100 p-2 rounded-3 me-5"
                      style={{ backgroundColor: "#E0E3E7", color: "#868E96" }}
                    >
                      Clean Filter
                    </button>
                  </Col>
                  <Col xl={4} xs={6}>
                    <button
                      className="border-0 w-100 p-2 rounded-3 text-white me-4"
                      style={{ backgroundColor: "#596068" }}
                    >
                      Clean Filter
                    </button>
                  </Col>
                </Row>
              </NavDropdown>
            </Col>
          )}
          <Col md={2} xs={4} className="text-end">
            <Badge className="bg bg-secondary" sm={3}>
              <img
                src="/fillter.svg"
                style={{ padding: "10px" }}
                onClick={handleFilterClick}
              />
            </Badge>
          </Col>
          <Col md={2} xs={8}>
            <Link className="text-muted " to="/createBanner">
              <h3
                className={`d-flex align-items-center justify-content-center fs-6 rounded-2 ${
                  activeTab === "newBanner" ? "active-tab" : ""
                }`}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor:
                    activeTab === "newBanner" ? "#CD9403" : "#868E9633",
                  color: activeTab === "newBanner" ? "white" : "#75818D",
                  cursor: "pointer",
                }}
                onClick={() => handleTabClick("newBanner")}
              >
                New Banner
              </h3>
            </Link>
          </Col>
          <Col md={2} xs={6}>
            <Link className="text-muted" to="/createSpotlight">
              <h3
                className={`d-flex py-2 py-md-0 align-items-center mt-2 mt-md-0 justify-content-center fs-6 rounded-2 ${
                  activeTab === "newSpotlight" ? "active-tab" : ""
                }`}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor:
                    activeTab === "newSpotlight" ? "#CD9403" : "#868E9633",
                  color: activeTab === "newSpotlight" ? "white" : "#75818D",
                  cursor: "pointer",
                }}
                onClick={() => handleTabClick("newSpotlight")}
              >
                {" "}
                New Spotlight
              </h3>
            </Link>
          </Col>
          <Col md={2} xs={6}>
            <Link className="text-muted" to="/createTextAdd">
              <h3
                className={`d-flex align-items-center mt-2 mt-md-0  justify-content-center fs-6 rounded-2 ${
                  activeTab === "newAdd" ? "active-tab" : ""
                }`}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor:
                    activeTab === "newAdd" ? "#CD9403" : "#868E9633",
                  color: activeTab === "newAdd" ? "white" : "#75818D",
                  cursor: "pointer",
                }}
                onClick={() => handleTabClick("newAdd")}
              >
                {" "}
                Text Add
              </h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BannerTab;
