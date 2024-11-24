import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Breadcrum.css";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      Home <FontAwesomeIcon icon={faArrowRight} /> Shop
      <FontAwesomeIcon icon={faArrowRight} />
      {product.category} <FontAwesomeIcon icon={faArrowRight} />
      {product.name}
    </div>
  );
};

export default Breadcrum;
