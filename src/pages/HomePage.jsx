import React from "react";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import MidHeaderSection from "../components/MidHeaderSection";
import AboutUs from "../components/AboutUs";
import Expertise from "../components/Expertise";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <MidHeaderSection />
      <AboutUs />
      <Expertise />
    </div>
  );
};

export default HomePage;
