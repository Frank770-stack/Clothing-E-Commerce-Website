import React, { createContext, useState } from "react"; // Import React and hooks
import all_product from "../Components/Assets/all_product"; // Import the list of all products (this can be your product data)

// Creating the ShopContext, which will allow the app to access shared data (e.g., cartItems, all_product)
export const ShopContext = createContext(null);

// Function to initialize the cart with all products set to 0 (no products in the cart by default)
const getDefaultCart = () => {
  let cart = {}; // Create an empty object to store the cart data
  // Loop through all products and set each one to 0 (no quantity)
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0; // Set the quantity of each product to 0 by default
  }
  return cart; // Return the cart object with all product quantities set to 0
};

// The ShopContextProvider component will provide the shared context to all child components
const ShopContextProvider = (props) => {
  // Initialize state to store the cart items (products and their quantities)
  const [cartItems, setCartItems] = useState(getDefaultCart()); // Get the initial cart state (using the getDefaultCart function)

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev, // Keep the previous state
      [itemId]: prev[itemId] + 1, // Increase the quantity of the item with the given itemId by 1
    }));
    console.log(cartItems); // Log the current cart state (useful for debugging)
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev, // Keep the previous state
      [itemId]: prev[itemId] - 1, // Decrease the quantity of the item with the given itemId by 1
    }));
  };

  // The value to be provided through the context: it contains the list of all products, the cart items, and functions to update the cart
  const contextValue = {
    all_product, // The list of all available products
    cartItems, // The current state of the cart (which items are in the cart and their quantities)
    addToCart, // Function to add an item to the cart
    removeFromCart, // Function to remove an item from the cart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {/* Rendering the children of the ShopContextProvider component */}
      {/* Any component wrapped inside this provider will have access to the context value */}
      {props.children}
    </ShopContext.Provider>
  );
};

// Exporting the ShopContextProvider component so it can be used to wrap other components in the app
export default ShopContextProvider;
