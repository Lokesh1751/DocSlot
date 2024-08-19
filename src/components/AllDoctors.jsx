import React, { useState, useEffect } from "react";
import { FIRESTORE_DB } from "../pages/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function AllDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color={"#0143BE"} loading={true} size={50} />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">All Doctors</h1>
        <input
          type="text"
          placeholder="Search Doctor..."
          className="p-4 border border-black rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 cursor-pointer">
        {filteredDoctors.map((doctor) => (
          <Link
            key={doctor.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            to={`/docinfo/${doctor.id}`}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-[200px] h-[200px] rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">
              {doctor.name}
            </h2>
            <p className="text-blue-800 text-lg font-bold text-center">
              Specialty: {doctor.specialty}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllDoctors;
