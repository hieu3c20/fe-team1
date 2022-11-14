import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import getInfo from "./getInfo.scss";

const GetInfo = ({ handleCloseCheckOut, handleIncrea, handleDecrea }) => {
  return (
    <div className="overlay">
      <div className="shipping-form">
        <div className="shipping-header">
          <div className="shipping-title">Shipping</div>
          <FontAwesomeIcon
            onClick={handleCloseCheckOut}
            className="shipping-header-icon"
            icon={faClose}
          />
        </div>

        <div className="shopping-body">
          <form className="shipping-detail-form">
            <div className="shipping-info">
              <div className="shipping-sub-title">Shipping Information</div>
              <label for="fullName">Full name</label>
              <input placeholder="Full name" name="fullName"></input>
              <label for="email">Email</label>
              <input placeholder="Email" name="email"></input>
              <label for="phone">Phone</label>
              <input placeholder="Phone" name="phone"></input>
              <label for="address">Address</label>
              <input placeholder="Address" name="address"></input>
            </div>

            <div className="shipping-method">
              <div className="shipping-sub-title">Shipping method</div>
              <div className="shipping-method-detail">
                <label>
                  <input name="method" type="radio"></input>
                  Regular Delivery (Free, 5Days)
                </label>
                <label>
                  <input name="method" type="radio"></input>
                  Express Delivery ($10, 3Days)
                </label>
                <label>
                  <input name="method" type="radio"></input>
                  VIP Delivery ($20, 1Day)
                </label>
              </div>

              <hr />

              <div className="shipping-total-calculation">
                <div>Shipping Price: </div>
                <div>Product Price: </div>
                <div>Discount: </div>
                <div className="shipping-total-price">Total price: </div>
              </div>
            </div>
          </form>
        </div>

        <div className="shipping-footer">
          <button
            onClick={handleDecrea}
            className="shipping-footer-back shipping-footer-btn"
          >
            Back To Cart
          </button>
          <button
            onClick={handleIncrea}
            className="shipping-footer-finish shipping-footer-btn"
          >
            Finish Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInfo;
