import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import getInfo from "./getInfo.scss";

const GetInfo = ({
  handleCloseCheckOut,
  handleIncrea,
  handleDecrea,
  cart,
  setCart,
}) => {
  const [method, setMethod] = useState();
  const [errors, setErrors] = useState([]);
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChangeInfo = (e) => {
    if (errors.includes(e.target.name)) {
      setErrors((prev) => {
        return prev.filter((item) => item != e.target.name);
      });
    }
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const calPrice = () =>
    cart.reduce((acc, item) => {
      return acc + Number(item.price) * item.quantity;
    }, 0);

  const calTotal = () => {
    let res = calPrice();
    if (method) res += method.price;
    return res;
  };

  const methods = [
    {
      name: "Regular Delivery (Free, 5Days)",
      price: 0,
    },
    {
      name: "R Express Delivery ($10, 3Days)",
      price: 10,
    },
    {
      name: "VIP Delivery ($20, 1Day)",
      price: 20,
    },
  ];

  const checkInfo = () => {
    const infoErrors = [];
    for (const key of Object.keys(info)) {
      if (!info[key]) infoErrors.push(key);
    }
    return infoErrors;
  };

  const handleSubmit = () => {
    const infoErrors = checkInfo();
    if (infoErrors.length == 0 && method) {
      handleIncrea();
      setCart([]);
    } else {
      if (!method) infoErrors.push("method");
      setErrors(infoErrors);
    }
  };

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
              <label htmlFor="fullName">
                Full name {errors.includes("fullName") && "*"}
              </label>
              <input
                placeholder="Full name"
                name="fullName"
                onChange={handleChangeInfo}
              ></input>
              <label htmlFor="email">
                Email {errors.includes("email") && "*"}
              </label>
              <input
                placeholder="Email"
                name="email"
                onChange={handleChangeInfo}
              ></input>
              <label htmlFor="phone">
                Phone {errors.includes("phone") && "*"}
              </label>
              <input
                placeholder="Phone"
                name="phone"
                onChange={handleChangeInfo}
              ></input>
              <label htmlFor="address">
                Address {errors.includes("address") && "*"}
              </label>
              <input
                placeholder="Address"
                name="address"
                onChange={handleChangeInfo}
              ></input>
            </div>

            <div className="shipping-method">
              <div className="shipping-sub-title">
                Shipping method {errors.includes("method") && "*"}
              </div>
              <div className="shipping-method-detail">
                {methods.map((method) => {
                  return (
                    <label
                      key={method.price}
                      onClick={() => {
                        setMethod(method);
                        if (errors.includes("method")) {
                          setErrors((prev) => {
                            return prev.filter((item) => item != "method");
                          });
                        }
                      }}
                    >
                      <input name="method" type="radio"></input>
                      {method.name}
                    </label>
                  );
                })}
              </div>

              <hr />

              <div className="shipping-total-calculation">
                <div>Shipping Price: {method && method.price}</div>
                <div>Product Price: {calPrice()} </div>
                <div>Discount: 0</div>
                <div className="shipping-total-price">
                  Total price: ${calTotal()}
                </div>
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
            onClick={handleSubmit}
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
