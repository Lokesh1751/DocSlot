import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTasks,
  FaUserMd,
  FaCalendarAlt,
} from "react-icons/fa";
import { FIRESTORE_DB, FIREBASE_AUTH } from "./firebase.config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categories = [
  { id: 1, name: "Cardiology" },
  { id: 2, name: "Dermatology" },
  { id: 3, name: "Gastroenterology" },
  { id: 4, name: "Neurology" },
  { id: 5, name: "Oncology" },
  { id: 6, name: "Pediatrics" },
  { id: 7, name: "Orthopedics" },
  { id: 8, name: "Ophthalmology" },
  { id: 9, name: "Psychiatry" },
];

const Appointment = () => {
  const [selectedService, setSelectedService] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(FIREBASE_AUTH); // Get the logged-in user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      if (selectedService) {
        try {
          const doctorsRef = collection(FIRESTORE_DB, "doctors");
          const q = query(
            doctorsRef,
            where("category", "==", selectedService.toLowerCase())
          );

          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const fetchedDoctors = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setDoctors(fetchedDoctors);
          } else {
            setDoctors([]);
          }
        } catch (error) {
          console.error("Error fetching doctors: ", error);
        }
      } else {
        setDoctors([]); // Reset if no service selected
      }
    };

    fetchDoctors();
  }, [selectedService]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast("User not logged in", {
        style: { backgroundColor: "#0143BE", color: "#fff" },
      });
      return;
    }
    const selectedDate = new Date(formData.date);
    const today = new Date();

    // Reset time to ensure only the date is compared
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      toast("Selected date cannot be in the past.", {
        style: { backgroundColor: "#0143BE", color: "#fff" },
      });
      return;
    }
    try {
      // Fetch the logged-in user's document from Firestore
      const userDocRef = collection(FIRESTORE_DB, "docslot_users");
      const q = query(userDocRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0]; // Get the first matching document

        // Add the appointment data to the "appointments" array in the user document
        const appointment = {
          ...formData,
          selectedService,
          selectedDoctor,
          approved: false,
          createdAt: new Date(),
        };

        const userRef = doc(FIRESTORE_DB, "docslot_users", userDoc.id);
        await updateDoc(userRef, {
          appointments: [...(userDoc.data().appointments || []), appointment],
        });

        toast("Appointment requested successfully!", {
          style: { backgroundColor: "#0143BE", color: "#fff" },
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
        });
      } else {
        toast("No user found with this email.", {
          style: { backgroundColor: "#0143BE", color: "#fff" },
        });
      }
    } catch (error) {
      toast("Error adding appointment: " + error.message);
    }
  };

  const today = new Date();

  if (loading) {
    return (
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url(https://i0.wp.com/urologyspecialistsofohio.com/wp-content/uploads/2018/03/Section-4-BG-Surgery-and-Procedures-at-Springfield-Urology.jpg?ssl=1)`,
        }}
      >
        <ClipLoader color={"white"} loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-full flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url(https://i0.wp.com/urologyspecialistsofohio.com/wp-content/uploads/2018/03/Section-4-BG-Surgery-and-Procedures-at-Springfield-Urology.jpg?ssl=1)`,
      }}
    >
      <ToastContainer />
      <div className="bg-white rounded-lg m-4 md:m-8 p-6 md:p-8 max-w-xl md:max-w-5xl w-full shadow-lg">
        <h1 className="text-[#0143BE] text-2xl md:text-3xl font-bold mb-4">
          Book your appointment
        </h1>
        <p className="text-gray-600 font-bold mb-6">
          We will confirm your appointment within 2 hours
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-16">
            {/* Name Field */}
            <div className="flex gap-3 items-center">
              <FaUser size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex gap-3 items-center">
              <FaEnvelope size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex gap-3 items-center">
              <FaPhoneAlt size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="flex gap-3 items-center">
              <FaTasks size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="services" className="block text-gray-700 mb-2">
                  Services
                </label>
                <select
                  id="services"
                  name="services"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Doctors Dropdown */}
            <div className="flex gap-3 items-center">
              <FaUserMd size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="doctor" className="block text-gray-700 mb-2">
                  Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  disabled={!selectedService || doctors.length === 0}
                >
                  <option value="" disabled>
                    {selectedService
                      ? doctors.length === 0
                        ? "No doctors available"
                        : "Select a doctor"
                      : "Select a service first"}
                  </option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Field */}
            <div className="flex gap-3 items-center">
              <FaCalendarAlt size={40} className="text-[#0143BE]" />
              <div className="flex-1">
                <label htmlFor="date" className="block text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full border-b-2 border-[#0143BE] p-2 focus:outline-none"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={today.toISOString().split("T")[0]}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-[#0143BE] text-white py-2 px-8 rounded-lg hover:bg-[#012e86] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
