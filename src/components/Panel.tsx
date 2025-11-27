import React from 'react'
import { Link } from 'react-router-dom'
import style from './Panel.module.scss'

const highlights = [
  { title: 'Handpicked stems', copy: 'Curated bouquets from trusted florists, refreshed daily.' },
  { title: 'Side-by-side compare', copy: 'Check price, photos, and sources before you buy.' },
  { title: 'Instant checkout', copy: 'Jump straight to the store page with one tap.' },
]

const steps = [
  { label: '01', title: 'Explore', copy: 'Skim the hero picks or browse the catalog.' },
  { label: '02', title: 'Compare', copy: 'Filter by brand and see real product photos.' },
  { label: '03', title: 'Send', copy: 'Tap through to checkout and brighten someone’s day.' },
]

const Panel: React.FC = () => {
  return (
    <div className={style.page}>
      <section className={style.hero}>
        <div className={style.heroContent}>
          <div className={style.badge}>Blooms, sorted daily</div>
          <h1>
            Send flowers
            <br />
            without guessing
          </h1>
          <p className={style.lead}>
            2Sunflowers pulls bouquets from multiple partners so you can scan the best picks, compare in seconds, and deliver joy faster.
          </p>
          <div className={style.ctaRow}>
            <Link to="/order" className={`${style.button} ${style.primary}`}>
              Start an order
            </Link>
            <Link to="/compare" className={`${style.button} ${style.secondary}`}>
              Compare bouquets
            </Link>
          </div>
          <div className={style.heroStats}>
            <div>
              <strong>500+</strong>
              <span>fresh products monitored</span>
            </div>
            <div>
              <strong>3 partners</strong>
              <span>FNP · FlowerAura · InterFlora</span>
            </div>
            <div>
              <strong>Under 2 min</strong>
              <span>to pick and click through</span>
            </div>
          </div>
        </div>

        <div className={style.heroCard}>
          <div className={style.cardTop}>
            <p className={style.cardLabel}>Today’s curation</p>
            <span className={style.cardPill}>Bright & bold</span>
          </div>
          <div className={style.cardBody}>
            <div className={style.cardImage} />
            <div className={style.cardText}>
              <h3>Sunrise Delight</h3>
              <p>Orange roses, yellow lilies, and a pop of white mums.</p>
              <div className={style.cardMeta}>
                <span className={style.price}>Rs 1899</span>
                <Link to="/compare" className={style.cardLink}>
                  View picks
                </Link>
              </div>
            </div>
          </div>
          <div className={style.progressWrap}>
            <div className={style.progress} />
            <p>Now trending in Delhi • Updated hourly</p>
          </div>
        </div>
      </section>

      <section className={style.highlights}>
        {highlights.map((item) => (
          <div key={item.title} className={style.highlightCard}>
            <p className={style.eyebrow}>Why 2Sunflowers</p>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </section>

      <section className={style.steps}>
        <div className={style.sectionHeader}>
          <p className={style.eyebrow}>How it works</p>
          <h2>From idea to doorstep</h2>
          <p className={style.muted}>A simple, confident flow to help you choose the right bouquet.</p>
        </div>
        <div className={style.stepsGrid}>
          {steps.map((step) => (
            <div key={step.label} className={style.stepCard}>
              <span className={style.stepLabel}>{step.label}</span>
              <h4>{step.title}</h4>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Panel
