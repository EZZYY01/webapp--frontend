import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";

import Dashboard from "./core/private/AdminDashboard.jsx";
import Courses from "./core/public/pages/Courses.jsx";
import Hero from "./core/public/pages/Hero.jsx";
import Home from "./core/public/pages/Home.jsx";
import Login from "./core/public/pages/Login.jsx";
import Signup from "./core/public/pages/Signup.jsx";

const App = () => {
  return (
    <Router>
      <div className="app-container">

        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admindashboard" element={<Dashboard />} />
            <Route path="/addcourses" element={<Courses />} />


            {/* {/<Route path="/signup" element={<Signup />} />/} */}

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;