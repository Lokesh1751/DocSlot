import React from "react";
import { FaCheck } from "react-icons/fa";

const Expertise = () => {
  return (
    <div className="p-5">
      <p className="text-[#0143BE] font-bold">Speciality</p>
      <p className="font-bold text-3xl">Our Expertise</p>
      <div className="flex flex-col gap-10 xl:flex-row">
        <div className="flex flex-col  p-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-all">
          {" "}
          <FaCheck
            className="text-[#0143BE] border border-[#0143BE] rounded-lg p-2"
            size={40}
          />{" "}
          <p className="font-bold text-xl">Child Care</p>{" "}
          <p>
            Our dedicated pediatric team offers comprehensive care for children
            of all ages, ensuring their health and development are closely
            monitored and managed with the utmost care.
          </p>
        </div>
        <div className="flex flex-col  p-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-all">
          {" "}
          <FaCheck
            className="text-[#0143BE] border border-[#0143BE] rounded-lg p-2"
            size={40}
          />{" "}
          <p className="font-bold text-xl">More Stuff</p>{" "}
          <p>
            From routine check-ups to specialized treatments, we provide a wide
            range of medical services tailored to meet diverse healthcare needs
            efficiently and effectively.
          </p>
        </div>
        <div className="flex flex-col  p-2 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-all">
          {" "}
          <FaCheck
            className="text-[#0143BE] border border-[#0143BE] rounded-lg p-2"
            size={40}
          />{" "}
          <p className="font-bold text-xl">Enough Lab</p>
          <p>
            Our state-of-the-art laboratory services offer accurate diagnostics
            and testing, supporting our commitment to providing high-quality
            medical care with reliable results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
