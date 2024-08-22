import React, { useState } from "react";

const Facilities = () => {
  const [facility, setFacility] = useState("Intro");
  const [bgImage, setBgimage] = useState(
    "https://st4.depositphotos.com/2065849/22871/i/450/depositphotos_228714268-stock-photo-medical-equipment-background-group-health.jpg"
  );
  const [heading, setHeading] = useState("Hospital Introduction");
  const [desc, setDesc] = useState(
    "Welcome to DocSlot Hospital, where we provide top-notch medical services and compassionate care. Our certified doctors offer specialized treatments, including mental health, cardiology, eye care, and vaccinations."
  );

  const handlechange = (url, des, title, fac) => {
    setBgimage(url);
    setDesc(des);
    setHeading(title);
    setFacility(fac);
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${bgImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white flx justify-center items-center shadow-lg"
    >
      <div className="xl:w-[50%] p-[70px]">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="text-2xl font-bold">{desc}</p>
      </div>
      <div className="bg-white flex h-auto flex-wrap items-center  justify-evenly text-black">
        <p
          className={`${
            facility === "Intro"
              ? "bg-[#0143BE] text-white font-bold p-2 rounded-lg   cursor-pointer "
              : "text-lg text-[#0143BE] font-bold cursor-pointer"
          }`}
          onClick={() =>
            handlechange(
              "https://st4.depositphotos.com/2065849/22871/i/450/depositphotos_228714268-stock-photo-medical-equipment-background-group-health.jpg",
              "Welcome to DocSlot Hospital, where we provide top-notch medical services and compassionate care. Our certified doctors offer specialized treatments, including mental health, cardiology, eye care, and vaccinations",
              "Hospital Introduction",
              "Intro"
            )
          }
        >
          Hospital Introduction
        </p>
        <p
          className={`${
            facility === "Pharma"
              ? "bg-[#0143BE] text-white font-bold p-2 rounded-lg cursor-pointer"
              : "text-lg text-[#0143BE] font-bold cursor-pointer"
          }`}
          onClick={() =>
            handlechange(
              "https://www.kistmcth.edu.np/uploads/service/1693973243.jpg",
              "Our pharmacy provides a comprehensive range of medications and health products. Our knowledgeable pharmacists are always available to offer advice and support, ensuring you have access to everything you need for your treatment.",
              "Pharmacy",
              "Pharma"
            )
          }
        >
          Pharmacy
        </p>
        <p
          className={`${
            facility === "Research"
              ? "bg-[#0143BE] text-white font-bold p-2 rounded-lg cursor-pointer"
              : "text-lg text-[#0143BE] font-bold  cursor-pointer"
          }`}
          onClick={() =>
            handlechange(
              "https://academyhealth.org/sites/default/files/styles/featured_image_body/public/blog-post/2021-06/shutterstock_1197119914_0.jpg?itok=EQbSy2ay",
              "Our research and laboratory services are at the forefront of medical science. We provide cutting-edge diagnostics and treatment options with our state-of-the-art labs equipped with the latest technology for accurate and efficient results.",
              "Research & Lab",
              "Research"
            )
          }
        >
          Research & Lab
        </p>
        <p
          className={`${
            facility === "CCU"
              ? "bg-[#0143BE] text-white font-bold p-2 rounded-lg cursor-pointer"
              : "text-lg text-[#0143BE] font-bold  cursor-pointer"
          }`}
          onClick={() =>
            handlechange(
              "https://www.irishospital.co.in/wp-content/uploads/2021/07/ICU-2.jpeg",
              "Our CCU & ICU units provide intensive care for critically ill patients. With round-the-clock monitoring and advanced life support systems, we ensure the highest level of care for our patients in critical conditions.",
              "CCU & ICU",
              "CCU"
            )
          }
        >
          CCU & ICU
        </p>
        <p
          className={`${
            facility === "Doctors"
              ? "bg-[#0143BE] text-white font-bold p-2 rounded-lg cursor-pointer"
              : "text-lg text-[#0143BE] font-bold  cursor-pointer"
          }`}
          onClick={() =>
            handlechange(
              "https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/fiercehealthcare/1557865869/Screen%20Shot%202018-10-15%20at%209.26.50%20PM.png/Screen%20Shot%202018-10-15%20at%209.26.50%20PM.png?VersionId=ZQXWBi1B5oDmIoNzeXoeg9jJptWQUv4C",
              "Our team of highly qualified doctors is dedicated to providing personalized care for each patient. With expertise in various medical fields, our doctors are committed to ensuring your health and well-being with the highest standards of medical practice.",
              "Doctors",
              "Doctors"
            )
          }
        >
          Doctors
        </p>
      </div>
    </div>
  );
};

export default Facilities;
