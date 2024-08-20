import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../pages/firebase.config";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profilevisible, setProfilevisible] = useState(false);

  useEffect(() => {
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
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex p-4 shadow-lg justify-between items-center">
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

        <div className="hidden xl:flex gap-20 items-center">
          <div className="flex gap-10">
            <p className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer">
              About Us
            </p>
            <p className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer">
              Contact Us
            </p>
            <Link
              to="/alldoctors"
              className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer"
            >
              Doctors
            </Link>
            <p className="text-lg font-bold hover:text-[#0143BE] transition-all cursor-pointer">
              Services
            </p>
          </div>
          <div className="flex gap-6 items-center">
            {!user ? (
              <Link to="/Login">
                <p className="text-lg font-bold text-[#0143BE] cursor-pointer transition-all">
                  Login | SignUp
                </p>
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center relative">
                  <div className="flex flex-col">
                    <p
                      className="text-lg font-bold bg-[#0E02F5] text-white rounded-full px-4 py-2 cursor-pointer transition-all"
                      onClick={() => setProfilevisible(!profilevisible)}
                    >
                      {user.email.slice(0, 1).toUpperCase()}
                    </p>
                    {profilevisible && (
                      <Link
                        className="bg-gray-200 p-2 rounded-lg absolute top-14 w-[100px]  cursor-pointer text-center"
                        to={`/profile/${user.email}`}
                        onClick={() => setProfilevisible(!profilevisible)}
                      >
                        My Profile
                      </Link>
                    )}
                  </div>
                </div>
                <p
                  onClick={handleLogout}
                  className="text-lg font-bold text-[#0143BE] cursor-pointer transition-all"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>

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
          <p
            className="text-lg font-bold hover:text-[#0E02F5] transition-all cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Doctors
          </p>
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
              <div>
                <p className="text-lg font-bold text-white bg-[#0E02F5] p-2 rounded-md cursor-pointer hover:bg-[#0c02d5] transition-all">
                  {user.email}
                </p>
                <p>My Profile</p>
              </div>
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
    </div>
  );
};

export default Navbar;
