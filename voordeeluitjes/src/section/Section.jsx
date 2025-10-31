import React from "react";
import Booking from "./BookingSearchPanel/Booking";
import HotelSection from "./HotelSection/HotelSection";
import Featured from "./FeaturedSection/Featured";

const Section = () => {
  return (
    <div>
      <Booking />
      <HotelSection />
      <Featured />
    </div>
  );
};

export default Section;
