import React from "react";
import "./PopularDestination.css";
const PopularDestination = () => {
  return (
    <div>
      <div className="popular-container">
        <div className="popular-section">
          <h2 className="popular-title">Popular Destinations</h2>
          {/* Section 1 */}
          <div className="popular-card">
            <div className="popular-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Popular destination"
                className="popular-image"
              />
              <div className="popular-city">Hotels Nederland</div>
            </div>
            <div className="popular-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Popular destination"
                className="popular-image"
              />
              <div className="popular-city">Hotels Nederland</div>
            </div>
            <div className="popular-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Popular destination"
                className="popular-image"
              />
              <div className="popular-city">Hotels Nederland</div>
            </div>
            <div className="popular-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Popular destination"
                className="popular-image"
              />
              <div className="popular-city">Hotels Nederland</div>
            </div>
            <div className="popular-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Popular destination"
                className="popular-image"
              />
              <div className="popular-city">Hotels Nederland</div>
            </div>
            <div className="popular-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Popular destination"
                className="popular-image"
              />
              <div className="popular-city">Hotels Nederland</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
