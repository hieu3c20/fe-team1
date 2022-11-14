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

const Cart = ({ cart }) => {
  const [isOpenCheckOut, setIsOpenCheckOut] = useState(false);
  const [closeCheckOut, setCloseCheckOut] = useState(false);
  const [step, setStep] = useState(0);
  const handleIncrea = () => {
    setStep((prev) => prev + 1);
  };
  const handleDecrea = () => setStep((prev) => prev - 1);
  const handleCloseCheckOut = () => {
    setStep(0);
    setCloseCheckOut(true);
  };
  return (
    <div className={"cart"}>
      <FontAwesomeIcon
        icon={faCartShopping}
        onClick={() => {
          setIsOpenCheckOut((prev) => !prev);
        }}
        className='cart-icon'
      />
      {cart.length > 0 && <div className="size-cart">{cart.length}</div>}
      {isOpenCheckOut && <MiniCart cart={cart} handleIncrea={handleIncrea} />}
      {step == 1 && (
        <Summary
          handleCloseCheckOut={handleCloseCheckOut}
          handleIncrea={handleIncrea}
        />
      )}

      {step == 2 && (
        <GetInfo
          handleCloseCheckOut={handleCloseCheckOut}
          handleIncrea={handleIncrea}
          handleDecrea={handleDecrea}
        />
      )}

      {step == 3 && (
        <OrderSucess
          onClose={() => {
            setStep(0);
            setIsOpenCheckOut(false);
            toast.success('Order thanh cong' , {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
          }}
        />
      )}

      {closeCheckOut && (
        <OrderFail
          onTryAgain={handleIncrea}
          onClose={() => {
            setCloseCheckOut(false);
          }}
        />
      )}
    </div>
  );
};

export default Cart;
