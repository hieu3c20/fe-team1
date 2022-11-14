import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./item.scss";

const Item = ({ item, setCart }) => {
  const tangSp = () => {
    setCart((prev) => {
      return prev.map((data) =>
        data.code === item.code
          ? { ...data, quantity: data.quantity + 1 }
          : data
      );
    });
  };

  const giamSp = () => {
    if (item.quantity > 1)
      setCart((prev) => {
        return prev.map((data) =>
          data.code === item.code
            ? { ...data, quantity: data.quantity - 1 }
            : data
        );
      });
  };

  const removeProduct = () => {
    setCart((prev) => prev.filter((data) => data.code !== item.code));
  };

  return (
    <div className="mini-cart-item">
      <img className="mini-cart-img" src={item.image} />
      <div className="mini-cart-body">
        <div className="mini-cart-description">
          <div>{item.name}</div>
          <FontAwesomeIcon icon={faTrash} onClick={removeProduct} />
        </div>
        <p className="name-item">#{item.type}</p>
        <div className="mini-cart-action">
          <div className="item-price">
            ${Number(item.price) * item.quantity}
          </div>
          <div className="control-quantity">
            <button onClick={giamSp}>-</button>
            <span>{item.quantity}</span>
            <button onClick={tangSp}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
