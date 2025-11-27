import React from 'react'
import { Link } from 'react-router-dom'
import Input from './modals/Input'
import Button from './modals/Button'
import style from './Login.module.scss'

const Login: React.FC = () => {
  return (
    <div className={style.authPage}>
      <div className={style.card}>
        <div className={style.formSide}>
          <p className={style.eyebrow}>Welcome back</p>
          <h1>Sign in to keep the blooms flowing</h1>
          <p className={style.muted}>Track your orders, compare bouquets, and send surprises in under two minutes.</p>

          <div className={style.form}>
            <Input label="Email" name="Email" tov="email" />
            <Input label="Password" name="Password" tov="password" />
            <div className={style.formExtras}>
              <label className={style.checkbox}>
                <input type="checkbox" /> <span>Keep me signed in</span>
              </label>
              <a href="#" className={style.link}>
                Forgot password?
              </a>
            </div>
            <Button text="Login" />
            <p className={style.switch}>
              New here? <Link to="/signup">Create an account</Link>
            </p>
          </div>
        </div>

        <div className={style.artSide}>
          <div className={style.glow} />
          <div className={style.artCard}>
            <span>Fresh pick</span>
            <h3>Golden Hour Bouquet</h3>
            <p>Roses, lilies, and chrysanthemums curated from our top partners.</p>
            <div className={style.metaRow}>
              <div>
                <strong>Rs 1999</strong>
                <small>Avg. price</small>
              </div>
              <div>
                <strong>3 partners</strong>
                <small>live right now</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
