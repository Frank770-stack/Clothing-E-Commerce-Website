import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
// Importing the list of all products (from your data file) to be shared through context

// Creating the context for the shop. This will allow us to share data across the app
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  // Creating the value that will be shared through the context
  // In this case, it's an object containing all_products
  const contextValue = { all_product };

  return (
    // Providing the context value to all child components of ShopContextProvider
    // Any component wrapped inside this provider can access `all_products` from context
    <ShopContext.Provider value={contextValue}>
      {/* Rendering the children of the ShopContextProvider, allowing them to consume context */}
      {props.children}
    </ShopContext.Provider>
  );
};

// Exporting the provider component so it can be used in other parts of the app
export default ShopContextProvider;
