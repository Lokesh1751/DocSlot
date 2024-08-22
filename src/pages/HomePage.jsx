import React from "react";
import HeaderSection from "../HomePageComponents/HeaderSection";
import MidHeaderSection from "../HomePageComponents/MidHeaderSection";
import AboutUs from "../HomePageComponents/AboutUs";
import Expertise from "../HomePageComponents/Expertise";
import Services from "../HomePageComponents/Services";
import Facilities from "../HomePageComponents/Facilities";
import Doctors from "../HomePageComponents/Doctors";
import Experience from "../HomePageComponents/Experience";
const HomePage = () => {
  return (
    <div>
      <HeaderSection />
      <MidHeaderSection />
      <AboutUs />
      <Expertise />
      <Services />
      <Facilities />
      <Doctors />
      <Experience />
    </div>
  );
};

export default HomePage;
