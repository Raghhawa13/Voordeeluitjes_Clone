import React from "react";
import { FaHotel } from "react-icons/fa6";
import {
  MdOutlineMapsHomeWork,
  MdDateRange,
  MdFamilyRestroom,
} from "react-icons/md";
import { FaSearch, FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import "./booking.css";

const Booking = ({ HotelBtnSelect, SetHotelBtnSelected }) => {
  return (
    <div className="booking-container">
      <div className="booking-content">
        {/* --- Top Tabs (Hotels / Resorts) --- */}
        <div className="booking-hotel">
          <div
            className={`booking-tabs booking-one align-icon ${
              HotelBtnSelect === "hotel" ? "active" : ""
            }`}
            onClick={() => SetHotelBtnSelected("hotel")}
          >
            <FaHotel className="tab-icon icon-one" />
            <button className="tab-button btn-one ">Hotels</button>
          </div>
          <div
            className={`booking-tabs booking-two align-icon ${
              HotelBtnSelect === "resort" ? "active" : ""
            }`}
            onClick={() => SetHotelBtnSelected("resort")}
          >
            <MdOutlineMapsHomeWork className="tab-icon icon-two" />
            <button className="tab-button btn-two">Resorts</button>
          </div>
        </div>

        {/* --- Search Bar --- */}
        <div className="search-bar align-icon">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Destination, hotel, theme"
            className="search-input"
          />
        </div>

        {/* --- Booking Options --- */}
        <div className="booking-options align-icon">
          <div className="option-item-one align-icon option-item">
            <MdDateRange className="option-icon" />
            <button className="option-button">Arrival date</button>
          </div>

          <div className="option-item-two align-icon option-item">
            <FaRegCalendarAlt className="option-icon" />
            <button className="option-button">Number of days</button>
          </div>

          <div className="option-item-three align-icon option-item">
            <MdFamilyRestroom className="option-icon" />
            <button className="option-button">Adults and children</button>
          </div>

          <div className="option-item-four search-btn align-icon option-item">
            <button
              className="search-button"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  HotelBtnSelect === "hotel"
                    ? "Searching Hotels"
                    : "Searching Resorts"
                );
              }}
            >
              {HotelBtnSelect === "hotel" ? "Search Hotels" : "Search Resorts"}
            </button>

            <FaArrowRight className="arrow-icon" />
          </div>
        </div>
        {/* --- Info Section --- */}
        <div className="booking-info">
          <span className="info-text">
            More than 7,500 offers from hotels and holiday parks at home and
            abroad.
          </span>
          <a
            href="https://www.google.com/maps"
            className="map-link"
            target="_blank"
          >
            Search on the map
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
