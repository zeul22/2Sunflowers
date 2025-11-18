import React from "react";
import style from "./OrderFlowers.module.scss";
const Orderflowers: React.FC = () => {
  return (
    <>
      <h1 className={`${style.heading}`}>Order Flowers</h1>
      <div className={`${style.bgColor}`}>
        <h1 className={`${style.gradientText} ${style.textStyle} `}>
          Coming Soon
        </h1>
      </div>
    </>
  );
};

export default Orderflowers;
