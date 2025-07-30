import React from "react";
import Footer from "../Footer";
import "../../Styles/Home.css";
import "../../Styles/About.css";


const activityData = [
  {
    icon: "🎨",
    title: "Poster Presentation - Big Data",
    description: "Secured 2nd Prize in Poster Presentation on Big Data at JNTU Anantapur, showcasing research creativity and technical articulation.",
    certificateLink: "https://drive.google.com/file/d/1GaWvdu7RwwFyHSb3QE-6AhsCWIgJFohO/view?usp=sharing"
  },
  {
    icon: "🏃‍♀️",
    title: "Care-a-thon Participant – ABHA Health App",
    description: "Participated in the Care-a-thon event at Mohan Mantra 2K24, Mohan Babu University. Collaborated on building a prototype of the ABHA (Ayushman Bharat Health Account) medical application to promote digital health record accessibility and awareness under India's National Digital Health Mission.",
    certificateLink: "https://drive.google.com/file/d/1Ot1NIx6RAiKSInlns0NJaiJUh6vfcOKB/view?usp=sharing"
  },
  {
    icon: "💙",
    title: "SARO Club Member",
    description: "Active contributor to SARO (Save A Rupee Organization), leading donation drives, promoting social impact campaigns, and supporting peers in crisis."
  },
  {
    icon: "📚",
    title: "English Club Member",
    description: "Engaged in speaking sessions, debates, and creative writing activities aimed at improving communication and confidence through language enrichment."
  },
  {
  icon: "🚀",
  title: "Innovation & Entrepreneurship Involvement",
  description: "Active member of the Institution’s Innovation Council (IIC), participating in ideation and startup-focused events. Also completed the IGNITE 7.0 Entrepreneurship Training Program by AIC-SKU & Institute of Inspiring Innovations, gaining practical exposure to business models, leadership, and innovation strategies.",
  certificateLink: "https://drive.google.com/file/d/1oSE2vo38cobaX46DgyF4rtkeThbxdpvg/view?usp=sharing"
},
];

const Activities = () => {
  return (
    <div className="home-container">
      <div style={{ marginBottom: "40px" }}>
        
      </div>

      <section className="projects-preview">
        <h3>🏆 Extracurricular Activities</h3>
        <p className="summary skills-summary">
          Shaping skills beyond the classroom — where leadership, creativity, and passion thrive.
        </p>

        <div className="about-cards-grid">
          {activityData.map((item, index) => (
  <div key={index} className="about-card">
    <div className="skill-item">
      <span className="skill-emoji">{item.icon}</span>
      <span className="skill-text">{item.title}</span>
      <p>{item.description}</p>
      {item.certificateLink && (
        <a
          href={item.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View Certificate
        </a>
      )}
   
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
