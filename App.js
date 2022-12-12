// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// componants
import Navbar from "./Componants/Navbar";
import Home from "./Componants/Home";
import Service from "./Componants/Service";
import About from "./Componants/About";
import Contact from "./Componants/Contact";
import MoviesData from "./Componants/MoviesData";
import Api from "./Componants/Api";

function app() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/MoviesData" element={<MoviesData />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default app;
