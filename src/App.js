// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Objectives from "./pages/Objectives";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

import "./Global.css"; // background pattern

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="objectives">
        <Objectives />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
