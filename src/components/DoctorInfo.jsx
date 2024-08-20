import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FIRESTORE_DB } from "../pages/firebase.config";
import { getDoc, doc } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

function DoctorInfo() {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const docRef = doc(FIRESTORE_DB, "doctors", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDoctor(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching doctor details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading)
    return (
      <p className="text-center flex items-center justify-center h-screen text-gray-600">
        {" "}
        <ClipLoader color={"#0143BE"} loading={true} size={50} />
      </p>
    );

  if (!doctor)
    return (
      <p className="text-center text-red-600">No doctor found with this ID.</p>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center md:flex-row transform transition duration-500 hover:scale-105">
        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-[500px] h-[500px]  rounded-l-lg"
          />
          <div className="absolute w-auto h-[500px] inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
          <h1 className="absolute bottom-0 left-4 text-2xl text-white font-bold drop-shadow-md">
            {doctor.name}
          </h1>
        </div>
        <div className="p-8 md:flex-1">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-4">
            Dr. {doctor.name}
          </h2>
          <p className="text-lg text-blue-700 mb-2">
            Specialty: <span className="font-semibold">{doctor.specialty}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <p className="text-lg text-gray-800">
              Experience:{" "}
              <span className="font-semibold">{doctor.experience} years</span>
            </p>
            <p className="text-lg text-gray-800">
              Age: <span className="font-semibold">{doctor.age}</span>
            </p>
            <p className="text-lg text-gray-800">
              Category: <span className="font-semibold">{doctor.category}</span>
            </p>
            <p className="text-lg text-gray-800">
              Email: <span className="font-semibold">{doctor.email}</span>
            </p>
          </div>
          <Link to="/appointment">
            <button className="bg-blue-800 font-bold text-white p-3 text-center rounded-lg">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
