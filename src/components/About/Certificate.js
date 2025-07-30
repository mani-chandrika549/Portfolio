import React from "react";
import Footer from "../Footer";
import "../../Styles/Home.css";
import "../../Styles/About.css"; // for .about-card styles
import "../../Styles/Projects.css"; // for project-link styles (view certificate)


const certificates = [
  {
    title: "Certified ServiceNow Administrator",
    issuer: "ServiceNow",
    date: "Jun 2025",
    link: "https://drive.google.com/file/d/11MBYGJt39EGEsjJ3F5QpjPFZV9ko2p_1/view?usp=sharing",
  },
  {
    title: "Certified Application Developr",
    issuer: "ServiceNow",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/11aFrCkzWCZf0vtTLY4s7LLmdFAupLyLR/view?usp=sharing",
  },
   {
    title: "Smart Coder (Bronze Certified)",
    issuer: "Smart Interviews",
    date: "2025",
    link: "https://smartinterviews.in/certificate/8e76a39e"
  },
  {
    title: "Employability Skills – JobReady",
    issuer: "Wadwani Foundation",
    date: "Feb 2025",
    link: "https://drive.google.com/file/d/1UQa5saU1_Owg2M1hGxN_Rpxqs9HGy3gP/view?usp=sharing",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Jul 2024 - Oct 2024",
    link: "https://drive.google.com/file/d/1Y_hjCOKLm-WrIIoXsmOXjEfI_10wZrlL/view?usp=sharing",
  },
  
  {
  title: "Java Full Stack with React JS & AI",
  issuer: "SRIT, Brainovision & AICTE",
  date: "Dec 2024",
  link: "https://drive.google.com/file/d/1Ic67-iTq0UmCp02xCeITYhxbepAL_ONr/view?usp=sharing"
}

];

const Certificate = () => {
  return (
    <div className="home-container">
      <div style={{ marginBottom: "40px" }}>
        
      </div>

      <section className="projects-preview">
        <h3>📜 Certifications</h3>
        <p className="summary skills-summary">
          Credentials that showcase my commitment to continuous learning and
          professional growth{" "}
        </p>

        <div className="about-cards-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="about-card">
              <h4>{cert.title}</h4>
              <p>
                <strong>{cert.issuer}</strong>
              </p>
              <p>{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificate;
