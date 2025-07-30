import React from "react";
import "../../Styles/Education.css";

import Footer from "../Footer";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Srinivasa Ramaujan Institute of Technology, Anantapur",
    duration: "2022 – 2026",
    details:
      "CGPA: 9.13 / 10. Key subjects: Data Structures, OOP, Web Development, DBMS, OS, Software Engineering.",
  },
  {
    title: "Intermediate (MPC)",
    institution: "SV Junior College for Girls, Dhamavaram",
    duration: "2020 – 2022",
    details: "Scored 93.2%. Focused on Maths, Physics, and Chemistry.",
  },
  {
    title: "Secondary School (10th Grade)",
    institution: "Municipal Girls High School, Dhamavaram",
    duration: "2019 – 2020",
    details: "GPA: 9.8 / 10.  building a strong academic foundation and discipline.",
  },
];

const Education = () => {
  return (
    <div className="home-container">
      <div style={{ marginBottom: '40px' }}>
        
      </div>

      <section className="roadmap-section">
        <h3 className="roadmap-heading">🎓 Education Roadmap</h3>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>
                  <strong>{item.institution}</strong>
                </p>
                <p>{item.duration}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
