import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blogs from "./components/pages/Blogs";
import Gallery from "./components/pages/Gallery";
// import Contest from "./components/pages/Contest";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import RegistrationForm from "./components/Private/RegistrationForm";


const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About />} />
            {/* <Route path="contest" element={<Contest />} /> */}
            <Route path="blogs" element={<Blogs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<RegistrationForm/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
