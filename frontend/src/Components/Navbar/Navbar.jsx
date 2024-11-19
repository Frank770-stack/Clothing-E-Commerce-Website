import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div>
        <p>The Wardrobe Co.</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "Men" && <hr />}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "Women" && <hr />}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "Kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
