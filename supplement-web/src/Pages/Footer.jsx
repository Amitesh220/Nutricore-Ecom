import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="cool-footer">
      <div className="footer-content">
        <p>© 2025 Nutricore. All rights reserved.</p>
        <p>Developed by <a href="https://www.linkedin.com/in/amitesh-mishra-19bb5a26b">
        Amitesh Mishra
        </a>
            
             </p>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
