import React from "react";
import GhostPage from "../GhostPage";

const MainParent = (props) => {
  const { products, onAdd } = props;
  return (
    <div>
      <div>
        {products.map((product) => (
          <GhostPage key={product.id} product={product} onAdd={onAdd}></GhostPage>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default MainParent;
