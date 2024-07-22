import React from "react";
import { FaUserMd, FaAmbulance, FaRegClock } from "react-icons/fa";
import Aboutus from "../assets/aboutus.png";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/004/449/845/small_2x/abstract-geometric-medical-cross-shape-medicine-and-science-concept-background-medicine-medical-health-cross-healthcare-decoration-for-flyers-poster-web-banner-and-card-illustration-vector.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col  p-4 xl:p-8 mt-60 xl:mt-0"
    >
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-lg font-bold text-[#0E02F5]">About Us</p>
        <h1 className="text-black text-2xl sm:text-3xl xl:text-4xl font-bold my-4">
          Welcome to DocSlot Hospital We Have
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 xl:gap-8">
          <div className="flex items-start gap-4 sm:gap-6 xl:gap-8">
            <FaUserMd size={40} className="text-blue-600" />
            <div className="flex-1">
              <p className="text-xl font-bold">Certified Doctors</p>
              <p className="text-base sm:text-lg xl:text-xl mt-2">
                DocSlot connects you with a network of certified doctors who are
                verified for their qualifications and expertise. Each doctor
                undergoes a rigorous verification process to ensure they meet the
                highest standards of medical practice, giving you peace of mind when
                scheduling appointments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 sm:gap-6 xl:gap-8">
            <FaAmbulance size={40} className="text-red-600" />
            <div className="flex-1">
              <p className="text-xl font-bold">Emergency 24 Hours</p>
              <p className="text-base sm:text-lg xl:text-xl mt-2">
                Healthcare doesn’t stop, and neither do we. DocSlot offers 24-hour
                availability, allowing you to book appointments or consult with
                doctors at any time of day or night. Whether it’s a late-night
                consultation or early-morning appointment, DocSlot ensures you get
                the care you need when you need it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 sm:gap-6 xl:gap-8">
            <FaRegClock size={40} className="text-green-600" />
            <div className="flex-1">
              <p className="text-xl font-bold">Modern Technology</p>
              <p className="text-base sm:text-lg xl:text-xl mt-2">
                Real-Time Availability: Check doctor availability in real-time and
                book appointments instantly. Telemedicine: Consult with doctors via
                video calls from the comfort of your home. Reminders and
                Notifications: Automated reminders and notifications help you keep
                track of your appointments and follow-ups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
