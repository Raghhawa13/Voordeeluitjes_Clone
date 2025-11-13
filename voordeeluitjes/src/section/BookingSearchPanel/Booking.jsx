import React, { useState, useEffect, useRef } from "react";
import { FaHotel } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import {
  MdOutlineMapsHomeWork,
  MdDateRange,
  MdFamilyRestroom,
} from "react-icons/md";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import "./booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = ({ HotelBtnSelect, SetHotelBtnSelected }) => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [numDays, setNumDays] = useState("No preference");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dayOptions = [
    "No preference",
    "2 days",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
    "7 days",
    "8 days",
  ];

  return (
    <div className="booking-container">
      <div className="booking-content">
        {/* --- Top Tabs (Hotels / Resorts) --- */}
        <div className="booking-hotel">
          <div
            className={`booking-tabs align-icon ${
              HotelBtnSelect === "hotel" ? "active" : ""
            }`}
            onClick={() => SetHotelBtnSelected("hotel")}
          >
            <FaHotel className="tab-icon" />
            <button className="tab-button">Hotels</button>
          </div>

          <div
            className={`booking-tabs align-icon ${
              HotelBtnSelect === "resort" ? "active" : ""
            }`}
            onClick={() => SetHotelBtnSelected("resort")}
          >
            <MdOutlineMapsHomeWork className="tab-icon" />
            <button className="tab-button">Resorts</button>
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
          {/* Arrival Date */}
          <div
            className="option-item-one align-icon option-item"
            onClick={() => setIsDatePickerOpen(true)}
          >
            <MdDateRange className="option-icon" />
            <button className="option-button">
              {arrivalDate
                ? arrivalDate.toLocaleDateString("en-GB")
                : "Select arrival date"}
            </button>

            {/* --- Inline DatePicker --- */}
            {isDatePickerOpen && (
              <div className="datepicker-container">
                <DatePicker
                  selected={arrivalDate}
                  onChange={(date) => {
                    setArrivalDate(date);
                    setIsDatePickerOpen(false);
                  }}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  inline
                  onClickOutside={() => setIsDatePickerOpen(false)}
                />

                {/* --- Label under calendar --- */}
                <p className="datepicker-label">Select arrival date</p>
              </div>
            )}
          </div>

          {/* Number of Days Dropdown */}
          <div
            className="option-item-two align-icon option-item"
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <CiTimer className="option-icon" />
            <button className="option-button">{numDays}</button>

            {isDropdownOpen && (
              <ul className="days-dropdown">
                {dayOptions.map((option, index) => (
                  <li
                    key={index}
                    className={numDays === option ? "active" : ""}
                    onClick={(e) => {
                      e.stopPropagation();
                      setNumDays(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Adults and Children */}
          <div className="option-item-three align-icon option-item">
            <MdFamilyRestroom className="option-icon" />
            <button className="option-button">Adults and children</button>
          </div>

          {/* Search Button */}
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
