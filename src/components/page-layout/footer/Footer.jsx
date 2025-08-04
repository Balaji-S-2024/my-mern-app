import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glass">
        <div className="footer-sections">
          <div className="footer-column">
            <h4> Help</h4>
            <ul>
              <li>Help Center</li>
              <li>Help Form</li>
              <li>Video Tutorials</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li>Blogger Buzzz</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4> Developer</h4>
            <ul>
              <li>Blogger API</li>
              <li>Developer Forum</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p> Terms of Service</p>
          <p> Privacy</p>
          <p> Content Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
