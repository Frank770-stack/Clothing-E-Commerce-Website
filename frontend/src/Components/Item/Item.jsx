import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  useEffect(() => {
    // Scroll to the top when the page loads or when the product changes
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="item">
      <Link to={`/Product/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.newPrice}</div>
        <div className="item-price-old">{props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
