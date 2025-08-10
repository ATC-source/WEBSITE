import React from 'react';

const objectives = [
  {
    title: 'Foster Innovation',
    description: 'Inspire students to build real-world tech solutions.',
  },
  {
    title: 'Encourage Entrepreneurship',
    description: 'Offer mentorship and resources to develop business ideas.',
  },
  {
    title: 'Skill Development',
    description: 'Workshops and events to build technical and soft skills.',
  },
  {
    title: 'Student-Led Initiatives',
    description: 'Empower members to lead and execute projects.',
  },
];

const Objectives = () => {
  return (
    <div className="objectives-page">
      <h2>Our Objectives</h2>
      <div className="objectives-list">
        {objectives.map((obj, index) => (
          <div key={index} className="objective-card">
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
