import React from "react";
import "./index.css";

const Product = ({ product, handleCardClick, showModal }) => {
  const { title, image, id, price, description } = product;

  return (
    <>
      <li className="product" onClick={() => handleCardClick(id)}>
        <h4>{title}</h4>
        <img src={image} alt={id} style={{ width: "100%", height: "200px" }} />
        <p>{price} $</p>
        <span>{description}</span>
      </li>
    </>
  );
};

export default Product;
