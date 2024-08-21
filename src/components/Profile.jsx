import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../pages/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { ClipLoader } from "react-spinners";
import {
  FaCalendarAlt,
  FaUserMd,
  FaStethoscope,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

function Profile() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        setUser(user);
        await fetchAppointments(user.email);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchAppointments = async (userEmail) => {
    try {
      const q = query(
        collection(FIRESTORE_DB, "docslot_users"),
        where("email", "==", userEmail)
      );
      const querySnapshot = await getDocs(q);
      const fetchedAppointments = querySnapshot.docs.map((doc) => doc.data());
      setAppointments(fetchedAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Welcome,{" "}
          <span className="text-blue-800">
            {user && user.email.slice(0, 1).toUpperCase() + user.email.slice(1)}
          </span>
        </h1>
        {user ? (
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <FaCalendarAlt className="mr-2" />
              Your Appointments
            </h2>
            {loading ? (
              <div className="flex justify-center items-center">
                <ClipLoader color={"#0143BE"} loading={true} size={50} />
              </div>
            ) : (
              <ul className="space-y-6">
                {appointments.length === 0 ? (
                  <p className="text-gray-600 text-center">
                    No appointments found.
                  </p>
                ) : (
                  appointments[0].appointments.map((appointment, index) => (
                    <li
                      key={index}
                      className="bg-blue-50 p-6 border border-blue-200 rounded-lg shadow-sm"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <p className="text-lg font-semibold text-blue-800 flex items-center">
                            <FaUserMd className="mr-2" />
                            {appointment.name}
                          </p>
                          <p className="text-gray-700">
                            <strong>Date:</strong> {appointment.date}
                          </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <p className="text-gray-700 flex items-center">
                            <FaStethoscope className="mr-2 text-blue-600" />
                            <strong>Doctor:</strong>{" "}
                            {appointment.selectedDoctor}
                          </p>
                          <p className="text-gray-700 flex items-center">
                            {appointment.approved ? (
                              <FaCheckCircle className="mr-2 text-green-600" />
                            ) : (
                              <FaTimesCircle className="mr-2 text-red-600" />
                            )}
                            <strong>Status:</strong>{" "}
                            {appointment.approved ? "Approved" : "Pending"}
                          </p>
                        </div>
                        <div className="text-gray-700 flex items-center md:ml-4">
                          <FaClock className="mr-2 text-blue-600" />
                          <strong>Service:</strong>{" "}
                          {appointment.selectedService}
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        ) : (
          <div className="text-center bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700">
              Please log in to see your profile and appointments.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
