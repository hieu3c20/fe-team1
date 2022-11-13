import React from "react";

const MiniCart = ({ cart, setCheckOutFinal }) => {
  return (
    <div>
      {cart.map((item) => {
        return <>{item.code}</>;
      })}
      <button onClick={() => setCheckOutFinal(true)}>Thanh toan</button>
    </div>
  );
};

export default MiniCart;
