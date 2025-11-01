import React from "react";
import "./PopularHolidays.css";

const PopularHolidays = () => {
  return (
    <div>
      <div>
        <div className="holidays-container">
          <div className="holidays-section">
            <h2 className="holidays-title">Popular holidays</h2>
            {/* Section 1 */}
            {/* <div className="holiday-btn"> */}
            <div className="holidays-card">
              <div className="btn-container">
                <a href="" className="card-link">
                  Weekend away
                </a>
              </div>
              <div className="btn-container">
                <a href="" className="card-link">
                  Night away
                </a>
              </div>
              <div className="btn-container">
                <a href="" className="card-link">
                  Holiday parks
                </a>
              </div>
              <div className="btn-container">
                <a href="" className="card-link">
                  Last minute hotel deals
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopularHolidays;
