import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./item.scss";

const Item = ({ item }) => {
  return (
    <div className="mini-cart-item">
      <img className="mini-cart-img" src={item.image} />
      <div className="mini-cart-body">
        <div className="mini-cart-description">
          <div>{item.name}</div>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <p className="name-item">#{item.type}</p>
        <div className="mini-cart-action">
          <div className="item-price">${item.price}</div>
          <div className="control-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
