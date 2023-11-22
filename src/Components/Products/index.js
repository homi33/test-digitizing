import React from "react";
import Product from "../Product";
import "./index.css";

const Products = ({ products, handleCardClick, showModal }) => {
  return (
    <ul className="productsContainer">
      {products &&
        products.map((item, index) => (
          <Product
            product={item}
            key={`product ${index}`}
            handleCardClick={handleCardClick}
            showModal={showModal}
          />
        ))}
    </ul>
  );
};

export default Products;
