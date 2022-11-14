import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./orderSucess.scss";

const OrderSucess = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="order-status">
        <FontAwesomeIcon className="order-status-icon" icon={faCheck} />
        <div className="order-status-text">Order Success</div>
        <button onClick={onClose} className="order-status-btn">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSucess;
