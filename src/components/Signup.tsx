import React from 'react'
import Input from './modals/Input'
import Button from './modals/Button'
import style from './Login.module.scss'

const Signup = () => {
  return (
   <div>
      <div className={`${style.loginSection}`}>
        <div>
          <img className={`${style.imgstyling}`}
            src="/src/assets/bg.png"
            alt=""
          />
        </div>
        <div className={`${style.loginBox}`}>
            <div className={`${style.signupName}`}>
            <Input label="First Name" name="First Name" tov="text" />
            <Input label="Last Name" name="Last Name" tov="text" />
            </div>
          <Input label="Email" name="Email" tov="email" />
          <Input label="Phone Number" name="Phone Number" tov="number" />
          <Input label="Username" name="Username" tov="text" />
          <Input label="Password" name="Password" tov="text" />
          <div className={`${style.submitBtn}`}>
            <Button text="Submit" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup