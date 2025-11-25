import React from "react";
import headerStyle from "./Header.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router";

interface SmallScreenFunction{
  closeFn:()=>void,
}
const NavSmallScreen:React.FC<SmallScreenFunction> = ({closeFn}: SmallScreenFunction) => {
  return (
      <div className={`${headerStyle.sideTo}`}>
        <OutsideClickHandler onOutsideClick={closeFn}  >
            <div className={`${headerStyle.headeroptionsSmallScreen}`}>
                <Link to={"/"}>Home</Link>
                <Link to={"order"}>Order Flowers</Link>
                <Link to={"compare"}>Compare</Link>
                <Link to={"about"}>About</Link>
                <h1 onClick={closeFn}>Close</h1>

            </div>
        </OutsideClickHandler>
      </div>

  );
};

export default NavSmallScreen;
