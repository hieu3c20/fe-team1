import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import GetInfo from "../Form/GetInfo";
import OrderFail from "../Form/OrderFail";
import OrderSucess from "../Form/OrderSucess";
import Summary from "../Form/Sumary";
import MiniCart from "../MiniCart/MiniCart";
import "./cart.scss";

const Cart = ({ cart, setCart }) => {
  const [isOpenCheckOut, setIsOpenCheckOut] = useState(false);
  const [closeCheckOut, setCloseCheckOut] = useState(false);
  const [step, setStep] = useState(0);
  const handleIncrea = () => {
    setStep((prev) => prev + 1);
    setIsOpenCheckOut(false);
  };
  const handleDecrea = () => setStep((prev) => prev - 1);
  const handleCloseCheckOut = () => {
    setStep(0);
    setCloseCheckOut(true);
  };
  return (
    <div className={"cart"}>
      <div className="icon-cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          onClick={() => {
            setIsOpenCheckOut((prev) => !prev);
          }}
          className="cart-icon"
        />
        {cart.length > 0 && <div className="size-cart">{cart.length}</div>}
      </div>
      {isOpenCheckOut && (
        <MiniCart
          cart={cart}
          handleIncrea={handleIncrea}
          onClose={setIsOpenCheckOut}
          setCart= {setCart}
        />
      )}
      {step == 1 && (
        <Summary
          handleCloseCheckOut={handleCloseCheckOut}
          handleIncrea={handleIncrea}
          cart={cart}
          setCart= {setCart}
        />
      )}

      {step == 2 && (
        <GetInfo
          cart={cart}
          handleCloseCheckOut={handleCloseCheckOut}
          handleIncrea={handleIncrea}
          handleDecrea={handleDecrea}
          setCart= {setCart}
        />
      )}

      {step == 3 && (
        <OrderSucess
          onClose={() => {
            setStep(0);
            setIsOpenCheckOut(false);
            toast.success("Order successfully", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
          }}
        />
      )}

      {closeCheckOut && (
        <OrderFail
          onTryAgain={() => {
            handleIncrea();
            setCloseCheckOut(false);
          }}
          onClose={() => {
            setCloseCheckOut(false);
          }}
        />
      )}
    </div>
  );
};

export default Cart;
