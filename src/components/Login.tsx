import React from "react";
import Input from "./modals/Input";
import Button from "./modals/Button";
import style from "./Login.module.scss";
interface Format {
  email: string;
  password: string;
}
const Login = () => {
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
          <Input label="Username" name="Username" tov="text" />
          <Input label="Password" name="Password" tov="text" />
          <div className={`${style.submitBtn}`}>
            <Button text="Submit" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
