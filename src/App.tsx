import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "components/About";
import Pricing from "components/Pricing";
// import Testimonial from "components/Testimonial";
import Contact from "components/Contact";
import Footer from "components/Footer";

function App() {
  return (
    <div className="xl-monitor">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
