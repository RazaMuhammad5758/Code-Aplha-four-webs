import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Column 1 */}
          <div className="footer-col">
            <h3>Download Our App</h3>
            <p>Download the app for Android and iOS mobile phones.</p>
            <div className="app-logos">
              <img src="/images/play-store.png" alt="Google Play" />
              <img src="/images/app-store.png" alt="App Store" />
            </div>
          </div>
          {/* Column 2 */}
          <div className="footer-col">
            <img className="footer-logo" src="/images/logo-white.png" alt="Logo" />
            <p>
              Our purpose is to sustainably make the pleasure and benefits of sports
              accessible to many.
            </p>
          </div>
          {/* Column 3 */}
          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2023 - RedStore</p>
      </div>
    </footer>
  );
};

export default Footer;
