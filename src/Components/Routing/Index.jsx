import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navigation from "./Navigation";
import Services from "./Services/Services";

const IndexRoute = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default IndexRoute;
