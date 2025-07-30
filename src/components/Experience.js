import React from 'react';
import Footer from './Footer';
import '../Styles/Home.css';
import '../Styles/Projects.css'; // Reuse Projects.css for grid/card style


const experiences = [
  {
    role: "AI-ML Virtual Internship",
    company: "India Edu Program – Google for Developers",
    duration: "Jan 2025 - Mar 2025",
    description: "Completed a virtual internship on Artificial Intelligence and Machine Learning fundamentals through Google's India Edu Program. Gained hands-on exposure to core ML concepts like supervised learning, evaluation metrics, and model building using tools such as scikit-learn and TensorFlow. Strengthened understanding of practical AI/ML workflows and ethical considerations in deploying intelligent systems.",
    certificateLink: "https://drive.google.com/file/d/1-suUgda8JCoplFNwBE3kKAiUr33pumTo/view?usp=sharing"
  },
  {
  role: "ServiceNow Administration Intern",
  company: "SmartBridge x APSCHE",
  duration: "May 2025 – Jul 2025",
  description:
    "Completed a 2-month virtual internship on ServiceNow Administration, organized by SmartBridge in collaboration with APSCHE. Gained practical experience in low-code development, form design, table configuration, client/server scripts, and process automation using Flow Designer. Developed a student management system as a capstone project, showcasing the ability to build scalable and efficient enterprise apps on the ServiceNow platform.",
  certificateLink: "https://drive.google.com/file/d/1rdax03lmWLsaTQl6A52IZ7oq7Ad0kIzy/view?usp=sharing"
}

];

function Experience() {
  return (
    <div className="home-container">
      <div style={{ marginBottom: '40px' }}>
        
      </div>

      <section className="projects-preview">
        <h3>👔 My Experience</h3>
        <p className="summary" style={{ marginBottom: '40px' }}>
          From challenges to breakthroughs — a journey through the milestones that shaped my craft.
        </p>

        <div className="projects-grid">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="projects-grid-item"
              style={{
                backgroundColor: '#e0f2fe',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 6px 18px rgba(2, 132, 199, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                color: '#0f172a',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(2, 132, 199, 0.3)';
                e.currentTarget.style.backgroundColor = '#0284c7';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(2, 132, 199, 0.1)';
                e.currentTarget.style.backgroundColor = '#e0f2fe';
                e.currentTarget.style.color = '#0f172a';
              }}
            >
              <h4 style={{ marginBottom: '12px' }}>{exp.role}</h4>
              <p style={{ fontWeight: '600', marginBottom: '6px' }}>{exp.company}</p>
              <p style={{ fontStyle: 'italic', marginBottom: '12px' }}>{exp.duration}</p>
              <p style={{ textAlign: 'justify' }}>{exp.description}</p>
              {exp.certificateLink && (
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  🎓 View Certificate
                </a>

                )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Experience;
