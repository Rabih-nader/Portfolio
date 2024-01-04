import React from 'react';
import './css/Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Rabih Nader. All rights reserved.</p>
        <button className="scroll-button" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
