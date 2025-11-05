import React from "react";
import "./bottomHeader.css";
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";

const BottomHeader = ({ HotelBtnSelect, SetHotelBtnSelected }) => {
  return (
    <nav className="bottomContainer">
      {/* Left Section: Logo & Navigation */}
      <div className="logo-details">
        <img src="/company.png" alt="Company Logo" className="logo" />
        <ul>
          <li>
            <FaHotel
              className={`logo-hotel ${
                HotelBtnSelect === "hotel" ? "active" : ""
              }`}
            />
            <a
              href="#"
              className={`hotel ${HotelBtnSelect === "hotel" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                SetHotelBtnSelected("hotel");
              }}
            >
              Hotels
            </a>
          </li>
          <li>
            <PiLineVerticalLight />
          </li>
          <li>
            <MdOutlineMapsHomeWork
              className={`${HotelBtnSelect === "resort" ? "active" : ""}`}
            />
            <a
              href="#"
              className={HotelBtnSelect === "resort" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                SetHotelBtnSelected("resort");
              }}
            >
              Resort
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section: Search, Favorites & Location */}
      <div className="search-details">
        <div className="search-form">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) =>
              e.target.classList.toggle("typed", e.target.value.trim() !== "")
            }
          />
          <CiSearch />
        </div>

        <div className="favorites">
          <GrFavorite />
          <span>Favorites</span>
        </div>

        <select name="location" id="nav-location">
          <option value="andhraPradesh" className="location-name">
            Andhra Pradesh
          </option>
          <option value="telangana" className="location-name">
            Telangana
          </option>
          <option value="karnataka" className="location-name">
            Karnataka
          </option>
        </select>
      </div>
    </nav>
  );
};

export default BottomHeader;
