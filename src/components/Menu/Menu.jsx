import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Menu.scss";

const Menu = ({ cart }) => {
  const links = [
    {
      name: "Ghost",
      path: "/",
    },
    {
      name: "Pumpkin",
      path: "/pumpkin",
    },
    {
      name: "Bat",
      path: "/bat",
    },
    {
      name: "Customize",
      path: "/customize",
    },
  ];
  return (
    <div className={"main-header"}>
      <div className="left-menu">
        <div className="main-logo">
          <div className={"main-logo-img"}></div>
          <div className="main-logo-text">Dino Ghost</div>
        </div>
        <div className={"main-navigation"}>
          {links.map((link, i) => (
            <div className="link">
              <Link to={link.path} className={`${i === 0 ? "active" : ""}`}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default Menu;
