import React from 'react'
import style from './OrderFlowers.module.scss'

const Orderflowers: React.FC = () => {
  return (
    <div className={style.page}>
      <section className={style.hero}>
        <div className={style.heroCopy}>
          <p className={style.eyebrow}>Send flowers</p>
          <h1>Place an order in minutes</h1>
          <p className={style.lead}>
            Tell us who you’re surprising, where it’s going, and when. We’ll surface the best bouquets from our partners so you can check out
            fast.
          </p>
          <div className={style.tags}>
            <span>Same-day eligible</span>
            <span>Light/Dark ready</span>
            <span>Trusted partners</span>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Orderflowers
