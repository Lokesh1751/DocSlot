import React from "react";
import PreNavbar from "../components/PreNavbar";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import MidHeaderSection from "../components/MidHeaderSection";
import AboutUs from "../components/AboutUs";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import Facilities from "../components/Facilities";
import Doctors from "../components/Doctors";
import Experience from "../components/Experience";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <PreNavbar />
      <Navbar />
      <HeaderSection />
      <MidHeaderSection />
      <AboutUs />
      <Expertise />
      <Services />
      <Facilities />
      <Doctors />
      <Experience />
      <Appointment />
      <Footer />
    </div>
  );
};

export default HomePage;
