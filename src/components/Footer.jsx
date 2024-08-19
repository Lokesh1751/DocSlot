import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0143BE] text-white py-10 px-5 lg:px-20">
      <div className="flex justify-evenly gap-5 flex-wrap">
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <button className="hover:underline bg-transparent text-white border-none cursor-pointer">
                About us
              </button>
            </li>
            <li>
              <button className="hover:underline bg-transparent text-white border-none cursor-pointer">
                Blog
              </button>
            </li>
            <li>
              <button className="hover:underline bg-transparent text-white border-none cursor-pointer">
                Our Expertise
              </button>
            </li>
            <li>
              <button className="hover:underline bg-transparent text-white border-none cursor-pointer">
                Faq
              </button>
            </li>
            <li>
              <Link to="/alldoctors" className="hover:underline">
                Doctors
              </Link>
            </li>
            <li>
              <button className="hover:underline bg-transparent text-white border-none cursor-pointer">
                Contact us
              </button>
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

        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Feedback</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full p-2 rounded-md bg-blue-100 text-blue-900 outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                className="w-full p-2 rounded-md bg-blue-100 text-blue-900 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 rounded-md bg-white text-[#0143BE] font-bold hover:bg-gray-200 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
