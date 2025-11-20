import React from 'react'
import Btn from "./Button.module.scss"

interface Button{
    text:string,
    workFn?:()=>void
}
const Button:React.FC<Button> = (props:Button) => {
  return (
    <div className={`${Btn.btnBox}`} onClick={props.workFn}>{props.text}</div>
  )
}

export default Button