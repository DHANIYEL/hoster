import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "components/About";
import Pricing from "components/Pricing";
import Testimonial from "components/Testimonial";
import Contact from "components/Contact";

function App() {
  return (
    <div className="xl-monitor">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
