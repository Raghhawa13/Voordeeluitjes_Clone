import React from "react";
import "./PopularThemes.css";
const PopularThemes = () => {
  return (
    <div>
      <div className="theams-container">
        <div className="theams-section">
          <h2 className="theams-title">Theams Destinations</h2>
          {/* Section 1 */}
          <div className="theams-card">
            <div className="theams-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Theams destination"
                className="theams-image"
              />
              <div className="theams-city">Hotels Nederland</div>
            </div>

            <div className="theams-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Theams destination"
                className="theams-image"
              />
              <div className="theams-city">Hotels Nederland</div>
            </div>

            <div className="theams-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Theams destination"
                className="theams-image"
              />
              <div className="theams-city">Hotels Nederland</div>
            </div>

            <div className="theams-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Theams destination"
                className="theams-image"
              />
              <div className="theams-city">Hotels Nederland</div>
            </div>

            <div className="theams-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Theams destination"
                className="theams-image"
              />
              <div className="theams-city">Hotels Nederland</div>
            </div>

            <div className="theams-image-wrapper">
              <img
                src="./Nederland.jpg"
                alt="Theams destination"
                className="theams-image"
              />
              <div className="theams-city">Hotels Nederland</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularThemes;
