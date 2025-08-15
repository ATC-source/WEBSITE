// src/pages/Objectives.js
import React, { useEffect, useRef } from "react";
import "./Objectives.css";

// Import your PNG images from assets
import img1 from "../assets/1IMG.png";
import img2 from "../assets/2IMG.png";
import img3 from "../assets/3IMG.png";
import img4 from "../assets/4IMG.png";
import img5 from "../assets/5IMG.png";
import img6 from "../assets/6IMG.png";
const objectivesData = [
  {
    title: "Build a Collaborative Tech Culture",
    description:
      "We aim to foster a culture where students openly collaborate, exchange ideas, and grow together through technology. It’s about creating an inclusive environment that encourages innovation and teamwork.",
    image: img1,
  },
  {
    title: "Promote Innovation Through Real-World Problem Solving",
    description:
      "We focus on solving real-life problems, not just academic ones. By addressing the challenges around us, we want to develop a mindset of practical innovation and creative thinking.",
    image: img2,
  },
  {
    title: "Introduce and Explore Emerging Technologies",
    description:
      "We believe in early exposure to cutting-edge tech like AI, blockchain, IoT, and cloud computing. Our goal is to bridge the gap between textbook learning and industry-relevant tools.",
    image: img3,
  },
  {
    title: "Host Practical Bootcamps and Guided Learning Programs",
    description:
      "We organize hands-on sessions, certification support, and structured learning paths to help students gain clarity and confidence in applying technical skills.",
    image: img4,
  },
  {
    title: "Create a Peer-to-Peer Upskilling & Mentorship Network",
    description:
      "We grow by learning from each other. Through peer mentorship and collaborative learning, we want to make knowledge-sharing a habit, not a formality.",
    image: img5,
  },
  {
    title: "Connect Students to External Opportunities and Mentors",
    description:
      "We strive to link students with tech communities, industry experts, alumni, and global platforms. Whether it’s hackathons, internships, or mentorship, we want to bring the outside world closer to our campus.",
    image: img6,
  },
];

export default function Objectives() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="objectives-container">
      {objectivesData.map((obj, index) => (
        <div
          className={`objective ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
          ref={(el) => (refs.current[index] = el)}
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
