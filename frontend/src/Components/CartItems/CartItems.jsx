import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  const navigate = useNavigate();
  // Calculate Subtotal
  const calculateSubtotal = () => {
    return all_product.reduce((subtotal, product) => {
      const price = parseFloat(product.newPrice.replace("$", "")) || 0; // Parse product price
      const quantity = cartItems[product.id] || 0; // Get product quantity
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

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          const price = parseFloat(e.newPrice.replace("$", "")) || 0;
          const quantity = cartItems[e.id] || 0;
          const total = price * quantity;

          return (
            <div className="cartitems-format" key={e.id}>
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>{price.toFixed(2)}</p>
              <button className="cartitems-quantity">{quantity}</button>
              <p>{total.toFixed(2)}</p>
              <div className="cartitems-actions">
                {/* Add Increase Quantity Button */}
                <button
                  onClick={() => {
                    addToCart(e.id);
                  }}
                  className="increase-button"
                >
                  ADD
                </button>
                {/* Remove From Cart Button */}
                <button
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
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
