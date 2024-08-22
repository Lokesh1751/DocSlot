import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./HomePageComponents/Navbar";
import Footer from "./HomePageComponents/Footer";
import AllDoctors from "./pages/AllDoctors";
import DoctorInfo from "./pages/DoctorInfo";
import Appointment from "./pages/Appointment";
import Categorydetail from "./pages/Categorydetail";
import Profile from "./pages/Profile";
import PreNavbar from "./HomePageComponents/PreNavbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <PreNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/alldoctors" element={<AllDoctors />} />
          <Route path="/docinfo/:id" element={<DoctorInfo />} />
          <Route path="/categoryinfo/:name" element={<Categorydetail />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/profile/:email" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
