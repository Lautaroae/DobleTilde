import React from "react";
import Hero from "../layout/heroSection/Hero";
import Info from "../layout/infoSection/Info";
import Info2 from "../layout/infoSection/Info2";
import Info3 from "../layout/infoSection/Info3";
import Sercices from "../layout/services/Services";
import SliderData from "../layout/services/SliderData";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Info2 />
      <Sercices slides={SliderData} />
      <Info3 />
    </>
  );
};

export default Home;
