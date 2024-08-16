import React from "react";
import {
  FaBrain,
  FaSyringe,
  FaHeartbeat,
  FaEye,
  FaUserMd,
  FaChild,
  FaBone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Cardiology",
    icon: <FaHeartbeat color="#FF6F61" size={40} />,
    description:
      "Our cardiology services specialize in heart care, providing advanced treatments for cardiovascular diseases.",
  },
  {
    id: 2,
    name: "Dermatology",
    icon: <FaUserMd color="#6A1B9A" size={40} />,
    description:
      "We offer comprehensive skin care services, diagnosing and treating a variety of skin conditions.",
  },
  {
    id: 3,
    name: "Gastroenterology",
    icon: <FaSyringe color="#FFB74D" size={40} />,
    description:
      "Our gastroenterology services focus on the diagnosis and treatment of digestive system disorders.",
  },
  {
    id: 4,
    name: "Neurology",
    icon: <FaBrain color="#4CAF50" size={40} />,
    description:
      "Our neurology department provides expert care for brain and nervous system disorders.",
  },
  {
    id: 5,
    name: "Oncology",
    icon: <FaUserMd color="#00BCD4" size={40} />,
    description:
      "We specialize in the diagnosis and treatment of cancer, offering cutting-edge therapies.",
  },
  {
    id: 6,
    name: "Pediatrics",
    icon: <FaChild color="#E91E63" size={40} />,
    description:
      "Our pediatricians provide compassionate care for children, from infancy through adolescence.",
  },
  {
    id: 7,
    name: "Orthopedics",
    icon: <FaBone color="#FFC107" size={40} />,
    description:
      "Our orthopedic specialists treat musculoskeletal conditions, helping patients regain mobility.",
  },
  {
    id: 8,
    name: "Ophthalmology",
    icon: <FaEye color="#3F51B5" size={40} />,
    description:
      "Our eye care services offer advanced treatments to maintain and restore vision health.",
  },
  {
    id: 9,
    name: "Psychiatry",
    icon: <FaBrain color="#FF5722" size={40} />,
    description:
      "Our psychiatry department provides expert mental health care for a wide range of conditions.",
  },
];

const Services = () => {
  return (
    <div className="p-5">
      <p className="text-[#0143BE] font-bold">Services</p>
      <p className="font-bold text-3xl mb-6">Our Hospital Services</p>
      <div className="grid grid-cols-1 xl:p-10 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="flex flex-col p-6 rounded-lg items-center shadow-xl cursor-pointer hover:shadow-2xl transition-all text-center"
            to={`/categoryinfo/${category.name}`}
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className="font-bold text-xl mb-2">{category.name}</h3>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
