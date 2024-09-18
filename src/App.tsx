import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "components/About";

function App() {
  return (
    <div className="App 2xl:mx-96">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
