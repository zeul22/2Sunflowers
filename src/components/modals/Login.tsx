import React from 'react'
import Input from './Input'
import Button from './Button'
import style from "./Login.module.scss"
interface Format{
    email:string,
    password:string,

}
const Login = () => {
  return (
    <div>
        <Input label='Username' name='Username' tov='text' />
        <Input label='Password' name='Password' tov='text' />
        <div className={`${style.submitBtn}`}>
            <Button text='Submit' />
        </div>
    </div>
  )
}

export default Login