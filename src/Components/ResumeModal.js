import React from 'react';
import './css/Modal.css';

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="resume">
          <h1>Rabih Nader</h1>
          <p>705 241 7389 • Hanmer Street East, Barrie, ON • rabih.nadr@gmail.com</p>
          <div className="section">
            <h2>PROFESSIONAL SUMMARY</h2>
            <p>
              Software Developer with experience in web application development using ASP.net, C#, and LINQ, and proficiency in HTML5, CSS3, and Bootstrap for responsive web design. Skilled in Adobe Photoshop, Figma, and GitHub for design and collaboration. Strong analytical and computational skills with a focus on team building and able to work individually as well as in a team.
            </p>
          </div>
          <div className="section">
            <h2>WORK EXPERIENCE</h2>
            <p>
              <strong>Software Developer | CodeWave | Nabatiyeh, Lebanon | 04/2019 – 06/2022</strong><br />
              • Gathered requirements, analyzed, designed, and implemented web applications using ASP.net, Dot net nuke, C#, and LINQ.<br />
              • Implemented responsive design using HTML5, CSS3, and Bootstrap.<br />
              • Collaborated with other developers using GitHub for version control and project management.
            </p>
            <p>
              <strong>IT Technical Support | Al Jaber Engineering | Doha, Qatar | 12/2016 – 04/2019</strong><br />
              • Provided technical support and troubleshooting for personal computers, laptops, printers, and other devices to ensure effective use of technology.<br />
              • Maintained security of employees' personal computers and laptops by installing operating system updates and virus protection.<br />
              • Prepared equipment for conference rooms, ensuring everything was in working order for meetings.<br />
              • Supported employees with applications, computers, and printers as needed.
            </p>
            <p>
              <strong>Software Developer | Al Jaber Engineering | Doha, Qatar | 08/2015 – 10/2016</strong><br />
              • Designed and developed forms for SharePoint internal system utilizing InfoPath.<br />
              • Created visually appealing front-end interfaces for the internal system using HTML, CSS, and JavaScript.<br />
              • Collaborated with cross-functional teams to establish effective workflow plans and ensure seamless coordination between departments.
            </p>
          </div>
          <div className="section">
            <h2>EDUCATION</h2>
            <p>
              <strong>Postgraduate – Mobile Application Development 04-2023</strong><br />
              Georgian College – Barrie, Ontario
            </p>
            <p>
              <strong>Master of Computer Science 02-2020</strong><br />
              American University of Culture and Education- Nabatiyeh, Lebanon
            </p>
            <p>
              <strong>Bachelor of Science – Computer Science 06-2015</strong><br />
              American University of Culture and Education- Nabatiyeh, Lebanon
            </p>
            <p>
              <strong>Technical Baccalaureate – Information Technology 09-2011</strong><br />
              Al-Afak Institute – Nabatiyeh, Lebanon
            </p>
          </div>
          <div className="section">
            <h2>PROFESSIONAL SKILLS</h2>
            <p>
              • ASP.net, Dot net nuke, C#, and LINQ for web application development.<br />
              • HTML5, CSS3, and Bootstrap for responsive web design.<br />
              • Adobe Photoshop and Figma for designing visually appealing web pages and mobile applications.<br />
              • GitHub for version control and collaboration with other developers.<br />
              • Technical support and troubleshooting for personal computers, laptops, and printers.<br />
              • Microsoft Office applications (Word, Excel, InfoPath).<br />
              • Analytical and computational skills to analyze requirements and implement new workflows.<br />
              • Communication skills with a focus on team building and able to work individually as well as in a team.<br />
              • Organizational and problem-solving abilities.
            </p>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
}

export default ResumeModal;
