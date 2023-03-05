import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              AUV
              <i className="fas fa-water" />
            </Link>
          </div>
          <small className="website-rights">Robosub © 2023</small>
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
			        href="https://www.instagram.com/auvcalstatela/?hl=en"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.youtube.com/channel/UC4nhzXkauvCcCjmJ-_1YL3Q"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
