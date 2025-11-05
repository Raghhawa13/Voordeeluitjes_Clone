import React from "react";
import TopHeader from "./topHeader/TopHeader";
import BottomHeader from "./bottomHeader/bottomHeader";
import NavHeader from "./navHeaderbar/navHeader";

const Header = ({ HotelBtnSelect, SetHotelBtnSelected }) => {
  return (
    <div>
      <TopHeader />
      <BottomHeader
        HotelBtnSelect={HotelBtnSelect}
        SetHotelBtnSelected={SetHotelBtnSelected}
      />
      <NavHeader />
    </div>
  );
};

export default Header;
