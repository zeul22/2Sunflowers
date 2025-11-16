import React from "react";
import headerStyle from "./Header.module.scss";
import OutsideClickHandler from "react-outside-click-handler";

const NavSmallScreen = ({closeFn}: { closeFn: () => void }) => {
  return (
    <div>
        <OutsideClickHandler onOutsideClick={closeFn}>
            <div className={`${headerStyle.headeroptionsSmallScreen}`}>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Order Flowers</h1>
                <h1>Compare</h1>
                <h1 onClick={closeFn}>Close</h1>

            </div>
        </OutsideClickHandler>
    </div>
  );
};

export default NavSmallScreen;
