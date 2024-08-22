import React from "react";
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const PreNavbar = () => {
  return (
    <div className="p-1 hidden items-center flex-wrap justify-evenly text-[#0143BE] xl:flex">
      <div className="flex gap-5 mt-2  flex-wrap">
        <div className="flex gap-2">
          <FaPhone size={14} />
          <p>Call +946687876</p>
        </div>
        <div className="flex gap-2">
          <FaEnvelope size={14} />
          <p>docslot@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <FaLocationArrow size={14} />
          <p>Bangalore, Karnataka</p>
        </div>
      </div>
      <div className="flex gap-3">
        <FaFacebookF
          size={28}
          className="bg-[#0143BE] p-1 text-white cursor-pointer rounded-full"
        />
        <FaInstagram
          size={28}
          className="bg-[#0143BE] p-1 text-white cursor-pointer rounded-full"
        />
        <FaLinkedinIn
          size={28}
          className="bg-[#0143BE] p-1 text-white cursor-pointer rounded-full"
        />
        <FaTwitter
          size={28}
          className="bg-[#0143BE] p-1 text-white cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default PreNavbar;
