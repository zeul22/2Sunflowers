import React from 'react'
import inputStyle from './Input.module.scss'

interface FormInput {
  name: string
  label: string
  tov: string // value type
}

const Input: React.FC<FormInput> = ({ label, tov }) => {
  return (
    <label className={inputStyle.inputBox}>
      <span>{label}</span>
      <input type={tov} placeholder={label} />
    </label>
  )
}

export default Input
