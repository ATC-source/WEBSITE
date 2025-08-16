import React, { useEffect, useRef } from "react";
import "../Global.css";
import "./Objectives.css";

import img1 from "../assets/1IMG.png";
import img2 from "../assets/2IMG.png";
import img3 from "../assets/3IMG.png";
import img4 from "../assets/4IMG.png";
import img5 from "../assets/5IMG.png";
import img6 from "../assets/6IMG.png";

const objectivesData = [
  { title: "Build a Collaborative Tech Culture", description: "We aim to foster...", image: img1 },
  { title: "Promote Innovation Through Real-World Problem Solving", description: "We focus on...", image: img2 },
  { title: "Introduce and Explore Emerging Technologies", description: "We believe in...", image: img3 },
  { title: "Host Practical Bootcamps and Guided Learning Programs", description: "We organize...", image: img4 },
  { title: "Create a Peer-to-Peer Upskilling & Mentorship Network", description: "We grow by...", image: img5 },
  { title: "Connect Students to External Opportunities and Mentors", description: "We strive to...", image: img6 },
];

export default function Objectives() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-background" id="objectives">
      {/* Creative Title */}
      <div className="objectives-title-container" ref={(el) => (refs.current[0] = el)}>
        <h1 className="objectives-title">
          What <span className="highlight">We Aim For</span>
          <span className="title-underline"></span>
        </h1>
        <p className="objectives-subtitle">
          Our mission is to inspire, innovate, and empower every student to reach their potential.
        </p>
      </div>

      {objectivesData.map((obj, index) => (
        <div
          className={`objective ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
          ref={(el) => (refs.current[index + 1] = el)}
        >
          <img src={obj.image} alt={obj.title} className="objective-img" />
          <div className="objective-text">
            <h2>{obj.title}</h2>
            <p>{obj.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
