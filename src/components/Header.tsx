import React, { Activity, useState } from "react";
import headerStyle from "./Header.module.scss";
import NavSmallScreen from "./NavSmallScreen";
const Header = () => {
  const [menuClick, setmenuClick] = useState(false)

  const  menuOff=()=>{
    setmenuClick(false)
  }
  return (
    <div className={`${headerStyle.headertop}`}>
      <div>2Sunflowers</div>
      <div className={`${headerStyle.headeroptions}`}>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Order Flowers</h1>
        <h1>Compare</h1>
      </div>
      <div className={`${headerStyle.headerUser}`}>
        <h1>Login</h1>
        <h1>SignUp</h1>
      </div>

      <div className={`${headerStyle.smallScreen}`}>
        <h1 onClick={()=>{setmenuClick((prev)=>!prev)}}>M</h1>
      </div>


      <Activity mode={menuClick ? "visible":"hidden"}>
          <NavSmallScreen closeFn={menuOff}/>
      </Activity>
    </div>
  );
};

export default Header;
