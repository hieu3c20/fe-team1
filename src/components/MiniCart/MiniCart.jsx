import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Item from "../Item/Item";
import "./miniCart.scss";

const MiniCart = ({ cart, handleIncrea, onClose, setCart }) => {
  const handleCloseCart = () => onClose(false);
  return (
    <>
      <div className="mini-cart">
        <div className="mini-cart-header">
          <div>Shopping cart</div>
          <FontAwesomeIcon onClick={handleCloseCart} icon={faClose} />
        </div>

        <div className="mini-cart-body">
          {cart.map((item) => {
            return <Item item={item} key={item.code} setCart={setCart} />;
          })}
        </div>
        {cart.length ? (
          <button onClick={handleIncrea} className="mini-cart-btn">
            Check out
          </button>
        ) : (
          <div className="">
            <p>empty</p>
            <button onClick={handleCloseCart}>Back go to shooping</button>
          </div>
        )}
      </div>
    </>
  );
};

export default MiniCart;
