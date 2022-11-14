import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./orderFail.scss";

const OrderFail = ({ onTryAgain , onClose }) => {
  return (
    <div className="overlay">
      <div className="order-status">
        <FontAwesomeIcon className="order-status-icon" icon={faClose} onClick = {onClose} />
        <div className="order-status-text">Order Fail</div>
        <button onClick={onTryAgain} className="order-status-btn">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default OrderFail;
