import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import summary from "./summary.scss";

const Summary = ({ handleCloseCheckOut, handleIncrea, cart, setCart }) => {
  const calTotal = () =>
    cart.reduce((acc, item) => {
      return acc + Number(item.price) * item.quantity;
    }, 0);

  const tangSp = (item) => {
    setCart((prev) => {
      return prev.map((data) =>
        data.code === item.code
          ? { ...data, quantity: data.quantity + 1 }
          : data
      );
    });
  };

  const giamSp = (item) => {
    if (item.quantity > 1)
      setCart((prev) => {
        return prev.map((data) =>
          data.code === item.code
            ? { ...data, quantity: data.quantity - 1 }
            : data
        );
      });
  };

  const removeProduct = (item) => {
    if(cart.length === 1) handleCloseCheckOut()
    setCart((prev) => prev.filter((data) => data.code !== item.code));
  };
  return (
    <div className="overlay">
      <div className="summary-form">
        <div className="summary-header">
          <div>Shopping Cart {cart.length}</div>
          <FontAwesomeIcon icon={faClose} onClick={handleCloseCheckOut} />
        </div>
        {cart.map((item) => {
          return (
            <div className="summary-body" key={item.code}>
              <img src={item.image} className="summary-img"></img>

              <div className="summary-description">
                <div className="summary-name">{item.name}</div>
                <div className="summary-code">#{item.code}</div>
                <div className="summary-price">${Number(item.price)}</div>
              </div>

              <div className="summary-count">
                <button onClick={() => giamSp(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => tangSp(item)}>+</button>
              </div>

              <div className="summary-price">
                ${Number(item.price) * item.quantity}
              </div>

              <div className="summary-icon-delete">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeProduct(item)}
                />
              </div>
            </div>
          );
        })}
        <div className="summary-footer">
          <div className="summary-total">Total Price: ${calTotal()}</div>
          <button className="summary-btn" onClick={handleIncrea}>
            Continue To Shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
