import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./PinsPreviewModal.css";
// const images = [
//   "https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//   "https://images.unsplash.com/photo-1700514351733-992fc7b66306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1700496462947-f772a716de6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];
export const pinsModal = ({ Images }) => {
  return (
    <div>
      <Carousel
        controls={false}
        indicators={true}
        fade={false}
        interval={null}
        className="custom-carousel"
      >
        {Images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            {/* <img
              style={{ borderRadius: ' 12px 12px 0 0 ', height: '387px' }}
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className='d-block w-100'
            />
            <img src='./braeloqr-code 1.png' alt='' /> */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                style={{
                  borderRadius: "12px 12px 0 0",
                  height: "387px",
                  width: "610px",
                }}
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                // className='d-block w-100'
              />
              <img
                src="./braeloqr-code 1.png"
                alt=""
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  marginRight: "10px",
                  marginBottom: "10px",
                  maxWidth: "100px", // Adjust the size as needed
                  maxHeight: "100px", // Adjust the size as needed
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default pinsModal;
