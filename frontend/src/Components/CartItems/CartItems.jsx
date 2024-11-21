import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log(all_product);
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
        <p>Remove</p>
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
              <button
                onClick={() => {
                  removeFromCart(e.id);
                }}
              >
                Remove From Cart
              </button>
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
      </div>
    </div>
  );
};

export default CartItems;
