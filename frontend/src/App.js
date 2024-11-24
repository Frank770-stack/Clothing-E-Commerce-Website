import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/Shopcategory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import men_banner from "./Components/Assets/men_banner.jpg";
import women_banner from "./Components/Assets/women_banner.jpg";
import kids_banner from "./Components/Assets/kids_banner.jpg";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={men_banner} category="Men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={women_banner} category="Women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kids_banner} category="Kids" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path="/product/:productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ShopContextProvider>
  );
}

export default App;
