import React, { useEffect, useState } from "react";
import "./Home.scss";
import Ghost from "../../components/Ghost/Ghost";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ products, setCart }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const dots = [1, 2, 3];

  return (
    <div className="container-home">
      <div className="main">
        <div className="main-body">
          <div className="container-gosh">
            {products.map((ghost, index) => (
              <div
                key={ghost.code}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <Ghost key={ghost.code} setCart={setCart} ghost={ghost} />
              </div>
            ))}
            {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
            <div className="container-dots">
              {dots.map((dot) => (
                <div
                  key={dot}
                  className={slideIndex === dot ? "dot active-slider" : "dot"}
                  onClick={() => setSlideIndex(dot)}
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
