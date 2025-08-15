// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" data-text="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/objectives" data-text="Objectives">
            Objectives
          </Link>
        </li>
        <li>
          <Link to="/events" data-text="Events">
            Events
          </Link>
        </li>
        <li>
          <Link to="/team" data-text="Team">
            Team
          </Link>
        </li>
        <li>
          <Link to="/contact" data-text="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
