import React from "react";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import MidHeaderSection from "../components/MidHeaderSection";
import AboutUs from "../components/AboutUs";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import Facilities from "../components/Facilities";
import Experience from "../components/Experience";
import Appointment from "../components/Appointment";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <MidHeaderSection />
      <AboutUs />
      <Expertise />
      <Services/>
      <Facilities/>
      <Experience/>
      <Appointment/>
    </div>
  );
};

export default HomePage;
