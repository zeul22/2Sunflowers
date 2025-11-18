import React from 'react'
import inputStyle from "./Input.module.scss"
interface FormInput{
    name:string,
    label:string,
    tov:string, //value type

}
const Input:React.FC<FormInput> = (props:FormInput) => {
  return (
    <>
        <div className={`${inputStyle.inputBox}`}>
            <input type={props.tov} placeholder={props.label} />
        </div>
    </>
  )
}

export default Input