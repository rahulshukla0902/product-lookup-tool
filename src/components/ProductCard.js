import React from "react";
import "../App.css";

function ProductCard({ product }) {
  console.log(product);
  return (
    <>
      {product.map((detail) => (
        <div className="product-card" key={detail.id}>
          <h2>{detail.title}</h2>
          <p>Price: ${detail.price}</p>
          <p>Rating: {detail.rating ? detail.rating.rate : "N/A"}</p>
          <p>Availability: {detail.available ? "In Stock" : "Out of Stock"}</p>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
