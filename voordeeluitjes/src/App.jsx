import React, { useState } from "react";
import Header from "./header/Header";
import Section from "./section/section";
import Footer from "./footer/footer";

const App = () => {
  const [HotelBtnSelect, SetHotelBtnSelected] = useState("hotel");
  return (
    <div>
      <Header
        HotelBtnSelect={HotelBtnSelect}
        SetHotelBtnSelected={SetHotelBtnSelected}
      />
      <Section
        HotelBtnSelect={HotelBtnSelect}
        SetHotelBtnSelected={SetHotelBtnSelected}
      />
      <Footer />
    </div>
  );
};

export default App;
