import React from "react";
import Booking from "./BookingSearchPanel/Booking";
import HotelSection from "./HotelSection/HotelSection";
import Featured from "./FeaturedSection/Featured";
import PopularDestination from "./PopularDestination/PopularDestination";
import PopularThemes from "./PopularThemes/PopularThemes";
import PopularHolidays from "./PopularHolidays/PopularHolidays";
import OurTips from "./OurTips/OurTips";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import HelpingSection from "./HelpingSection/HelpingSection";

const Section = ({ HotelBtnSelect, SetHotelBtnSelected }) => {
  return (
    <div>
      <Booking
        HotelBtnSelect={HotelBtnSelect}
        SetHotelBtnSelected={SetHotelBtnSelected}
      />
      <HotelSection />
      <Featured />
      <PopularDestination />
      <PopularThemes />
      <PopularHolidays />
      <OurTips />
      <WhyChooseUs />
      <HelpingSection />
    </div>
  );
};

export default Section;
