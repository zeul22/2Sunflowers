import React from 'react'
import styles from './Contact.module.scss'

const Contact: React.FC = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Contact us</p>
          <h1>We’re here to help you send joy</h1>
          <p className={styles.lead}>
            Questions, feedback, partnership ideas, or bouquet requests—drop us a note and we’ll reply quickly.
          </p>
          <div className={styles.meta}>
            <div>
              <strong>Support hours</strong>
              <span>Mon - Sat, 9am - 7pm IST</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>hello@2sunflowers.com</span>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <form className={styles.form}>
            <div className={styles.row}>
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your full name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@example.com" />
              </label>
            </div>
            <label>
              <span>Phone</span>
              <input type="tel" placeholder="+91 98765 43210" />
            </label>
            <label>
              <span>Topic</span>
              <select defaultValue="support">
                <option value="support">Order or support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              <span>Message</span>
              <textarea placeholder="Share how we can help"></textarea>
            </label>
            <button type="button">Send message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
