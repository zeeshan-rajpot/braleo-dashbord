import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ListingCards from "../components/ListingCards.jsx";
import axios from "axios";
import { baseurl } from "../../../const.js";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

export const ActiveListings = () => {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/api/administration/listing/get-all?page=1&status=active`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setListingData(response.data.listings);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching listing data", error);
      toast("Error fetching listing data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = () => {
    fetchData();
  };

  return (
    <div>
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
      {loading ? (
        <div
          className="d-flex justify-content-center   align-items-center  "
          style={{
            height: "70vh",
          }}
        >
          <ClipLoader color={"#ffcc35"} loading={loading} size={200} />
        </div>
      ) : (
        <Row>
          {listingData &&
            listingData.map((listing) => (
              <Col key={listing._id} md={6} className="mt-4">
                <ListingCards listing={listing} onUpdate={handleUpdate} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};
export default ActiveListings;
