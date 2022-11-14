import React from "react";
import Ghost from "../../components/Ghost/Ghost";
import data from "../data";
import classNames from "classnames/bind";
import styles from "../Home/Home.scss";
import Slider from "react-slick";

const cx = classNames.bind(styles);
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const Pumpkin = ({ setCart }) => {
  const { products } = data;
  return (
    <div className="container-home">
    <div className={cx("main")}>
      <div className={cx("main-body")}>
        <Slider {...settings}>
          <div className="container-gosh">
            {products.map((ghost) => (
              <Ghost key={ghost.code} setCart={setCart} ghost={ghost} />
            ))}
          </div>
        </Slider>
      </div>
    </div>
  </div>
  );
};

export default Pumpkin;
