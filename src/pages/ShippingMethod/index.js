import React from "react";

const Payment = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <>
      <h2>cart item</h2>
      <div>
        {cartItems.length === 0 && <div>cart is empty</div>}
        {cartItems.map((item) => (
          <>
            <div key={item.id}>
              <div>{item.name}</div>
              <div>
                <button onClick={() => onRemove(item)}>-</button>{" "}
                <button onClick={() => onAdd(item)}>+</button>
              </div>
            </div>

            <div>
              {item.qty}*${item.price}
            </div>
          </>
        ))}
      </div>
      <div>
        {cartItems.length !== 0 && (
          <>
            <div>item price:</div>
            <div>${itemsPrice.toFixed(2)}</div>
            <div>tax price:</div>
            <div>${taxPrice.toFixed(2)}</div>
            <div>shipping price:</div>
            <div>${shippingPrice.toFixed(2)}</div>
          </>
        )}
        <div>total price</div>
        <div>${totalPrice.toFixed(2)}</div>
        <button onClick={() => alert("your payment is in shipping process")}>
          check out
        </button>
      </div>
      <hr />
    </>
  );
};

export default Payment;
