import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const Header = (props) => {
  return (
    <div className={cx('main')}>
      <div className={cx("main-header")}>
        <div className={cx("main-logo")}>LOGO</div>
        <div className={cx("main-navigation")}>
          <div>Pumpkin</div>
          <div>Bat</div>
          <div>Customize</div>
        </div>
        <div className={cx("cart")}>
          <FontAwesomeIcon icon={faCartShopping} />
          {props.countCartItem?<button>{props.countCartItem}</button>:''}
        </div>
      </div>
    </div>
  );
};

export default Header;
