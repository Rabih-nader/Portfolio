import React from 'react';
import './css/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" style={{ marginTop: '100px' }}>
      <div className="contact-container">
        <div className="contact-header">
          {/* <h2>Contact</h2>
          <p>Feel free to get in touch with me</p> */}
          <h2>Feel free to get in touch with me</h2>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <div className="shadow">
              <div className="text-box">
                <input type="text" placeholder="Full Name" id="name" />
                <input type="email" placeholder="Email" id="email" />
                <textarea
                  className="text-area"
                  id="message"
                  placeholder="Type your message here"
                  rows="4"
                />
                <button className="button-submit">Submit</button>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <p className="p">
              Address: Hanmer Street east <br />
              
              Phone: 1 (705) 241-7389<br />
              
              Email: Rabih.nadir@gmail.com<br />
            </p>

            <div className="icon-style">
              <a
                href="https://www.facebook.com/your-facebook-page-url"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/your-instagram-url"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/rabih-nader-b5345216a"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <a
                href="https://www.twitter.com/your-twitter-url"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
