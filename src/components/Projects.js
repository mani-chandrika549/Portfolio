import React, { useEffect, useRef } from 'react';
import Footer from './Footer';
import '../Styles/Home.css';
import '../Styles/Projects.css';

import { useLocation, useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "SaroHub – Donation & Event Management Platform",
    description:
      "Developed a full-stack web application to support student-led donations and event registrations under the SARO Club initiative. The platform streamlines emergency donations via UPI, fine payments with screenshot proof uploads, and real-time event registrations with automatic email confirmations. Features a user-friendly dashboard for administrators to track submissions and manage incoming support efficiently. Emphasis was placed on secure form validation, responsive UI, and database integration to ensure smooth and transparent operations.\nSkills: HTML, CSS, Bootstrap, JavaScript, PHP, MySQL ",
    link: "https://github.com/mani-chandrika549/SaroHub-Where-Every-Donation-Makes-a-Difference",
    liveLink: "https://saroclub.infinityfreeapp.com/"
  },
  {
    title: "Educational Organisation – ServiceNow Management System",
    description:
      "Designed and implemented a custom low-code student management system as part of the APSCHE VIP Program using the ServiceNow platform. The application enables automated student admissions, academic progress tracking, and secure data handling through Glide Tables and role-based access. Incorporated Workflows, UI Policies, Client Scripts, and Business Rules to ensure dynamic form behavior, validation, and backend automation. This project highlights proficiency in ServiceNow app development, process design, and low-code platform integration.\nSkills: ServiceNow, Glide Tables, Workflows, UI Policies, Client Scripts, Business Rules",
    link: "https://github.com/mani-chandrika549/Educational-Organisation-using-Service-Now",
    liveLink: "https://drive.google.com/file/d/16oozaZLHFgpER5Fd7pnexuqMT7qg1DOA/view?usp=sharing"
  },
  {
    title: "Personal Portfolio Website – Interactive Developer Showcase",
  description:
    "Designed and developed a responsive personal portfolio website to highlight projects, skills, and accomplishments with a focus on modern web standards and smooth user interactions. Built using React.js, the site features an interactive card-based layout in the “About” section for exploring Education, Certifications, and Extracurricular Activities. Implemented section-based scrolling, smooth navigation, and responsive design to ensure a seamless experience across devices. Each project includes detailed descriptions, technologies used, and direct GitHub links to demonstrate both frontend finesse and technical depth. \n Skills: React.js, JavaScript, HTML, CSS, Responsive Design, UI/UX Design, Component-Based Architecture",                                                                                                                                
  link: "https://github.com/mani-chandrika549/Portfolio", // replace with actual link
  liveLink: "your-portfolio-live-link" // replace with actual link
  }
];

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  const projectRefs = useRef([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const highlight = params.get('highlight');

    if (highlight && projectRefs.current.length > 0) {
      const index = projects.findIndex(
        (proj) => proj.title.toLowerCase() === highlight.toLowerCase()
      );

      if (index !== -1 && projectRefs.current[index]) {
        const card = projectRefs.current[index];
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('highlight-card');

        const timeout = setTimeout(() => {
          card.classList.remove('highlight-card');
        }, 3000);

        return () => clearTimeout(timeout);
      }
    }
  }, [location.search]);

  const handleUnavailableRedirect = (e) => {
    e.preventDefault();
    navigate('/live-unavailable');
  };

  return (
    <div className="home-container">
      <div style={{ marginBottom: '40px' }}>
       
      </div>

      <section className="projects-preview">
        <h3>🚀 Welcome to My Projects</h3>
        <p className="summary" style={{ marginBottom: '40px' }}>
          Each project here is a milestone in my journey as a developer — built with passion, learning, and curiosity.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (projectRefs.current[i] = el)}
              className="projects-grid-item"
              style={{
                backgroundColor: '#e0f2fe',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 6px 18px rgba(2, 132, 199, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                color: '#0f172a',
              }}
              onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-8px)';
  e.currentTarget.style.boxShadow = '0 12px 30px rgba(2, 132, 199, 0.3)';
  e.currentTarget.style.backgroundColor = '#0284c7';
  e.currentTarget.style.color = '#ffffff';

  // Change inner links to white
  const links = e.currentTarget.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = '#ffffff';
  });
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 6px 18px rgba(2, 132, 199, 0.1)';
  e.currentTarget.style.backgroundColor = '#e0f2fe';
  e.currentTarget.style.color = '#0f172a';

  // Reset link colors to default
  const links = e.currentTarget.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = '#0284c7';
  });
}}

            >
              <h4 style={{ marginBottom: '12px' }}>{project.title}</h4>
              <p style={{ marginBottom: '12px', textAlign: 'justify' }}>
                {project.description.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <div>
                <a
                  href={project.link && project.link.trim() !== "" ? project.link : "/live-unavailable"}
                  target={project.link && project.link.trim() !== "" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project on GitHub`}
                  style={{
                    color: '#0284c7',
                    fontWeight: '600',
                    textDecoration: 'underline',
                    marginRight: '20px',
                    transition: 'color 0.3s ease'
                  }}
                  onClick={(e) => {
                    if (!project.link || project.link.trim() === "") {
                      handleUnavailableRedirect(e);
                    }
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0284c7')}
                >
                  View Project
                </a>
                <a
                  href={project.liveLink && project.liveLink.trim() !== "" ? project.liveLink : "/live-unavailable"}
                  target={project.liveLink && project.liveLink.trim() !== "" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  style={{
                    color: '#0284c7',
                    fontWeight: '600',
                    textDecoration: 'underline',
                    transition: 'color 0.3s ease'
                  }}
                  onClick={(e) => {
                    if (!project.liveLink || project.liveLink.trim() === "") {
                      handleUnavailableRedirect(e);
                    }
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0284c7')}
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;
