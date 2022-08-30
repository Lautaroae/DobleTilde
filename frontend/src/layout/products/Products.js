import React, { useState, useEffect } from "react";
import { getProducts } from "./ApiCore";
import Card from "./Card";

const Products = (req, res) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <div>
        {product.map((products, i) => (
          <div key={i}>
            <Card product={products} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
