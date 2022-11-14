import {
  faClose,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./miniCart.scss";

const MiniCart = ({ cart, handleIncrea }) => {
  return (
    <>
    <button onClick={handleIncrea} className="">
        Check out
      </button>
    <div className="mini-cart">
      <div className="mini-cart-header">
        <div>Shopping cart</div>
        <FontAwesomeIcon icon={faClose} />
      </div>

      <div className="mini-cart-body">
        {" "}
        {cart.map((item) => {
          return (
            <div>
              <img className='mini-cart-img' src={item.image} />
              <div>
                <div>{item.name}</div>
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <div>
                <div>
                  <div>{item.code}</div>
                  <div>{item.price}</div>
                </div>
                <div>
                  <button>+</button>1<button>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
    
    
    </>
  );
};

export default MiniCart;
