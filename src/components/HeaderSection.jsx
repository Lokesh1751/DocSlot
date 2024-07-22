import React from "react";
import headerpic from "../assets/headerpic.png";


const HeaderSection = () => {
  return (
    <div className="bg-gradient-to-t p-4 flex flex-col-reverse gap-20 relative from-[#AECAD4] to-white w-full xl:flex-row xl:p-6">
      <div className="flex gap-3 items-center justify-center flex-col xl:items-start xl:w-[40%]">
        <h1 className="text-gray-800 text-5xl font-attractive xl:text-7xl">
          Find & Search Your <br />{" "}
          <span className="text-[#0E02F5] underline">Favourite</span> Doctor
        </h1>
        <h1 className="text-gray-800 font-bold">
          DocSlot is a user-friendly app for booking doctor appointments,
          allowing users to easily find healthcare providers and schedule
          visits. It helps manage medical appointments with reminders, ensuring
          timely access to care
        </h1>
        <button className="bg-[#0E02F5] mb-5 text-white p-3 rounded-lg">
          Get appointment
        </button>
      </div>
      <img src={headerpic} alt="" className="w-[400px] xl:w-[700px]" />
    </div>
  );
};

export default HeaderSection;
