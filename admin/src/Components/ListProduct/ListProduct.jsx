import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import remove from "../../assets/remove.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="page-container">
      <div className="list-product">
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-all-products">
          <hr />
          {allproducts.map((product, index) => {
            return (
              <>
                {" "}
                <div
                  key={index}
                  className="listproduct-format-main list-product"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="listproduct-product-icon"
                  />
                  <p>{product.name}</p>
                  <p>{product.oldPrice}</p>
                  <p>{product.newPrice}</p>
                  <p>{product.category}</p>
                  <img
                    src={remove}
                    alt="Remove"
                    className="listproduct-remove-icon"
                  />
                </div>
                <hr />{" "}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
