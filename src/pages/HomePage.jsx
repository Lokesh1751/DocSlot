import React from "react";
import HeaderSection from "../components/HeaderSection";
import MidHeaderSection from "../components/MidHeaderSection";
import AboutUs from "../components/AboutUs";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import Facilities from "../components/Facilities";
import Doctors from "../components/Doctors";
import Experience from "../components/Experience";
import Appointment from "../components/Appointment";

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
      <Appointment />
    </div>
  );
};

export default HomePage;
