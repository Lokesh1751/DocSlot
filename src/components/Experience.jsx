import React from "react";
import { FaBed, FaUsers, FaUserMd, FaTrophy } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="flex  justify-center">
      <div className="flex flex-wrap  justify-between w-[80%] m-5 shadow-xl p-3 rounded-lg items-center">
        <div className="flex flex-col items-center">
          <FaBed size={50} className="text-[#0143BE] " />
          <p className="text-4xl font-bold text-[#0143BE] ">850+</p>
          <p className="text-lg font-bold">Patient Beds</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers size={50} className="text-[#0143BE] " />
          <p className="text-4xl font-bold text-[#0143BE] ">25000+</p>
          <p className="text-lg font-bold">Happy Patients</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUserMd size={50} className="text-[#0143BE] " />
          <p className="text-4xl font-bold text-[#0143BE] ">750+</p>
          <p className="text-lg font-bold">Doctors& Nurse</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTrophy size={50} className="text-[#0143BE] " />
          <p className="text-4xl font-bold text-[#0143BE] ">18+</p>
          <p className="text-lg font-bold">Year Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
