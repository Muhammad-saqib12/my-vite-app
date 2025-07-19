import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Category from "./Pages/Category";
import CreateProducts from "./Pages/CreateProducts";
import ExpiredProducts from "./Pages/ExpiredProducts";
import LowStocks from "./Pages/LowStocks";
import SubCategory from "./Pages/SubCategory";
import Login from "./Pages/Login";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User", storedUser);
    setUser(storedUser);
  }, [user]);

  return (
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/createproducts" element={<CreateProducts />} />
          <Route path="/expiredproducts" element={<ExpiredProducts />} />
          <Route path="/lowstocks" element={<LowStocks />} />
          <Route path="/subcategory" element={<SubCategory />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
