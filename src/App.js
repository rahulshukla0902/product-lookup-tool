import React, { useState } from "react";
import ProductSearch from "./components/ProductSearch";
import ProductCard from "./components/ProductCard";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (term) => {
    setError("");
    setProduct(null);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?title=${term}`
      );
      const data = await response.json();

      const filteredResults = data.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      console.log(filteredResults);

      if (filteredResults.length > 0) {
        setProduct(filteredResults);
      } else {
        setProduct(null);
        setError("Product not found");
      }
    } catch (err) {
      setError("Failed to fetch Product Data");
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Product Lookup Tool</h1>
        <ProductSearch onSearch={handleSearch} />
      </div>
      <div className="main-content">
        {error && <ErrorMessage message={error} />}
        {product && <ProductCard product={product} />}
      </div>
    </div>
  );
}

export default App;
