import React from "react";

const HeaderSection = () => {
  return (
    <div className="bg-gradient-to-b p-4 flex flex-col-reverse justify-evenly elative from-[#AECAD4] to-white w-full xl:flex-row xl:p-6">
      <div className="flex gap-3 items-center justify-center flex-col xl:items-start xl:w-[40%]">
        <h1 className="text-gray-800 text-5xl font-attractive xl:text-7xl">
          Find & Search Your <br />{" "}
          <span className="text-[#0143BE] underline">Favourite</span> Doctor
        </h1>
        <h1 className="text-gray-800 font-bold">
          DocSlot is a user-friendly app for booking doctor appointments,
          allowing users to easily find healthcare providers and schedule
          visits. It helps manage medical appointments with reminders, ensuring
          timely access to care
        </h1>
        <button className="bg-[#0143BE] mb-5 text-white p-3 rounded-lg">
          Get appointment
        </button>
      </div>
      <img
        src="https://www.pngmart.com/files/21/Doctor-PNG-Transparent.png"
        alt=""
        className="w-[400px] xl:w-[700px]"
      />
    </div>
  );
};

export default HeaderSection;
