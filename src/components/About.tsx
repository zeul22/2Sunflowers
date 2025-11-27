import React from 'react'
import { Link } from 'react-router-dom'
import style from './About.module.scss'

const values = [
  { title: 'Heart-led gifting', copy: 'Built from the simple joy of receiving sunflowers and wanting others to feel the same warmth.' },
  { title: 'No-guess shopping', copy: 'Compare bouquets across partners with real photos, prices, and sources before you click buy.' },
  { title: 'Community of blooms', copy: 'A place for sunflower lovers to swap stories, share photos, and brighten each other’s days.' },
]

const stats = [
  { label: 'Partners', value: '3', detail: 'FNP · FlowerAura · InterFlora' },
  { label: 'Bouquets tracked', value: '500+', detail: 'refreshed daily' },
  { label: 'Avg. time to choose', value: '2 min', detail: 'from browse to checkout' },
]

const About: React.FC = () => {
  return (
    <div className={style.page}>
      <section className={style.hero}>
        <div className={style.heroCopy}>
          <p className={style.eyebrow}>Our story</p>
          <h1>Born from a surprise bouquet of sunflowers</h1>
          <p className={style.lead}>
            Someone once sent sunflowers that shifted an ordinary day into a memory. 2Sunflowers is built so more people can give and receive that feeling—fast, confidently, and with the best bouquet for the moment.
          </p>
          <div className={style.ctaRow}>
            <Link to="/order" className={style.primary}>
              Start an order
            </Link>
            <Link to="/compare" className={style.secondary}>
              Compare bouquets
            </Link>
          </div>
          <div className={style.statRow}>
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.heroVisual}>
          <div className={style.glow} />
          <div className={style.photoCard}>
            <img src="/src/assets/sunflower.png" alt="Sunflower bouquet" />
            <div className={style.photoCaption}>
              <p>“For the ones who love sunflowers, and for the ones they love.”</p>
              <span>~ 2Sunflowers</span>
            </div>
          </div>
        </div>
      </section>

      <section className={style.story}>
        <div className={style.storyCard}>
          <p className={style.eyebrow}>Why we exist</p>
          <h2>Because joy should be easy to send</h2>
          <p>
            This platform was built from a gift of sunflowers that felt like pure light. We want more people to share that feeling without the guesswork—compare offers, pick the right bouquet, and have it land at their doorstep weekly or in a moment’s notice.
          </p>
          <p>
            We’re keeping 2Sunflowers updated with new partners and features so you can find peace, share warmth, and fill health with a little more color.
          </p>
        </div>
      </section>

      <section className={style.values}>
        {values.map((item) => (
          <div key={item.title} className={style.valueCard}>
            <p className={style.eyebrow}>Value</p>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </section>

      <section className={style.ctaBanner}>
        <div>
          <p className={style.eyebrow}>Join the bloom club</p>
          <h2>Stay close to the freshest picks</h2>
          <p className={style.muted}>
            Subscribe for weekly highlights, seasonal drops, and tips to make every bouquet last longer.
          </p>
        </div>
        <div className={style.bannerActions}>
          <button type="button">Notify me</button>
          <Link to="/about">Learn more</Link>
        </div>
      </section>
    </div>
  )
}

export default About
