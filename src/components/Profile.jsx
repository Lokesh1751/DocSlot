import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../pages/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { ClipLoader } from "react-spinners";

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hello , {user && user.email}</h1>
      {user ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          {loading ? (
            <div>
              <ClipLoader color={"#0143BE"} loading={true} size={40} />
            </div>
          ) : (
            <ul>
              {appointments.length === 0 ? (
                <p>No appointments found.</p>
              ) : (
                appointments[0].appointments.map((appointment, index) => (
                  <li
                    key={index}
                    className="mb-4 p-4 border border-gray-300 rounded-lg"
                  >
                    <p>
                      <strong>Name:</strong> {appointment.name}
                    </p>
                    <p>
                      <strong>Date:</strong> {appointment.date}
                    </p>
                    <p>
                      <strong>Doctor:</strong> {appointment.selectedDoctor}
                    </p>
                    <p>
                      <strong>Service:</strong> {appointment.selectedService}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {appointment.approved ? "Approved" : "Pending"}
                    </p>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      ) : (
        <p>Please log in to see your profile and appointments.</p>
      )}
    </div>
  );
}

export default Profile;
