import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex  mt-4 flex-wrap  p-2 shadow-sm justify-between">
        <div className="flex gap-2 items-center">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false"
            alt=""
            className="w-[50px] h-[50px] "
          />
          <h1 className="text-3xl">DocSlot</h1>
        </div>

        <div className="hidden gap-[200px] xl:flex">
          <div className="flex gap-20 top-5 items-center">
            <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              About Us
            </p>
            <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              Contact Us
            </p>
            <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              Doctors
            </p>
            <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              Services
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <p className=" flex text-lg items-center font-bold text-[#0E02F5] p-[3px] cursor-pointer  transition-all">
              Login | SignUp
            </p>
            <p className=" flex text-lg items-center font-bold text-[#0E02F5] p-[3px] cursor-pointer   transition-all">
              Start Free
            </p>
          </div>
        </div>
        {isOpen ? (
          <FaTimes
            size={30}
            onClick={() => setisOpen(!isOpen)}
            className="flex items-center transition-none xl:hidden"
          />
        ) : (
          <FaBars
            size={30}
            onClick={() => setisOpen(!isOpen)}
            className="flex items-center transition-all xl:hidden"
          />
        )}
      </div>
      <div
        className={`flex absolute transition-all top-full z-10  w-full h-[40vh] bg-white shadow-lg p-8  ${
          !isOpen ? "left-[-2100px]" : "right-[0px]"
        }  flex-col`}
      >
        <div className="flex flex-col items-center">
        <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              About Us
            </p>
            <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              Contact Us
            </p>
            <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              Doctors
            </p>
            <p className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer">
              Services
            </p>
        </div>
        <div className="flex flex-col  items-center">
          <p className=" flex text-lg items-center bg-[#0E02F5] p-[6px] cursor-pointer text-white rounded-md hover:bg-[#0E02F5] transition-all">
            Login | SignUp
          </p>
          <p className=" flex text-lg items-center bg-[#0E02F5] p-[6px] cursor-pointer text-white rounded-md hover:bg-[#0E02F5] transition-all">
            Start Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
