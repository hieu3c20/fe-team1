import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Item from "../Item/Item";
import "./miniCart.scss";

const MiniCart = ({ cart, handleIncrea }) => {
  return (
    <>
      <div className="mini-cart">
        <div className="mini-cart-header">
          <div>Shopping cart</div>
          <FontAwesomeIcon icon={faClose} />
        </div>

        <div className="mini-cart-body">
          {cart.map((item) => {
            return <Item item={item} key={item.code} />;
          })}
        </div>
        {cart.length && (
          <button onClick={handleIncrea} className="mini-cart-btn">
            Check out
          </button>
        )}
      </div>
    </>
  );
};

export default MiniCart;
