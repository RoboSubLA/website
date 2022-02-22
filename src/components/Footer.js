import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              AUV
              <i class="fas fa-water" />
            </Link>
          </div>
          <small class="website-rights">Robosub © 2022</small>
          <div class="social-icons">
            <a
              className="social-icon-link instagram"
			  href="https://www.instagram.com/auvcalstatela/?hl=en"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.youtube.com/channel/UC4nhzXkauvCcCjmJ-_1YL3Q"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
