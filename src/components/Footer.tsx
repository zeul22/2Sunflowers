import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Brand */}
        <div className={styles.brand}>
          <h2>2Sunflowers</h2>
          <p>Connecting sunflower lovers with each other.</p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link  to="/community">Community</Link></li>
            <li><Link  to="/blog">Blog</Link></li>
            <li><Link  to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} 2Sunflowers — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;





