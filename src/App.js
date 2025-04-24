import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>Stephan Gani | ReactJS Resume Test Program</h1>
        <p className="contact-info">Email: Stephan@ThisIsJustATest.com | Phone: (123) 456-7890</p>
      </header>

      <section className="section">
        <h2>Professional Summary</h2>
        <p>Experienced security analyst and software developer with a passion for creating efficient and user-friendly applications. 
           Strong problem-solving skills and a commitment to writing clean, maintainable code.</p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bsc (Hons) in Computer Science</h3>
          <p>Nile University of Nigeria, 2016-2021</p>
        </div>
        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            <li>Certified Ethical Hacker (CEH) - EC-Council, 2022</li>
            <li>CompTIA Security+ - CompTIA, 2021</li>
            <li>Microsoft Certified: Azure Security Engineer Associate - Microsoft, 2023</li>
          </ul>
        </div>
      </section>

      <div className="experience-and-skills">
        <section className="section experience-section">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <h3>Software Developer & Operations Manager</h3>
            <p>Groove Tech, 2022-2024</p>
            <ul>
              <li>Developed and maintained web applications using React.js</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software</li>
              <li>Implemented responsive designs and optimized application performance</li>
            </ul>
          </div>
        </section>

        <section className="section skills-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Node.js, React.js & Next.js</li>
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>Golang</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Cloud Security</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App; 