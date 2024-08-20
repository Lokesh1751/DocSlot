import React, { useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { FIREBASE_AUTH, FIRESTORE_DB } from "./firebase.config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rPass, setrPass] = useState("");

  const addauth = async (event) => {
    event.preventDefault();

    if (pass === rPass) {
      try {
        await createUserWithEmailAndPassword(FIREBASE_AUTH, email, pass);
        await signOut(FIREBASE_AUTH);

        await addDoc(collection(FIRESTORE_DB, "docslot_users"), {
          email: email,
          password: pass,
        });

        navigate("/Login");
      } catch (error) {
        alert("Error creating account: " + error.message);
      }
    } else {
      alert("Passwords are not matching!");
    }
  };

  return (
    <div>
      <div
        className="flex justify-center items-center h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass-curtain-wall-with-frame_1339-6363.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form
          className="flex flex-col gap-4 bg-gradient-to-t from-[#AECAD4] to-white max-w-xl p-14 rounded-lg"
          onSubmit={addauth}
        >
          <h1 className="text-center text-3xl text-[#0143BE] font-bold flex gap-2">
            DocSlot
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false"
              alt="DocSlot logo"
              className="w-[50px] h-[50px]"
            />
          </h1>
          <h1 className="text-center text-2xl font-bold text-[#0143BE]">
            Register
          </h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 rounded-lg"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="repeat-password" className="text-xl font-bold">
              Repeat Password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="p-2 rounded-lg"
              value={rPass}
              onChange={(e) => setrPass(e.target.value)}
            />
          </div>
          <div className="flex gap-6 justify-center">
            <Link to="/Login">
              <button
                type="button"
                className="bg-[#0143BE] p-2 rounded-md text-white text-lg font-bold"
              >
                Login
              </button>
            </Link>
            <button
              type="submit"
              className="bg-[#0143BE] p-2 rounded-md text-white text-lg font-bold"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
