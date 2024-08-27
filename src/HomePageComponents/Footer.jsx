import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0143BE] text-white py-10 px-5 lg:px-20">
      <div className="flex justify-evenly gap-5 flex-wrap">
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2 flex justify-evenly flex-col">
            <li>
              <button className="hover:underline flex flex-col bg-transparent text-white border-none cursor-pointer">
                Emergency Call: <a href="tel:+1234567890">+9466878760</a>
                <a href="tel:+9876543210">+9554654463</a>
              </button>
            </li>
            <li>
              <button className="hover:underline flex flex-col bg-transparent text-white border-none cursor-pointer">
                Ambulance: <a href="tel:+1122334455">+887676724</a>
                <a href="tel:+5566778899">+955465446</a>
              </button>
            </li>
            <li>
              BTM 1st Stage, Bannerghatta Road <hr /> Bangalore, Karnataka
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/categoryinfo/Dermatology" className="hover:underline">
                Dermatology
              </Link>
            </li>
            <li>
              <Link to="/categoryinfo/Cardiology" className="hover:underline">
                Cardiology
              </Link>
            </li>
            <li>
              <Link
                to="/categoryinfo/Gastroenterology"
                className="hover:underline"
              >
                Gastroenterology
              </Link>
            </li>
            <li>
              <Link to="/categoryinfo/Neurology" className="hover:underline">
                Neurology
              </Link>
            </li>
            <li>
              <Link to="/categoryinfo/Oncology" className="hover:underline">
                Oncology
              </Link>
            </li>
            <li>
              <Link to="/categoryinfo/Pediatrics" className="hover:underline">
                Pediatrics
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-evenly items-center">
          <h1 className="text-white font-bold text-4xl">DocSlot</h1>
          <div className="bg-white p-6 rounded-full h-full w-full flex items-center justify-center mt-4">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false"
              alt="DocSlot Logo"
              className="w-[60px] h-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
