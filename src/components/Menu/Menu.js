import { faCartShopping, faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Cart from "../Cart/Cart";
import "./Menu.scss";

const Menu = ({cart}) => {
  const links = ["Ghost", "Pumpkin", "Bat", "Customize"];
  return (
    <div className={"main-header"}>
      <div className={"main-logo"}>LOGO</div>
      <div className={"main-navigation"}>
        {links.map((link, i) => (
          <div className="link">
            <div className={`${i === 0 ? "active" : ""}`}>{link}</div>
          </div>
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default Menu;
