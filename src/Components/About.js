// About.js

import React, { useState } from 'react';
import ResumeModal from './ResumeModal'; // Import the modal component
import './css/About.css';

function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="section" id="about">
      <div className="about-content">
        <div className="about-text-container">
          <h2>About Me</h2>
          <p>
            I am a results-driven Software Developer with a proven track record in web application development using ASP.net, C#, and LINQ. My proficiency extends to HTML5, CSS3, Bootstrap for responsive design, as well as ReactJS and JavaScript to enhance interactive and dynamic features. I also possess design skills in Adobe Photoshop and Figma, allowing me to create visually appealing interfaces. <br /> <br />
            Collaboration comes naturally to me, and I am adept at utilizing GitHub for effective version control and teamwork. My background in technical support, coupled with a Master's degree in Computer Science and a Postgraduate qualification in Mobile Application Development, reflects my commitment to holistic technological solutions.<br /> <br />
            I excel in both individual and team settings, owing to my strong analytical, communication, and organizational skills. These qualities make me a valuable asset in creating innovative and user-friendly software solutions.<br /> <br />
          </p>
        </div>
        <div className="container">
          <button className="button" onClick={openModal}>
            Resume
          </button>
        </div>
      </div>
      <ResumeModal isOpen={modalIsOpen} onClose={closeModal} />
    </section>
  );
}

export default About;
