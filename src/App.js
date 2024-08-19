import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllDoctors from "./components/AllDoctors";
import DoctorInfo from "./components/DoctorInfo";
import Appointment from "./components/Appointment";
import Categorydetail from "./components/Categorydetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/alldoctors" element={<AllDoctors />} />
          <Route path="/docinfo/:id" element={<DoctorInfo />} />
          <Route path="/categoryinfo/:name" element={<Categorydetail />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
