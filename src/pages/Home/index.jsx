import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.scss";
import Ghost from "../../components/Ghost/Ghost";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const cx = classNames.bind(styles);
const api = "https://berequirement.herokuapp.com/products";

const Home = ({ setCart, cart }) => {
  const [ghosts, setGhosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(api, {
        method: "GET",
        ContentType: "application/json",
      });
      const { data } = await res.json();
      setGhosts(data);
    })();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-home">
      <div className={cx("main")}>
        <div className={cx("main-body")}>
          <Slider {...settings}>
            <div className="container-gosh">
              {ghosts.map((ghost) => (
                <Ghost key={ghost.code} setCart={setCart} ghost={ghost} />
              ))}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
