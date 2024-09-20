import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "components/About";
import Pricing from "components/Pricing";
import Testimonial from "components/Testimonial";

function App() {
  return (
    <div className="xl-monitor">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Testimonial />
    </div>
  );
}

export default App;
