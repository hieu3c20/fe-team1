import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MiniCart from "../MiniCart/MiniCart";

const Cart = ({ cart }) => {
  const [isOpenCheckOut, setIsOpenCheckOut] = useState(false);
  const [checkOutFinal, setCheckOutFinal] = useState(false);
  return (
    <div className={"cart"}>
      <FontAwesomeIcon
        icon={faCartShopping}
        onClick={() => {
          setIsOpenCheckOut((prev) => !prev);
        }}
      />
      {cart.length > 0 && <div className="size-cart">{cart.length}</div>}
      {isOpenCheckOut && <MiniCart cart={cart} setCheckOutFinal={setCheckOutFinal} />}
      {checkOutFinal && (
        <>
          check out
          <button onClick={() => setCheckOutFinal(false)}>dong</button>
        </>
      )}
    </div>
  );
};

export default Cart;
