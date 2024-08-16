import React, { useState, useEffect } from "react";
import { FIRESTORE_DB } from "../pages/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function AllDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const colRef = collection(FIRESTORE_DB, "doctors");
        const querySnapshot = await getDocs(colRef);
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctors(docs);
        setFilteredDoctors(docs);
      } catch (error) {
        console.error("Error fetching doctors: ", error);
      }
    };

    getDoctors();
  }, []);

  useEffect(() => {
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [search, doctors]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">All Doctors</h1>
        <input
          type="text"
          placeholder="Search Doctor..."
          className="p-4 border border-black rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        className="grid grid-col-2 md:grid-col-2 lg:grid-col-3 gap-6 cursor-pointer"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        {filteredDoctors.map((doctor) => (
          <Link
            key={doctor.id}
            className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
            to={`/docinfo/${doctor.id}`}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-[200px] h-[200px] rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
            <p className="text-blue-800 text-lg font-bold mb-2">
              Specialty: {doctor.specialty}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllDoctors;
