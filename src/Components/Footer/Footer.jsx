import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Abhijeet Kasar!</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/abhijeet-kasar-048938171/"
            className="footer_social_link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          {/* <a
            href="https://www.instagram.com/joy_agrawal_/"
            className="footer_social_link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a> */}
          <a
            href="https://github.com/Abhijeetkasar97"
            className="footer_social_link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Abhijeet Kasar! . All rigths reserved , 2025 .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
