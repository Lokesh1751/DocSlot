import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0143BE] text-white py-10 px-5 lg:px-20">
      <div className="flex justify-evenly gap-5 flex-wrap  ">
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Expertise
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Faq
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Dental Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cardiology
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hijama Therapy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Massage Therapy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ambulance Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Medicine
              </a>
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
