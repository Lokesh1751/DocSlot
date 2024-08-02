import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rPass, setrPass] = useState("");
  const addauth = async () => {
    if (pass === rPass) {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, pass);
      navigate("/Login");
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
          action=""
          className="flex flex-col gap-4  bg-gradient-to-t from-[#AECAD4] to-white max-w-xl  p-14 rounded-lg"
        >
          <h1 className="text-center text-3xl text-[#0143BE] font-bold flex gap-2">
            DocSlot{" "}
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false"
              alt=""
              className="w-[50px] h-[50px]"
            />
          </h1>
          <h1 className="text-center text-2xl font-bold text-[#0143BE]">
            Register
          </h1>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xl font-bold"
              onChange={(e) => setEmail(e.target.value)}
            >
              Email
            </label>
            <input type="text" id="email" className="p-2 rounded-lg" />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-xl font-bold"
              onChange={(e) => setPass(e.target.value)}
            >
              Password
            </label>
            <input type="password" id="password" className="p-2 rounded-lg" />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-xl font-bold"
              onChange={(e) => setrPass(e.target.value)}
            >
              Repeat Password
            </label>
            <input type="password" id="password" className="p-2 rounded-lg" />
          </div>
          <div className="flex gap-6 justify-center">
            <Link to="/Login">
              <button className="bg-[#0143BE] p-2 rounded-md text-white text-lg font-bold">
                Login
              </button>
            </Link>
            <button
              className="bg-[#0143BE] p-2 rounded-md text-white text-lg font-bold"
              type="submit"
              onClick={addauth}
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
