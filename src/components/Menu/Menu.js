import { faCartShopping, faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Menu.scss";

const Menu = ({cart}) => {
  // const links = ["Ghost", "Pumpkin", "Bat", "Customize"];
const links  = [
  {
    name: "Ghost",
    path: '/Ghost'
  },
  {
    name: "Pumpkin",
    path: '/Pumpkin'
  },
  {
    name: "Bat",
    path: '/Bat'
  },
  {
    name: "Customize",
    path: '/Customize'
  },
]
  return (
    <div className={"main-header"}>
      <div className="main-logo"><div className={"main-logo-img"}></div>
      <div className='main-logo-text'>Dino Ghost</div></div>
      <div className={"main-navigation"}>
        {links.map((link, i) => (
          <div className="link">
            <Link  to = {link.path} className={`${i === 0 ? "active" : ""}`}>{link.name}</Link>
          </div>
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default Menu;
