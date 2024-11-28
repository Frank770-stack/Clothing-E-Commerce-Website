import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import remove from "../../assets/remove.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      alert("Failed to load products. Please try again later.");
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Product removed successfully!");
        setAllProducts(allproducts.filter((product) => product.id !== id));
      } else {
        alert("Failed to remove product.");
      }
    } catch (error) {
      console.error("Error removing product:", error);
      alert("An error occurred while removing the product.");
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproducts.length === 0 ? (
          <p>No products available.</p>
        ) : (
          allproducts.map((product) => (
            <div
              key={product.id}
              className="listproduct-format-main listproduct-format"
            >
              <img
                src={product.image}
                alt=""
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.oldPrice}</p>
              <p>${product.newPrice}</p>
              <p>{product.category}</p>
              <img
                className="listproduct-remove-icon"
                src={remove}
                alt="Remove Product"
                onClick={() => removeProduct(product.id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListProduct;
