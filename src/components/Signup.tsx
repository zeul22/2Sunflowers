import React from 'react'
import { Link } from 'react-router-dom'
import Input from './modals/Input'
import Button from './modals/Button'
import style from './Login.module.scss'

const Signup: React.FC = () => {
  return (
    <div className={style.authPage}>
      <div className={style.card}>
        <div className={style.formSide}>
          <p className={style.eyebrow}>Join the bloom club</p>
          <h1>Create your account</h1>
          <p className={style.muted}>Save favorites, compare faster, and send flowers with confidence.</p>

          <div className={style.form}>
            <div className={style.row}>
              <Input label="First name" name="First Name" tov="text" />
              <Input label="Last name" name="Last Name" tov="text" />
            </div>
            <Input label="Email" name="Email" tov="email" />
            <Input label="Phone number" name="Phone Number" tov="tel" />
            <Input label="Username" name="Username" tov="text" />
            <Input label="Password" name="Password" tov="password" />
            <Button text="Create account" />
            <p className={style.switch}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>

        <div className={style.artSide}>
          <div className={style.glow} />
          <div className={style.artCard}>
            <span>Perk</span>
            <h3>Save your top bouquets</h3>
            <p>Keep track of favorites across FNP, FlowerAura, and InterFlora in one view.</p>
            <div className={style.metaRow}>
              <div>
                <strong>Fast</strong>
                <small>compare in seconds</small>
              </div>
              <div>
                <strong>Secure</strong>
                <small>login protected</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
