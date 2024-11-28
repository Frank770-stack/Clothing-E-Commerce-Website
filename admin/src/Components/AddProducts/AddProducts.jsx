import React, { useState } from "react";
import "./AddProducts.css";
import upload from "../../assets/upload.png";

const AddProducts = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "Women",
    newPrice: "",
    oldPrice: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    if (
      !productDetails.name ||
      !productDetails.oldPrice ||
      !productDetails.newPrice
    ) {
      alert("Please fill all required fields.");
      return;
    }

    let responseData;
    const formData = new FormData();
    formData.append("product", image);

    try {
      // Upload Image
      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      responseData = await uploadResponse.json();

      if (responseData.success) {
        const product = { ...productDetails, image: responseData.image_url };

        // Add Product
        const productResponse = await fetch(
          "http://localhost:4000/addproducts",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
        const productData = await productResponse.json();

        if (productData.success) {
          alert("Product added successfully!");
        } else {
          alert("Failed to add product.");
        }
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="add-Product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.oldPrice}
            onChange={changeHandler}
            type="text"
            name="oldPrice"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.newPrice}
            onChange={changeHandler}
            type="text"
            name="newPrice"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload}
            alt="Product Thumbnail"
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={Add_Product} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
};

export default AddProducts;
