import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  // Fallback to handle undefined or missing product or image
  const productImage = product?.image || "/path/to/placeholder-image.jpg"; // Use a placeholder image if the image is not available

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisply-img-list">
          <img src={productImage} alt="Product" />
          <img src={productImage} alt="Product" />
          <img src={productImage} alt="Product" />
          <img src={productImage} alt="Product" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={productImage}
            alt="Main Product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product?.name || "Product Name"}</h1>{" "}
        {/* Fallback text if name is not available */}
        <div className="productdisplay-right-star">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product?.oldPrice || "$0.00"}{" "}
            {/* Fallback if oldPrice is not available */}
          </div>
          <div className="productdisplay-right-price-new">
            {product?.newPrice || "$0.00"}{" "}
            {/* Fallback if newPrice is not available */}
          </div>
          <div className="productdisplay-right-description">
            This knee-length dress features a flattering A-line silhouette with
            a scoop neckline and a soft floral print, perfect for casual
            outings.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
          </div>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product?.id);
          }}
          className="product-cart-button"
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          {/* <span>Category :</span> Women, T-Shirt, Crop Top */}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
        <button
          onClick={() => navigate("/cart")} // Navigate to the cart page
          className="product-cart-button"
        >
          Go To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
