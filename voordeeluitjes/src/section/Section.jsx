import React from "react";
import Booking from "./BookingSearchPanel/Booking";
import HotelSection from "./HotelSection/HotelSection";
import Featured from "./FeaturedSection/Featured";
import PopularDestination from "./PopularDestination/PopularDestination";
import PopularThemes from "./PopularThemes/PopularThemes";

const Section = () => {
  return (
    <div>
      <Booking />
      <HotelSection />
      <Featured />
      <PopularDestination />
      <PopularThemes />
    </div>
  );
};

export default Section;
