import React, { useState } from "react";
import ShowImage from "./ShowImage";
import "./ProductsElement.css";

const Card = ({ product }) => {
  const [count, setCount] = useState(product.count);

  return (
    <>
      <div className="productContainer">
        <div className="card">
          <div className="face front">
            <ShowImage item={product} url="product" />

            <h3>{product.product}</h3>
          </div>
          <div className="face back">
            <h3>{product.product}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
