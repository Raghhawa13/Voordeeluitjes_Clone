import React from "react";

import "./HotelSection.css";
const HotelSection = () => {
  return (
    <div className="title-mainContainer">
      <div className="main-title-cards">
        <div className="title-card title-card-one">
          <div className="title-card-Shadow"></div>
          <div className="titlecard-postion">
            <h3 className="title">Advantage weeks!</h3>
            <p className="description">
              Take advantage of unique deals for a limited time! 2, 3, or 4 days
              including breakfast
              <b> from just €35 per person.</b>
            </p>
          </div>
        </div>
        <div className=" title-card title-card-two">
          <div className="title-card-Shadow"></div>
          <div className="titlecard-postion">
            <h3 className="title">Tastefully out and about: Wild & Wine</h3>
            <p className="description">
              Combine a hotel stay with a delicious game dinner
              <b> for just €84 per person.</b>
            </p>
          </div>
        </div>
        <div className=" title-card title-card-three">
          <div className="title-card-Shadow"></div>
          <div className="titlecard-postion">
            <h3 className="title">
              Spend the night among the Christmas lights
            </h3>
            <p className="description">
              Find your ideal hotel near the best Christmas markets. Starting
              <b> from €31 per person.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSection;
