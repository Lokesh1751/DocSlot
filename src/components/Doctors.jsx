import React from "react";

const Doctors = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-gray-100">
      <div className="flex flex-col gap-4 lg:gap-6 max-w-lg">
        <p className="text-lg font-semibold text-gray-600">Our Doctors</p>
        <h1 className="text-[#0143BE] font-bold text-3xl lg:text-5xl">
          QUALIFIED DOCTORS
        </h1>
        <p className="text-gray-700">
          Handled directly by general doctors and professional and experienced
          specialist doctors.
        </p>
        <div className="bg-[#0143BE] text-white p-6 rounded-xl shadow-lg">
          <h1 className="text-lg">Orthopedics</h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            Dr. James Wellington
          </h1>
        </div>
        <button className="bg-[#0143BE] text-white py-3 px-6 rounded-lg shadow hover:bg-[#013b9f] transition duration-300">
          View all doctors
        </button>
      </div>
      <div className="mt-8 lg:mt-0">
        <div className="relative rounded-full overflow-hidden w-82 h-82 lg:w-96 lg:h-96">
          <img
            src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=ais_user"
            alt="Doctor"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100 opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
