import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./Header";
import HomeLogin from "./LoginFrom/HomeLogin";
import Footer from "./Footer";
import '../styles/globalstyle.css'



const App = () => {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<HomeLogin/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
