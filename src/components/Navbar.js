// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ATC</div>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={600}>
            Home
          </Link>
        </li>
        <li>
          <Link to="objectives" smooth={true} duration={600}>
            Objectives
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={600}>
            Events
          </Link>
        </li>
        <li>
          <Link to="team" smooth={true} duration={600}>
            Team
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
