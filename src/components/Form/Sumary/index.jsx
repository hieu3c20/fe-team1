import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import summary from "./summary.scss";

const Summary = ({ handleCloseCheckOut, handleIncrea, cart }) => {
  return (
    <div className="overlay">
      <div className="summary-form">
        <div className="summary-header">
          <div>Shopping Cart {cart.length}</div>
          <FontAwesomeIcon icon={faClose} onClick={handleCloseCheckOut} />
        </div>
        {cart.map((item) => {
          return (
            <>
              <div className="summary-body">
                <img src={item.image} className="summary-img"></img>

                <div className="summary-description">
                  <div className="summary-name">{item.name}</div>
                  <div className="summary-code">#{item.code}</div>
                  <div className="summary-price">${item.price}</div>
                </div>

                <div className="summary-count">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>

                <div className="summary-price">{item.price}</div>

                <div className="summary-icon-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>

              <div className="summary-footer">
                <div className="summary-total">Total Price: ${item.price}</div>
                <button className="summary-btn" onClick={handleIncrea}>
                  Continue To Shipping
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
