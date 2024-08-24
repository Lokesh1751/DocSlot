import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "./firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      toast("Logged In Successfully!!", {
        style: { backgroundColor: "#0143BE", color: "#fff" },
        autoClose: 1300,
      });
      navigate("/");
    } catch (error) {
      toast("Wrong Credentials!!", {
        style: { backgroundColor: "#0143BE", color: "#fff" },
        autoClose: 1300,
      });
      console.error("Error signing in:", error.message);
    }
  };
  return (
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
      <ToastContainer />
      <form
        action=""
        className="flex flex-col gap-4  bg-white  p-14 rounded-lg"
      >
        <h1 className="text-center text-3xl text-[#0143BE] font-bold flex gap-2">
          DocSlot{" "}
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/j/s/d/doctor-logo-1-doctor-1-6x5in-doctor-logo-decalbazaar-original-imagpnchqbfc3jf2.jpeg?q=90&crop=false"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </h1>
        <h1 className="text-center text-2xl   font-bold text-[#0143BE]">
          Login
        </h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="p-2 rounded-lg border-blue-700 border-2"
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
            className="p-2 rounded-lg border-blue-700 border-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-6 justify-center">
          <button
            className="bg-[#0143BE] p-2 rounded-md text-white text-lg font-bold"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link to="/Register">
            <button className="bg-[#0143BE] p-2 rounded-md text-white text-lg font-bold">
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
