import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProducts from "../../Components/AddProducts/AddProducts";
import ListProduct from "../../Components/ListProduct/ListProduct";
const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <AddProducts />
      <Routes>
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};
export default Admin;
