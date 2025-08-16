import React from "react";
import "../Global.css";
import "./Home.css";
import logo from "../assets/atc-logo.png";

const Home = () => {
  return (
    <div className="page-background" id="home">
      <div className="home-content">
        <img src={logo} alt="ATC Logo" className="club-logo" />
        <h1 className="club-title">ALIET Techpreneur Club</h1>
        <p className="club-tagline">Innovate. Upskill. Lead Through Technology.</p>
        <p className="club-description">
          ATC is a student-led initiative to create a fun, innovative community
          that spreads technical awareness and encourages collaboration.
        </p>
        <div className="home-buttons">
          <button className="btn">Join Now</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
