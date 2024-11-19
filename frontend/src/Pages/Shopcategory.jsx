import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      {/* Banner Section */}
      <div className="shop-category-banner">
        <img src={props.banner} alt="Category Banner" />
        <div className="banner-text">
          <h2>Get 30% Off on All Products</h2>
          <span>Limited Time Offer!</span>
        </div>
      </div>

      {/* Sorting and Product Display Section */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1- 12</span> out of 36 products
        </p>
      </div>

      <div className="shopcategory-product">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <div key={item.id} className="item">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
