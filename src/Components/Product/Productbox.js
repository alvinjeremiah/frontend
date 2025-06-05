import React from 'react';
import './ProductBoxStyles.css'; // Import custom styles

const ProductBox = ({ product }) => {
  return (
    <div className="product-box">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <p className="product-rating">Rating: {product.rating} ⭐</p>
    </div>
  );
};

export default ProductBox;
