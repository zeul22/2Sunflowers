import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.badge}>2Sunflowers</div>
          <h3>Fresh stems, faster choices.</h3>
          <p>Compare bouquets across partners and send the perfect arrangement without second guessing.</p>
          <div className={styles.ctaRow}>
            <Link to="/order">Start an order</Link>
            <Link to="/compare" className={styles.ghost}>
              Compare now
            </Link>
          </div>
        </div>

        <div className={styles.columns}>
          <div>
            <p className={styles.eyebrow}>Explore</p>
            <Link to="/about">About</Link>
            <Link to="/dashboard/sellers">Sell with us</Link>
            <Link to="/compare">Compare</Link>
          </div>
          <div>
            <p className={styles.eyebrow}>Support</p>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} 2Sunflowers — All rights reserved.</p>
        <span>Made with sunshine and swift deliveries.</span>
      </div>
    </footer>
  )
}

export default Footer




