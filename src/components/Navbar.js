// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo text */}
      <div className="navbar-logo">
        ATC
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li>
          <a href="#home" data-text="Home">
            Home
          </a>
        </li>
        <li>
          <a href="#objectives" data-text="Objectives">
            Objectives
          </a>
        </li>
        <li>
          <a href="#events" data-text="Events">
            Events
          </a>
        </li>
        <li>
          <a href="#team" data-text="Team">
            Team
          </a>
        </li>
        <li>
          <a href="#contact" data-text="Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
