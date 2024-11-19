import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>The Wardrobe Co.</h2>
          <p>
            Your one-stop shop for the latest fashion trends. Discover new
            collections and enjoy exclusive offers tailored for you.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/mens">Men</a>
            </li>
            <li>
              <a href="/womens">Women</a>
            </li>
            <li>
              <a href="/kids">Kids</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@wardrobe.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Fashion Lane, Style City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 The Wardrobe Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
