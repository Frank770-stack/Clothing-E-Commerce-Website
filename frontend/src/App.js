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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kids" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
