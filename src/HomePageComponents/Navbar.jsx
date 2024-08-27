import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../pages/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { useDebounce } from "../debounce/Debounce";
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileVisible, setProfileVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    // Fetch all doctors from Firestore
    const fetchDoctors = async () => {
      const doctorsCollection = collection(FIRESTORE_DB, "doctors");
      const doctorSnapshot = await getDocs(doctorsCollection);
      const doctorList = doctorSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDoctors(doctorList);
    };

    fetchDoctors();

    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      setUser(null);
      toast("Logged Out Successfully!!", {
        style: { backgroundColor: "#0143BE", color: "#fff" },
        autoClose: 1300,
      });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Filter doctors based on search term

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (doctor.category &&
        doctor.category
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())) ||
      (doctor.specialty &&
        doctor.specialty
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()))
  );

  // Hide search list on doctor click
  const handleDoctorClick = () => {
    setSearchTerm("");
  };
  console.log(doctors);
  return (
    <div className="relative">
      <ToastContainer />
      <div className="flex p-4 shadow-lg  justify-between items-center">
        <div className="flex flex-col xl:items-center gap-2 xl:gap-14 xl:flex-row">
          <Link to="/" className="cursor-pointer">
            <div className="flex gap-2 items-center">
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false"
                alt="DocSlot Logo"
                className="w-[50px] h-[50px]"
              />
              <h1 className="text-3xl">DocSlot</h1>
            </div>
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Doctor or Category..."
              className="p-3 rounded-full border-2 border-gray-200 ring-blue-800 w-full sm:w-[300px] xl:w-[400px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <MdClose
                className="absolute top-4 right-5 cursor-pointer hidden xl:flex"
                size={20}
                color="gray"
                onClick={() => setSearchTerm("")}
              />
            )}
          </div>
        </div>

        <div className="hidden xl:flex gap-20">
          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            <Link
              to="/alldoctors"
              className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer"
            >
              Doctors
            </Link>
            <Link
              className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer"
              to="/services"
            >
              Services
            </Link>
          </div>

          {/* Profile and Logout */}
          <div className="flex gap-6 items-center">
            {!user ? (
              <Link to="/Login" className="flex justify-center">
                <p className="text-lg font-bold text-[#0143BE] mt-3 cursor-pointer transition-all">
                  Login | SignUp
                </p>
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center relative">
                  <div className="flex  items-center gap-4">
                    <FaUser
                      className="w-[40px] h-[40px] cursor-pointer  rounded-full"
                      color="#0143BE"
                      onClick={() => setProfileVisible(!profileVisible)}
                    />
                    <p
                      onClick={handleLogout}
                      className="text-xl flex gap-2  mt-3 
                       items-center font-bold text-[#0143BE] cursor-pointer transition-all"
                    >
                      Logout <FaSignOutAlt />
                    </p>

                    {profileVisible && (
                      <Link
                        className="bg-gray-100 p-2 rounded-lg text-[#0143BE] right-12 font-bold absolute top-14 w-[100px] cursor-pointer text-center"
                        to={`/profile/${user.email}`}
                        onClick={() => setProfileVisible(!profileVisible)}
                      >
                        My Profile
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        {isOpen ? (
          <FaTimes
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden cursor-pointer"
          />
        ) : (
          <FaBars
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute transition-all duration-500 z-10 w-full bg-white shadow-lg p-8 xl:hidden ${
          isOpen ? "top-full" : "top-[-1000px]"
        } flex flex-col`}
      >
        <div className="flex flex-col items-center gap-4">
          <p
            className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </p>
          <p
            className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </p>
          <Link
            className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer"
            onClick={() => setIsOpen(false)}
            to="/alldoctors"
          >
            Doctors
          </Link>
          <p
            className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Services
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4">
          {!user ? (
            <Link to="/Login" onClick={() => setIsOpen(false)}>
              <p className="text-lg font-bold text-white bg-[#0E02F5] p-2 rounded-md cursor-pointer hover:bg-[#0c02d5] transition-all">
                Login | SignUp
              </p>
            </Link>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Link
                className="text-blue-800 font-bold p-2 rounded-lg w-[100px] cursor-pointer text-center"
                to={`/profile/${user.email}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                My Profile
              </Link>

              <p
                onClick={handleLogout}
                className="text-lg font-bold text-white bg-[#0E02F5] p-2 rounded-md cursor-pointer hover:bg-[#0c02d5] transition-all"
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Show filtered doctors */}
      {searchTerm && (
        <div className="absolute bg-white shadow-lg p-4  z-20 w-full">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Link to={`/docinfo/${doctor.id}`} key={doctor.id}>
                <div
                  className="p-2 border-b cursor-pointer flex gap-3"
                  onClick={handleDoctorClick}
                >
                  <img
                    src={doctor.image}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <p>{doctor.name}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No doctors found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
