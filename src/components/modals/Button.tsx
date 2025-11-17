import React from 'react'
import Btn from "./Button.module.scss"

interface Button{
    text:string,

}
const Button = (props:Button) => {
  return (
    <div className={`${Btn.btnBox}`}>{props.text}</div>
  )
}

export default Button