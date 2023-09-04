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
        <div style={{ width: '50%' }}>
          <h2 style={{ paddingBottom: '20px' }}>About Me</h2>
          <p style={{ paddingLeft: '12px', textAlign: "justify" }}>
            
          Rabih Nader is a results-driven Software Developer with a proven track record in web application development using ASP.net, C#, and LINQ, complemented by proficiency in HTML5, CSS3, and Bootstrap for responsive design.<br />
          His design skills extend to Adobe Photoshop and Figma, enhancing his ability to create visually appealing interfaces. <br />
          Collaborative by nature, Rabih is adept at utilizing GitHub for effective version control and teamwork. His technical support background, coupled with a Master's degree in Computer Science and a Postgraduate qualification in Mobile Application Development, reflects his commitment to holistic technological solutions.<br />
          With strong analytical, communication, and organizational skills, Rabih excels in both individual and team settings, making him a valuable asset in creating innovative and user-friendly software solutions.

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
