import React, { useState } from "react";
import debounce from "lodash.debounce";
import "../App.css";

function ProductSearch({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = debounce((term) => {
    if (term) onSearch(term);
  }, 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for a product"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default ProductSearch;
