import React from 'react';
import Footer from './Footer';
import '../Styles/Home.css';
import '../Styles/Skills.css'; // New CSS file


const skillsData = {
  "💻 Languages": ["C Programming","Java(Core)","Python","JavaScript"],
  "🌐 Web Technologies": ["HTML", "CSS","Bootstrap", "JavaScript", "PHP","MySQL"],
  "🗄️ Database": ["SQL"],
  "⚙️ Dev Tools": ["Git", "GitHub", "Linux","VS Code","Canva","Figma"],
  "🏗️ Frame Works": ["React.js","Django"],
  "🧠 ML Libraries & Tools":["scikit-learn","Pandas", "NumPy","Matplotlib","Seaborn", "TensorFlow (basic)","OpenAI API"],
  "🛠️ ServiceNow": ["Core ServiceNow Skills", "Development Skills", "Customization & UI/UX", "Security & Access Control", "Other Platform Capabilities"],
  "🧩 Other Skills": ["Object-oriented Programming", "Data Structures", "Agile Methodology"],
  "🧠 Soft Skills":["Time Management","Good Commumication","Team Leader","Adaptability"]
};

function Skills() {
  return (
    <div className="home-container">
    <div style={{ marginBottom: '40px' }}>
        
      </div>

      <section className="projects-preview">
        <h3>💡 My Technical Skills</h3>
        <p className="summary skills-summary">
          Here’s a glimpse into the tools and talents that turn ideas into impact.
        </p>

        <div className="skills-cards-container">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div
              key={index}
              className="projects-grid-item skills-card"
            >
              <h4>{category}</h4>
              <ul>
                {skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Skills;
