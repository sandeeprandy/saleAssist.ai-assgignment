import React from 'react';

const ProductCard = ({ title, body }) => {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>{body}</p>
      {/* Add more details based on your design */}
    </div>
  );
};

export default ProductCard;
