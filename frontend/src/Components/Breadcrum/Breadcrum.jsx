import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Breadcrum.css";

const Breadcrum = ({ product }) => {
  // Ensure product and product.category exist before rendering
  const category = product?.category || "Category Not Available"; // Fallback if category is not defined
  const productName = product?.name || "Product Not Available"; // Fallback if product name is not defined

  return (
    <div className="breadcrum">
      Home <FontAwesomeIcon icon={faArrowRight} /> Shop
      <FontAwesomeIcon icon={faArrowRight} />
      {category} <FontAwesomeIcon icon={faArrowRight} />
      {productName}
    </div>
  );
};

export default Breadcrum;
