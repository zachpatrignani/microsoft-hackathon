import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <a href="https://github.com/zachpatrignani/microsoft-hackathon">&copy; {new Date().getFullYear()} All rights reserved. | Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;