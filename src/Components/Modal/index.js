import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import "./index.css";

const ProductImage = ({ imageUrl }) => {
  return (
    <div className="imageContainer">
      <img src={imageUrl} alt="Product" width={200} height={200} />
    </div>
  );
};

const QuantitySelector = ({ quantity, decreaseQuantity, increaseQuantity }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        onClick={decreaseQuantity}
        disabled={quantity === 0}
        style={{ marginRight: "5px" }}
      >
        -
      </button>
      <div>{quantity}</div>
      <button onClick={increaseQuantity} style={{ marginLeft: "5px" }}>
        +
      </button>
    </div>
  );
};

const StyledModal = ({ productDetails, showModal, handleClose }) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Modal open={showModal} onClose={handleClose}>
      <div className="modalContainer">
        <div className="fullWidth">
          <ProductImage imageUrl={productDetails?.image} />
          <div className="textContainer">
            <p>Home/Posters/PosterV1</p>
            <h6>{productDetails?.title}</h6>
            <h4>{productDetails?.price}$</h4>
            <p>{productDetails?.description}</p>
            <div className="quantityContainer">
              <QuantitySelector
                quantity={quantity}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
              />
              <Button style={{ marginLeft: "10px" }}>ADD to CART</Button>
            </div>
            <hr />
            <p>Category: {productDetails?.category}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StyledModal;
