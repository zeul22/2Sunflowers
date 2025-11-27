import React from 'react'
import Btn from './Button.module.scss'

interface Button {
  text: string
  workFn?: () => void
}
const Button: React.FC<Button> = ({ text, workFn }) => {
  return (
    <button className={Btn.btnBox} onClick={workFn} type="button">
      {text}
    </button>
  )
}

export default Button
