import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faBars,
  faCartShopping,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "react-use-cart";

const cx = classNames.bind(styles);
const api = "https://berequirement.herokuapp.com/products";
let mainBody;

export async function getResponse() {
  await fetch(api, {
    method: "GET",
    ContentType: "application/json",
  })
    .then((res) => res.json())
    .then((json) => {
      const { data } = json;

      data.forEach((ghosts, index) => {
        mainBody = document.querySelector(".main-body");
        const containerGhost = document.querySelector(".container-gosh");

        const container = document.createElement("div");
        container.classList.add("main-gosh");

        const containerImg = document.createElement("div");
        containerImg.classList.add("container-img");

        const ghostDetail = document.createElement("div");
        ghostDetail.classList.add("ghostDetail");

        const textDescription = document.createElement("div");
        textDescription.textContent = "#Dino Ghost";
        textDescription.classList.add("main-body-title");
        ghostDetail.appendChild(textDescription);

        const divName = document.createElement("div");
        divName.textContent = ghosts.name;
        divName.classList.add("main-body-title");
        ghostDetail.appendChild(divName);

        const divCode = document.createElement("div");
        divCode.textContent = ghosts.code;
        divCode.classList.add("main-body-code");
        ghostDetail.appendChild(divCode);

        const divType = document.createElement("div");
        divType.textContent = `Item Type: ${ghosts.type}`;
        divType.classList.add("main-body-ghost-type");
        ghostDetail.appendChild(divType);

        const divPrice = document.createElement("div");
        divPrice.textContent = `$${ghosts.price}`;
        divPrice.classList.add("main-body-title", "main-body-price");
        ghostDetail.appendChild(divPrice);

        const buttonBuy = document.createElement("button");
        buttonBuy.textContent = "Buy Now";
        buttonBuy.classList.add("main-body-btn", "buy-btn");
        ghostDetail.appendChild(buttonBuy);

        const divImg = document.createElement("img");
        divImg.src = ghosts.image;
        containerImg.appendChild(divImg);

        container.appendChild(ghostDetail);
        container.appendChild(containerImg);
        containerGhost.appendChild(container);
      });
    });

  const containerGhostOutsideScope = document.querySelector(".container-gosh");
  const sliderItems = document.querySelectorAll(".main-gosh");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  const mainBtnLeft = document.querySelector(".main-btn-left");
  const representItem = document.querySelectorAll(".slider-item");
  const mainBtnRight = document.querySelector(".main-btn-right");
  let positionX = 0;
  let index = 0;
  mainBtnLeft.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  mainBtnRight.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  [...representItem].forEach((item) => {
    item.addEventListener("click", function (e) {
      [...representItem].forEach((innerItem) =>
        innerItem.classList.remove("active-represent")
      );
      e.target.classList.add("active-represent");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      positionX = -1 * index * sliderItemWidth;
      containerGhostOutsideScope.style = `transform: translateX(${positionX}px)`;
    });
  });

  // containerGhostOutsideScope.style.width = `${slidesLength*sliderItemWidth}px`
  // window.addEventListener("load", function () {
  // });
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      containerGhostOutsideScope.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      containerGhostOutsideScope.style = `transform: translateX(${positionX}px)`;
      console.log("prev");
      index--;

      [...representItem].forEach((e) => e.classList.remove("active-represent"));
      representItem[index].classList.add("active-represent");
    }
  }

  const buyBtn = document.querySelector(".buy-btn");
  console.log(buyBtn);
  buyBtn.onclick = () => {
    const transitionBlock = document.querySelector(".notification");
    transitionBlock.style.margin = "0px";
  };
  
}

const Home = () => {
  getResponse();
  // const { addItem } = useCart()
  return (
    <>
      <div className="container">
        <div className={cx("notification")}>
          <FontAwesomeIcon
            className={cx("notification-icon")}
            icon={faCheckCircle}
          />
          <div className={cx("notification-title")}>
            Item has added to your Shopping Cart
          </div>
        </div>
        <div className={cx("navbar")}>
          <div className={cx("menu-navbar")}>
            <FontAwesomeIcon className={cx("font-icon")} icon={faBars} />
          </div>
          <div className={cx("icon-navbar")}>
            <FontAwesomeIcon className={cx("font-icon")} icon={faLinkedin} />
            <FontAwesomeIcon className={cx("font-icon")} icon={faFacebook} />
            <FontAwesomeIcon className={cx("font-icon")} icon={faInstagram} />
          </div>
        </div>

        <div className={cx("main")}>
          <div className={cx("main-header")}>
            <div className={cx("main-logo")}>LOGO</div>
            <div className={cx("main-navigation")}>
              <div>Pumpkin</div>
              <div>Bat</div>
              <div>Customize</div>
            </div>
            <div className={cx("cart")}>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
          <div className={cx("main-body")}>
            <FontAwesomeIcon
              className={cx("main-btn-left")}
              icon={faArrowAltCircleLeft}
            />
            <FontAwesomeIcon
              className={cx("main-btn-right")}
              icon={faArrowAltCircleRight}
            />
            <div className={cx("slider-dots")}>
              <div
                className={cx("slider-item active-represent")}
                data-index="0"
              ></div>
              <div className={cx("slider-item")} data-index="1"></div>
              <div className={cx("slider-item")} data-index="2"></div>
            </div>
            <div className={cx("slider-ghost")}>
              <div className={cx("container-gosh")}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
