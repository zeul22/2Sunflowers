import React from "react";
import style from "./About.module.scss"
const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p className={`${style.paratext}`}>
        This platform is made in love that someone gifted me sunflowers, for a
        man, thats exciting, but for the man that love sunflowers. Well, that
        was something that made me feel like living & loving. I never thought
        that I would even recieve flowers but I did and that too my special ones
        (i.e Sunflowers)! This platform helps 2-sunflowers connect with each
        other. You can buy flowers, compare the prices, have flowers at your
        doorstep weekly. You can also connect with other
        sunflower lovers, share photos & your experiences.
      </p>

      <p className={`${style.paratext}`}>
        This platform will be kept being updated and bring newer features to
        help people find peace and fill wealth in their health.
      </p>
      <p className={`${style.paratext}`}>With Love & Trust</p>
      <p>~2Sunflowers</p>
      <img
        style={{
          height: "600px",
          width: "400px",
        }}
        src="/src/assets/sunflower.png"
        alt=""
      />
    </div>
  );
};

export default About;
