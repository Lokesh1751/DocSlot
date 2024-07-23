import React from "react";
import { FaBrain, FaSyringe, FaHeartbeat, FaEye } from "react-icons/fa";

const Services = () => {
  return (
    <div className="p-5">
      <p className="text-[#0143BE] font-bold">Services</p>
      <p className="font-bold text-3xl mb-6">Our Hospital Services</p>
      <div className="grid grid-cols-1 xl:p-10 gap-10 sm:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col p-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-all">
          <FaBrain className="text-[#F4C6B0]" size={40} />
          <p className="font-bold text-xl mt-2">Mental Health Service</p>
          <p>
            Our mental health services provide comprehensive support and
            treatment for various psychological conditions, ensuring holistic
            well-being and mental stability for our patients.
          </p>
        </div>
        <div className="flex flex-col p-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-all">
          <FaEye className="text-[#90DAF8]" size={40} />
          <p className="font-bold text-xl mt-2">Eye Diseases Service</p>
          <p>
            Our eye care services offer advanced treatments for a wide range of
            eye diseases, helping you maintain optimal vision and eye health.
          </p>
        </div>
        <div className="flex flex-col p-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-all">
          <FaSyringe className="text-[#C1D3ED] " size={40} />
          <p className="font-bold text-xl mt-2">Vaccination Service</p>
          <p>
            We provide comprehensive vaccination services to protect against
            various infectious diseases, ensuring the safety and health of our
            community.
          </p>
        </div>
        <div className="flex flex-col p-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-all">
          <FaHeartbeat className="text-red-600 " size={40} />
          <p className="font-bold text-xl mt-2">Cardiology Service</p>
          <p>
            Our cardiology services specialize in the diagnosis and treatment of
            heart conditions, offering state-of-the-art care for your
            cardiovascular health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
