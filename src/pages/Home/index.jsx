import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import "./Home.scss";
import Ghost from "../../components/Ghost/Ghost";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BtnSlider from "../BtnSlider/BtnSlider";

const api = "https://berequirement.herokuapp.com/products";

const Home = ({ setCart, cart }) => {
  const [ghosts, setGhosts] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

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

  const nextSlide = () => {
    if (slideIndex !== ghosts.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === ghosts.length) {
      setSlideIndex(1);
    }
  };
  console.log(ghosts.length);

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(3);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-home">
      <div className="main">
        <div className="main-body">
          <div className="container-gosh">
            {ghosts.map((ghost, index) => (
              <div
                key={ghost.code}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <Ghost key={ghost.code} setCart={setCart} ghost={ghost} />
              </div>
            ))}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">
              {Array.from({ length: 3 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
