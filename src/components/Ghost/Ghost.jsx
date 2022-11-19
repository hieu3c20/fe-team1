import React from "react";
import "./ghost.scss";
import { toast } from "react-toastify";

const Ghost = ({ ghost, setCart }) => {
  
  return (
    <div className="main-gosh">
      <div className="ghostDetail">
        <div className="main-body-title">#Dino Ghost</div>
        <div className="main-body-title">{ghost.name}</div>
        <div className="main-body-code">{ghost.code}</div>
        <div className="main-body-ghost-type">{ghost.type}</div>
        <div className="main-body-title">${ghost.price}</div>
        <button
          onClick={() => {
    
            setCart((prev) => {
              const isExit = prev.find((item) => item.code === ghost.code);
              if (!isExit) {
                toast("Item has added to your Shopping Cart", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                  theme: "light",
                });
              }
              return !!isExit ? prev : [...prev, { ...ghost, quantity: 1 }];
            });
          }}
          className="main-body-btn buy-btn"
          code = {ghost.code}
        >
          Buy Now
        </button>
      </div>
      <div className="container-img">
        <img src={ghost.image} alt="ghost-image" />
      </div>
    </div>
  );
};

export default Ghost;
