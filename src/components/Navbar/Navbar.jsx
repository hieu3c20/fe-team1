import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className={"navbar"}>
      <div className={"menu-navbar"}>
        <FontAwesomeIcon className={"font-icon"} icon={faBars} />
      </div>
      <div className={"icon-navbar"}>
        <FontAwesomeIcon className={"font-icon"} icon={faLinkedin} />
        <FontAwesomeIcon className={"font-icon"} icon={faFacebook} />
        <FontAwesomeIcon className={"font-icon"} icon={faInstagram} />
      </div>
    </div>
  );
};

export default NavBar;
