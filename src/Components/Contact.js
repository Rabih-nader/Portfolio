import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

import './css/Contact.css';

function Contact() {
  const [emailValidation, setEmailValidation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validate email address
    const isEmailValid = validateEmail(formData.email);

    if (!isEmailValid) {
      setEmailValidation('Please enter a valid email address.');
      alert('Please enter a valid email address.');
      return;
    } else {
      setEmailValidation(null);
    }

    // Use your emailjs logic here to send the email
    try {
      await emailjs.send('service_gvti51d', 'template_cylaj03', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, 'zWv1Ew5yoLSvU2q4l');

      console.log('Email sent successfully!');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Email sending failed. Please try again.');
    }
  };

  return (
    <section id="contact" style={{ marginTop: '100px' }}>
      <div className="contact-container">
        <div className="contact-header">
          <h2>Feel free to get in touch with me</h2>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <div className="text-box">
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {emailValidation && <p className="validation-error">{emailValidation}</p>}
                <textarea
                  className="text-area"
                  name="message"
                  placeholder="Type your message here"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button className="button-submit" type="submit">Submit</button>
              </form>
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
                href="https://www.instagram.com/rabih.n_/?igsh=ejAxdG91NjNzYXNx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/rabih-nader-b5345216a/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
