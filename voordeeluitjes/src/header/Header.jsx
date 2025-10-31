import React from "react";
import TopHeader from "./topHeader/TopHeader";
import BottomHeader from "./bottomHeader/bottomHeader";
import NavHeader from "./navHeaderbar/navHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <NavHeader />
    </div>
  );
};

export default Header;
