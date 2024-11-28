import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  const navigate = useNavigate();

  // Helper function to parse price
  const parsePrice = (price) => {
    if (typeof price === "string") {
      return parseFloat(price.replace("$", "")) || 0; // Remove "$" and parse as float
    }
    if (typeof price === "number") {
      return price; // Return the number directly
    }
    return 0; // Default to 0 if price is invalid
  };

  // Calculate Subtotal
  const calculateSubtotal = () => {
    return all_product.reduce((subtotal, product) => {
      const price = parsePrice(product.newPrice);
      const quantity = cartItems[product.id] || 0;
      return subtotal + price * quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Actions</p>
      </div>
      <hr />

      {all_product.map((product) => {
        const quantity = cartItems[product.id] || 0;

        if (quantity > 0) {
          const price = parsePrice(product.newPrice);
          const total = price * quantity;

          return (
            <div className="cartitems-format" key={product.id}>
              <img
                src={product.image || "/path/to/placeholder-image.jpg"} // Use placeholder if no image
                alt={product.name || "Product"}
                className="carticon-product-icon"
              />
              <p>{product.name || "Unnamed Product"}</p>
              <p>${price.toFixed(2)}</p>
              <button className="cartitems-quantity">{quantity}</button>
              <p>${total.toFixed(2)}</p>
              <div className="cartitems-actions">
                {/* Add Increase Quantity Button */}
                <button
                  onClick={() => addToCart(product.id)}
                  className="increase-button"
                >
                  ADD
                </button>
                {/* Remove From Cart Button */}
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="remove-button"
                >
                  REDUCE
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}

      <hr />

      {/* Subtotal Section */}
      <div className="cartitems-summary">
        <h2>Cart Summary</h2>
        <div className="cartitems-summary-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="cartitems-summary-row">
          <span>Shipping Fee:</span>
          <span>Free</span>
        </div>
        <div className="cartitems-summary-row">
          <span>Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="proceed-to-checkout-button">
          Proceed to Checkout
        </button>
        <button
          onClick={() => navigate("/")}
          className="continue-shopping-button"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartItems;
