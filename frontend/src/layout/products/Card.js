import React, { useState } from "react";
import { ProductContainer } from "./ProductsElement";

const Card = ({ product }) => {
  const [count, setCount] = useState(product.count);

  return (
    <>
      <ProductContainer>
        <div className="card">
          <div className="face front">
            <img src={product.image} alt={product} />
            <h3>{product.product}</h3>
          </div>
          <div className="face back">
            <h3>{product.product}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </ProductContainer>
    </>
  );
};

export default Card;
