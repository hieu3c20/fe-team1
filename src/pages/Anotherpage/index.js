import React, { useState } from "react";
import Header from "../Header";
import MainParent from "../MainParent";
import Payment from "../ShippingMethod";
import data from "../data";

const Anotherpage = () => {
  const { products } = data;
  console.log(products);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItem={cartItems.length}></Header>
      <MainParent products={products} onAdd={onAdd}></MainParent>

      <Payment
        
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></Payment>
    </div>
  );
};

export default Anotherpage;
