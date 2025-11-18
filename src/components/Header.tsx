import React, { Activity, useState } from "react";
import headerStyle from "./Header.module.scss";
import NavSmallScreen from "./NavSmallScreen";
import { Link } from "react-router";
const Header:React.FC = () => {
  const [menuClick, setmenuClick] = useState(false)

  const  menuOff=()=>{
    setmenuClick(false)
  }
  return (
    <div className={`${headerStyle.headertop}`}>
      <Link to={"/"}>2Sunflowers</Link>
      <div className={`${headerStyle.headeroptions}`}>
        <Link to={"/order"}>Order Flowers</Link>
        <h1>Compare</h1>
        <Link to={"/about"}>About</Link >
      </div>
      <div className={`${headerStyle.headerUser}`}>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
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
