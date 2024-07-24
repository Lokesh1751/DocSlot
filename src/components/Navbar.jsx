import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex  p-4 shadow-lg justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false"
            alt=""
            className="w-[50px] h-[50px]"
          />
          <h1 className="text-3xl">DocSlot</h1>
        </div>

        <div className="hidden xl:flex gap-20 items-center">
          <div className="flex gap-10">
            <p className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer">
              About Us
            </p>
            <p className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer">
              Contact Us
            </p>
            <p className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer">
              Doctors
            </p>
            <p className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer">
              Services
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="/Login">
              <p className="text-lg font-bold text-[#0143BE] cursor-pointer transition-all">
                Login | SignUp
              </p>
            </Link>
            <p className="text-lg font-bold text-[#0143BE] cursor-pointer transition-all">
              Start Free
            </p>
          </div>
        </div>

        {isOpen ? (
          <FaTimes
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden cursor-pointer"
          />
        ) : (
          <FaBars
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden cursor-pointer"
          />
        )}
      </div>
      <div
        className={`absolute transition-all duration-500 z-10 w-full bg-white shadow-lg p-8 xl:hidden ${
          isOpen ? "top-full" : "top-[-1000px]"
        } flex flex-col`}
      >
        <div className="flex flex-col items-center gap-4">
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
        <div className="flex flex-col items-center gap-4 mt-4">
          <Link to="/Login">
            <p className="text-lg font-bold text-white bg-[#0E02F5] p-2 rounded-md cursor-pointer hover:bg-[#0c02d5] transition-all">
              Login | SignUp
            </p>
          </Link>
          <p className="text-lg font-bold text-white bg-[#0E02F5] p-2 rounded-md cursor-pointer hover:bg-[#0c02d5] transition-all">
            Start Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
