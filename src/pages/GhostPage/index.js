import React from "react";
import data from "../data";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./GhostPage.scss";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles);
const GhostPage = (props) => {


  const { product, onAdd } = props
  return (
    <div className={cx("main-body")}>
      <div className={cx("slider-dots")}>
        <div
          className={cx("slider-item active-represent")}
          data-index="0"
        ></div>
        <div className={cx("slider-item")} data-index="1"></div>
        <div className={cx("slider-item")} data-index="2"></div>
      </div>
      <div className={cx("slider-ghost")}>
        <div className={cx("container-gosh")}>
          <div className={cx("main-pumkin")}>
            <div className={cx("ghostDetail")}>
              <div className={cx("main-body-title")}>pumpkin</div>
              <div className={cx("main-body-title")}>{product.name}</div>
              <div className={cx("main-body-code")}>{product.code}</div>
              <div className={cx("main-body-ghost-type")}>{product.type}</div>
              <div className={cx("main-body-title main-body-price")}>{product.price}</div>
              <button onClick={()=> onAdd(product)} className={cx("main-body-btn buy-btn")}>Add to cart</button>
            </div>
            <div className={cx("container-img")}><img src={product.image} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GhostPage;
