import React from 'react'
import imgStyle from "./Panel.module.scss"
const Panel = () => {
  return (
    <>
    <div className={`${imgStyle.imgDiv}`}>
        {/* <img src="/src/assets/bg.png" alt="" /> */}
        <h1 className={`${imgStyle.gradientText} ${imgStyle.textStyle}`}>2Sunflowers</h1>
      </div> 
    </>
  )
}

export default Panel