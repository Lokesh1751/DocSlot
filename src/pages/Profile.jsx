import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { ClipLoader } from "react-spinners";
import {
  FaCalendarAlt,
  FaUserMd,
  FaStethoscope,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaDownload,
} from "react-icons/fa";
import jsPDF from "jspdf";

function Profile() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const generatePDF = (appointment) => {
    const imgUrl =
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false";
    const doc = new jsPDF();

    // Set up custom font, size, and colors
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(0, 76, 192); // DocSlot's Blue color

    // Add DocSlot Logo and Text (centered)
    doc.addImage(imgUrl, "JPEG", 10, 10, 40, 40); // Logo
    doc.text("DocSlot", 55, 35); // DocSlot text beside logo

    // Add title with larger font size
    doc.setFontSize(28);
    doc.text("Appointment Slip", doc.internal.pageSize.getWidth() / 2, 60, {
      align: "center",
    });

    // Add a line under the title
    doc.setDrawColor(0, 76, 192); // Blue
    doc.line(20, 65, doc.internal.pageSize.getWidth() - 20, 65); // Horizontal line

    // Reset font and size for the rest of the text
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");

    // Appointment details with better spacing and alignment
    const marginLeft = 20;
    const lineHeight = 10;
    let yPosition = 80;

    doc.text(`Patient: ${appointment.name}`, marginLeft, yPosition);
    yPosition += lineHeight;
    doc.text(`Doctor: ${appointment.selectedDoctor}`, marginLeft, yPosition);
    yPosition += lineHeight;
    doc.text(`Service: ${appointment.selectedService}`, marginLeft, yPosition);
    yPosition += lineHeight;
    doc.text(`Date: ${appointment.date}`, marginLeft, yPosition);
    yPosition += lineHeight;
    doc.text(
      `Status: ${appointment.approved ? "Approved" : "Pending"}`,
      marginLeft,
      yPosition
    );

    // Adding a footer with contact information or branding
    doc.setFontSize(12);
    doc.setTextColor(100); // Grey
    doc.text(
      "Thank you for choosing DocSlot. For any inquiries, visit www.docslot.com",
      marginLeft,
      doc.internal.pageSize.getHeight() - 20
    );

    // Save the PDF
    doc.save("appointment_slip.pdf");
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Welcome,{" "}
          <span className="text-blue-800">
            {user && user.email.slice(0, 1).toUpperCase() + user.email.slice(1)}
          </span>
        </h1>
        {user ? (
          <div className="bg-white p-6 w-full shadow-lg rounded-lg">
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
                {!appointments[0]?.appointments ? (
                  <p className="text-blue-600 text-center">
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
                        {appointment.approved && (
                          <div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                          >
                            <button
                              onClick={() => generatePDF(appointment)}
                              className="mt-4 flex items-center rounded-full md:mt-0 md:ml-4 p-2"
                            >
                              <FaDownload
                                size={20}
                                className="text-blue-800 font-bold"
                              />
                            </button>
                            {hoveredIndex === index && (
                              <div className="absolute bg-gray-200 text-gray-700 p-2 rounded shadow-lg mt-2">
                                Download Appointment Slip
                              </div>
                            )}
                          </div>
                        )}
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
