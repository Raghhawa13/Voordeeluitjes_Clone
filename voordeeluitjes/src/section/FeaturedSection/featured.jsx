import React from "react";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured-container">
      <div className="featured-section">
        <h2 className="featured-title">Featured for you</h2>
        {/* Scrolling-Section-Beghings */}

        <div className="featured-scroll">
          {/* Sectio-1 */}
          <div className="featured-list">
            <div className="featured-card">
              <div className="card-header">
                <div className="card-image-wrapper">
                  <img src="./Roompot.jpg" alt="img" className="card-image" />
                </div>
                <span className="card-rating">8.6</span>
              </div>

              <div className="card-info">
                <h4 className="card-name">Roompot Parkhotel Bad Arce</h4>
                <p className="card-location">Arcen, Limburg, Nederland</p>
                <div className="card-description">
                  <p className="card-benefit">
                    4-star hotel with luxurious rooms
                  </p>
                  <p className="card-benefit">
                    Free entrance to Thermal Bath Arcen
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Sectio-1 */}
          <div className="featured-list">
            <div className="featured-card">
              <div className="card-header">
                <div className="card-image-wrapper">
                  <img src="./Roompot.jpg" alt="img" className="card-image" />
                </div>
                <span className="card-rating">8.6</span>
              </div>

              <div className="card-info">
                <h4 className="card-name">Roompot Parkhotel Bad Arce</h4>
                <p className="card-location">Arcen, Limburg, Nederland</p>
                <div className="card-description">
                  <p className="card-benefit">
                    4-star hotel with luxurious rooms
                  </p>
                  <p className="card-benefit">
                    Free entrance to Thermal Bath Arcen
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-list">
            <div className="featured-card">
              <div className="card-header">
                <div className="card-image-wrapper">
                  <img src="./Roompot.jpg" alt="img" className="card-image" />
                </div>
                <span className="card-rating">8.6</span>
              </div>

              <div className="card-info">
                <h4 className="card-name">Roompot Parkhotel Bad Arce</h4>
                <p className="card-location">Arcen, Limburg, Nederland</p>
                <div className="card-description">
                  <p className="card-benefit">
                    4-star hotel with luxurious rooms
                  </p>
                  <p className="card-benefit">
                    Free entrance to Thermal Bath Arcen
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Sectio-1 */}
          <div className="featured-list">
            <div className="featured-card">
              <div className="card-header">
                <div className="card-image-wrapper">
                  <img src="./Roompot.jpg" alt="img" className="card-image" />
                </div>
                <span className="card-rating">8.6</span>
              </div>

              <div className="card-info">
                <h4 className="card-name">Roompot Parkhotel Bad Arce</h4>
                <p className="card-location">Arcen, Limburg, Nederland</p>
                <div className="card-description">
                  <p className="card-benefit">
                    4-star hotel with luxurious rooms
                  </p>
                  <p className="card-benefit">
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

export default Featured;
