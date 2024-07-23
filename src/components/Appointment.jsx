import React from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaTasks, FaUserMd, FaCalendarAlt } from "react-icons/fa";

const Appointment = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-full flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.6)), url(https://i0.wp.com/urologyspecialistsofohio.com/wp-content/uploads/2018/03/Section-4-BG-Surgery-and-Procedures-at-Springfield-Urology.jpg?ssl=1)`,
      }}
    >
      <div className="bg-white rounded-lg m-4 md:m-8 p-6 md:p-8 max-w-xl md:max-w-5xl w-full shadow-lg">
        <h1 className="text-[#0143BE] text-2xl md:text-3xl font-bold mb-4">
          Book your appointment
        </h1>
        <p className="text-gray-600 font-bold mb-6">
          We will confirm your appointment within 2 hours
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-16">
            <div className="flex gap-3 items-center">
              <FaUser size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaEnvelope size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhoneAlt size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaTasks size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="services" className="block text-gray-700 mb-2">
                  Services
                </label>
                <input
                  type="text"
                  id="services"
                  name="services"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter services you are interested in"
                />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaUserMd size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="doctor" className="block text-gray-700 mb-2">
                  Doctor
                </label>
                <input
                  type="text"
                  id="doctor"
                  name="doctor"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter the doctor's name"
                />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaCalendarAlt size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="date" className="block text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-[#0143BE] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
