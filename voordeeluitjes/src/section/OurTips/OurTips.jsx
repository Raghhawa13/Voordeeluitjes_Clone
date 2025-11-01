import React from "react";
import "./OurTips.css";

const OurTips = () => {
  return (
    <div className="OurTips-container">
      <div className="OurTips-section">
        <h2 className="OurTips-title">Our Tips</h2>

        {/* Scrolling Section Begins */}
        <div className="OurTips-scroll">
          {/* Section 1 */}
          <div className="OurTips-list">
            <div className="OurTips-card">
              <div className="OurTips-card-header">
                <div className="OurTips-card-image-wrapper">
                  <img
                    src="./Roompot.jpg"
                    alt="img"
                    className="OurTips-card-image"
                  />
                </div>
                <span className="OurTips-card-rating">8.6</span>
              </div>

              <div className="OurTips-card-info">
                <h4 className="OurTips-card-name">
                  Roompot Parkhotel Bad Arce
                </h4>
                <p className="OurTips-card-location">
                  Arcen, Limburg, Nederland
                </p>
                <div className="OurTips-card-description">
                  <p className="OurTips-card-benefit">
                    4-star hotel with luxurious rooms
                  </p>
                  <p className="OurTips-card-benefit">
                    Free entrance to Thermal Bath Arcen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="OurTips-list">
            <div className="OurTips-card">
              <div className="OurTips-card-header">
                <div className="OurTips-card-image-wrapper">
                  <img
                    src="./Roompot.jpg"
                    alt="img"
                    className="OurTips-card-image"
                  />
                </div>
                <span className="OurTips-card-rating">8.6</span>
              </div>

              <div className="OurTips-card-info">
                <h4 className="OurTips-card-name">
                  Roompot Parkhotel Bad Arce
                </h4>
                <p className="OurTips-card-location">
                  Arcen, Limburg, Nederland
                </p>
                <div className="OurTips-card-description">
                  <p className="OurTips-card-benefit">
                    4-star hotel with luxurious rooms
                  </p>
                  <p className="OurTips-card-benefit">
                    Free entrance to Thermal Bath Arcen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3  */}
          <div className="OurTips-list">
            <div className="OurTips-card">
              <div className="OurTips-card-header">
                <div className="OurTips-card-image-wrapper">
                  <img
                    src="./Roompot.jpg"
                    alt="img"
                    className="OurTips-card-image"
                  />
                </div>
                <span className="OurTips-card-rating">8.6</span>
              </div>

              <div className="OurTips-card-info">
                <h4 className="OurTips-card-name">
                  Roompot Parkhotel Bad Arce
                </h4>
                <p className="OurTips-card-location">
                  Arcen, Limburg, Nederland
                </p>
                <div className="OurTips-card-description">
                  <p className="OurTips-card-benefit">
                    4-star hotel with luxurious rooms
                  </p>
                  <p className="OurTips-card-benefit">
                    Free entrance to Thermal Bath Arcen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTips;
