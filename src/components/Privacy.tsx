import React from 'react'
import styles from './Privacy.module.scss'

const sections = [
  {
    title: 'What data we collect',
    body:
      'When you browse 2Sunflowers, we collect non-identifying analytics (pages viewed, clicks, device type). If you sign up, we store your account details (name, email, login info). When you click through to a partner store, we may log that click to understand interest, but purchases happen on the partner site.',
  },
  {
    title: 'How we use your data',
    body:
      'We use data to improve search, comparison quality, and recommendations. We also use contact info to send transactional emails (signup, account notices) and opt-in updates (news, product tips) if you subscribe.',
  },
  {
    title: 'What we do not do',
    body:
      'We do not sell your personal data. We do not store payment information; all transactions occur directly on partner sites. We do not track you across unrelated sites.',
  },
  {
    title: 'Cookies and tracking',
    body:
      'We use minimal cookies for session management and analytics. You can disable non-essential cookies in your browser. Blocking cookies may limit personalization.',
  },
  {
    title: 'Data sharing',
    body:
      'We may share aggregated, anonymized insights with partners (e.g., product popularity). We only share personal data when required by law or to provide core services (e.g., hosting, analytics processors) under strict confidentiality.',
  },
  {
    title: 'Data retention',
    body:
      'We retain account data while your account is active. You can request deletion at any time; we will remove your data unless retention is required by law.',
  },
  {
    title: 'Your controls',
    body:
      'You can access, update, or delete your account data by contacting us. You can opt out of marketing emails at any time via unsubscribe links.',
  },
  {
    title: 'Security',
    body:
      'We use industry-standard encryption in transit and restrict access to operational staff. No online service is 100% secure; report any concerns to security@2sunflowers.com.',
  },
  {
    title: 'Contact',
    body:
      'For privacy questions or requests, reach us at privacy@2sunflowers.com or via the contact form.',
  },
]

const Privacy: React.FC = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Privacy</p>
        <h1>Your trust, your data</h1>
        <p className={styles.lead}>
          We keep data collection minimal, never sell your information, and give you clear controls. Here’s how we handle your info on
          2Sunflowers.
        </p>
      </section>

      <section className={styles.grid}>
        {sections.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Need to manage your data?</h2>
          <p>Write to privacy@2sunflowers.com with your request (access, update, delete). We respond quickly.</p>
        </div>
        <button type="button">Contact privacy team</button>
      </section>
    </div>
  )
}

export default Privacy
