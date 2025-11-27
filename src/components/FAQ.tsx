import React from 'react'
import styles from './FAQ.module.scss'

const faqs = [
  {
    q: 'How do you compare bouquets?',
    a: 'We pull live products from multiple partners and show price, photo, and source side-by-side so you can choose quickly.',
  },
  {
    q: 'Can I switch between light and dark themes?',
    a: 'Yes! Use the toggle in the header to switch. Your choice is remembered for your next visit.',
  },
  {
    q: 'Do you sell the flowers directly?',
    a: 'We help you discover and compare. When you click through, you complete the purchase with the partner store.',
  },
  {
    q: 'How often is pricing refreshed?',
    a: 'We fetch partner data regularly and surface the latest prices available at the time you browse.',
  },
  {
    q: 'Is there a cost to use 2Sunflowers?',
    a: 'Browsing and comparing is free. You only pay the partner store when you place an order.',
  },
  {
    q: 'Can I schedule deliveries in advance?',
    a: 'Yes. When you click through to a partner store, choose their scheduled delivery option to set the date and time.',
  },
  {
    q: 'Where do you currently deliver?',
    a: 'Our partners primarily deliver across major Indian cities. Availability varies per partner; check the address on checkout.',
  },
  {
    q: 'Do you support weekly or monthly subscriptions?',
    a: 'We plan to surface partner subscription options soon. For now, you can manually reorder favorites in a few clicks.',
  },
  {
    q: 'How do I report an issue with an order?',
    a: 'Contact the partner store for delivery issues. If you spot data errors on 2Sunflowers, message us via the contact form.',
  },
  {
    q: 'Can I save favorite bouquets?',
    a: 'We’re building a favorites locker. Meanwhile, keep the compare tab open or bookmark the product links you like.',
  },
]

const FAQ: React.FC = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>FAQ</p>
          <h1>Questions about ordering or comparing flowers?</h1>
          <p className={styles.lead}>Quick answers to the most common things we hear from the 2Sunflowers community.</p>
        </div>
      </section>

      <section className={styles.list}>
        {faqs.map((item) => (
          <details key={item.q} className={styles.item}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>
    </div>
  )
}

export default FAQ
