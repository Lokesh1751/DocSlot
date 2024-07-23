import React from "react";
import { FaAmbulance, FaLocationArrow, FaPhone } from "react-icons/fa";

function MidHeaderSection() {
  return (
    <div className="relative flex h-[170px] items-center justify-center m-4">
      <div className="absolute flex flex-col items-center gap-4 p-4 bg-[#0143BE] rounded-xl top-[-50px] w-full mx-auto sm:flex-row sm:gap-8 sm:p-6 sm:items-center sm:justify-center md:top-[-50px] xl:top-[-60px] xl:flex-row xl:gap-12 xl:p-8 xl:rounded-2xl xl:justify-evenly xl:w-[80%]">
        <div className="text-white flex flex-col items-center gap-2 sm:gap-4 xl:flex-col">
          <p className="flex gap-3 text-lg sm:text-xl items-center">
            <FaPhone
              size={40}
              className="bg-white text-black p-2 rounded-full border-2 border-black"
            />{" "}
            Emergency Call
          </p>
          <p className="text-sm sm:text-base">+946687876</p>
          <p className="text-sm sm:text-base">+955465446</p>
        </div>
        <div className="text-white flex flex-col items-center gap-2 sm:gap-4 xl:flex-col">
          <p className="flex gap-3 text-lg sm:text-xl items-center">
            <FaLocationArrow
              className="bg-white text-black p-2 border-2 border-black rounded-full"
              size={40}
            />{" "}
            Location
          </p>
          <p className="text-sm sm:text-base">
            BTM 1st Stage, Bannerghatta Road
          </p>
          <p className="text-sm sm:text-base">Bangalore, Karnataka</p>
        </div>
        <div className="text-white flex flex-col items-center gap-2 sm:gap-4 xl:flex-col">
          <p className="flex gap-3 text-lg sm:text-xl items-center">
            <FaAmbulance
              className="bg-white text-black border-2 border-black p-2 rounded-full"
              size={40}
            />{" "}
            Ambulance
          </p>
          <p className="text-sm sm:text-base">+887676724</p>
          <p className="text-sm sm:text-base">+955465446</p>
        </div>
      </div>
    </div>
  );
}

export default MidHeaderSection;
