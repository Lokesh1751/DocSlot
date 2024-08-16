import React, { useEffect, useState } from "react";
import {
  FaBrain,
  FaSyringe,
  FaHeartbeat,
  FaEye,
  FaUserMd,
  FaChild,
  FaBone,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../pages/firebase.config";

const categories = [
  {
    id: 1,
    name: "Cardiology",
    icon: <FaHeartbeat color="#FF6F61" size={200} />,
    description:
      "Our cardiology department offers a full range of heart care services, focusing on both prevention and treatment of cardiovascular diseases. We specialize in diagnosing and managing conditions such as coronary artery disease, arrhythmias, heart failure, and hypertension. Our team of experienced cardiologists utilizes state-of-the-art technology and techniques to provide personalized care tailored to each patient’s needs. We emphasize a holistic approach to heart health, incorporating lifestyle modifications, medication management, and advanced interventions such as cardiac catheterization, angioplasty, and pacemaker implantation. Our goal is to help patients achieve and maintain optimal heart health, improving both longevity and quality of life through comprehensive, compassionate care.",
  },
  {
    id: 2,
    name: "Dermatology",
    icon: <FaUserMd color="#6A1B9A" size={200} />,
    description:
      "Our dermatology department provides expert care for all skin, hair, and nail conditions, from common issues such as acne, eczema, and psoriasis to more complex diseases like melanoma and other skin cancers. We offer advanced treatments, including laser therapy, phototherapy, and surgical procedures, to address both medical and cosmetic concerns. Our dermatologists take a personalized approach to treatment, ensuring that each patient receives the care best suited to their specific needs. In addition to treating existing conditions, we focus on prevention and skin health education to help patients protect and maintain their skin’s health and appearance.",
  },
  {
    id: 3,
    name: "Gastroenterology",
    icon: <FaSyringe color="#FFB74D" size={200} />,
    description:
      "Our gastroenterology department is dedicated to the diagnosis and treatment of digestive and liver disorders, including conditions affecting the esophagus, stomach, intestines, liver, and pancreas. We treat common issues such as acid reflux, irritable bowel syndrome (IBS), and inflammatory bowel disease (IBD), as well as more complex conditions like liver disease and gastrointestinal cancers. Our services include diagnostic procedures like endoscopy and colonoscopy, as well as minimally invasive treatments. We prioritize patient comfort and work closely with each patient to develop individualized treatment plans that focus on improving digestive health, relieving symptoms, and enhancing overall well-being.",
  },
  {
    id: 4,
    name: "Neurology",
    icon: <FaBrain color="#4CAF50" size={200} />,
    description:
      "Our neurology department provides expert care for a wide range of neurological conditions, including migraines, epilepsy, stroke, multiple sclerosis, and neurodegenerative diseases such as Parkinson’s and Alzheimer’s. We use advanced diagnostic tools such as MRI and CT scans to accurately diagnose and monitor neurological conditions, ensuring that each patient receives a personalized treatment plan. Our neurologists are skilled in both medical and surgical interventions, providing comprehensive care for acute and chronic neurological conditions. In addition to treating the physical aspects of neurological disorders, we emphasize a multidisciplinary approach that addresses cognitive and emotional well-being.",
  },
  {
    id: 5,
    name: "Oncology",
    icon: <FaUserMd color="#00BCD4" size={200} />,
    description:
      "Our oncology department is at the forefront of cancer treatment, offering cutting-edge therapies and compassionate care for patients diagnosed with all types of cancer. We provide a range of services, from early detection and diagnosis to advanced treatments such as chemotherapy, radiation therapy, and immunotherapy. Our multidisciplinary team of oncologists, surgeons, and radiologists works together to develop individualized treatment plans aimed at achieving the best possible outcomes for each patient. We also offer support services to help patients and their families navigate the physical and emotional challenges of a cancer diagnosis, ensuring holistic care throughout the cancer journey.",
  },
  {
    id: 6,
    name: "Pediatrics",
    icon: <FaChild color="#E91E63" size={200} />,
    description:
      "Our pediatrics department is dedicated to providing high-quality care for children from infancy through adolescence. We offer a full range of pediatric services, including routine check-ups, immunizations, and treatment for acute illnesses and chronic conditions. Our pediatricians focus on promoting healthy growth and development, addressing both physical and emotional well-being. In addition to preventive care, we provide expert management of complex pediatric conditions such as asthma, diabetes, and developmental disorders. Our child-friendly environment ensures that children feel comfortable and safe, and our team works closely with families to provide compassionate and individualized care.",
  },
  {
    id: 7,
    name: "Orthopedics",
    icon: <FaBone color="#FFC107" size={200} />,
    description:
      "Our orthopedic department specializes in diagnosing and treating musculoskeletal conditions, including fractures, arthritis, and sports injuries. We offer both surgical and non-surgical treatments to help patients regain mobility and reduce pain. Our services include joint replacement surgery, arthroscopy, physical therapy, and rehabilitation programs designed to promote healing and restore function. Whether you’re dealing with a sports injury, chronic pain, or a degenerative condition like osteoarthritis, our orthopedic specialists will work with you to develop a treatment plan that meets your needs and helps you return to your daily activities.",
  },
  {
    id: 8,
    name: "Ophthalmology",
    icon: <FaEye color="#3F51B5" size={200} />,
    description:
      "Our ophthalmology department offers a full spectrum of eye care services, from routine eye exams to advanced treatments for eye diseases such as cataracts, glaucoma, and macular degeneration. We use the latest diagnostic technologies and surgical techniques to ensure the best possible outcomes for our patients. Whether you need corrective lenses, cataract surgery, or treatment for a more complex condition, our ophthalmologists provide personalized care to maintain and improve your vision health. We are dedicated to helping patients preserve their vision and improve their quality of life through expert eye care.",
  },
  {
    id: 9,
    name: "Psychiatry",
    icon: <FaBrain color="#FF5722" size={200} />,
    description:
      "Our psychiatry department offers comprehensive mental health care for individuals facing a wide range of emotional and psychological challenges. We provide diagnostic evaluations, therapy, and medication management for conditions such as depression, anxiety, bipolar disorder, and schizophrenia. Our team of psychiatrists, psychologists, and therapists works together to develop personalized treatment plans that address each patient’s unique needs. In addition to traditional psychiatric care, we offer support services such as group therapy and family counseling to ensure that patients receive holistic care. Our goal is to help individuals achieve mental stability, improve their quality of life, and build resilience.",
  },
];

function CategoryDetail() {
  const { name } = useParams();
  const [specialists, setSpecialists] = useState([]);

  const category = categories.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );

  useEffect(() => {
    const getSpecialists = async () => {
      try {
        const colRef = collection(FIRESTORE_DB, "doctors");
        const querySnapshot = await getDocs(colRef);
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter specialists by category name
        setSpecialists(
          docs.filter(
            (item) => item.category.toLowerCase() === name.toLowerCase()
          )
        );
      } catch (error) {
        console.error("Error fetching specialists: ", error);
      }
    };

    getSpecialists();
  }, [name]);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {category ? (
        <>
          {/* Category Details */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-shrink-0">{category.icon}</div>
            <div className="ml-8">
              <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-gray-700">{category.description}</p>
            </div>
          </div>

          {/* Specialists Section */}
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{name} Specialists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialists.length > 0 ? (
                specialists.map((spec) => (
                  <Link key={spec.id} to={`/docinfo/${spec.id}`}>
                    <div className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={spec.image}
                        alt={spec.name}
                        className="w-full h-48 object-contain"
                      />
                      <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2 text-center">
                          {spec.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No specialists found.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-red-600">Category not found</p>
      )}
    </div>
  );
}

export default CategoryDetail;
