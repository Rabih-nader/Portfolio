import React from 'react';
import { Link } from 'react-scroll';
import './css/Navbar.css';

function Navbar() {
  return (
    <header className="header">
      <nav id="navbar-example2" className="navbar navbar-fixed-top">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70} // You can adjust this offset value
              duration={500}
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70} // You can adjust this offset value
              duration={500}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70} // You can adjust this offset value
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} // You can adjust this offset value
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
