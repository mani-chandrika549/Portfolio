import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "../../Styles/Home.css";
import "../../Styles/About.css";


const aboutData = [
  {
    icon: "🎓",
    title: "Education",
    description: "The foundation of knowledge that fuels everything I build.",
    path: "/education",
  },
  {
    icon: "📜",
    title: "Certifications",
    description: "Validated skills, proven knowledge — here's what backs my expertise.",
    path: "/certifications",
  },
  {
    icon: "🏅",
    title: "Extracurricular",
    description: "Beyond the code — where passions, leadership, and creativity come to life.",
    path: "/extracurricular",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div style={{ marginBottom: "40px" }}>
        
      </div>

      <section className="projects-preview">
        <h3>📘 About Me</h3>
        <p className="summary skills-summary">
          Here’s a snapshot of my academic background, achievements, and passions.
        </p>

        <div className="about-cards-grid">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="about-card"
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <div className="skill-item">
                <span className="skill-emoji">{item.icon}</span>
                <span className="skill-text">{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
