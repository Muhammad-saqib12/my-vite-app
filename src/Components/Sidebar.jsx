import React from "react";
import { Link } from "react-router-dom";
import {
  PlusCircle,
  AlertTriangle,
  TrendingDown,
  LayoutGrid,
  Layers,
  LogOut,
  LogOutIcon,
  LogIn,
} from "lucide-react";

// Navigation Items
const navItems = [
  { label: "Products", icon: <PlusCircle size={26} />, to: "/products" },

  
  { label: "Category", icon: <LayoutGrid size={26} />, to: "/category" },
 
   { label: "Users", icon: <LogIn size={26} />, to: "/users" },

];

export default function Sidebar() {
  const handleLogout=()=>{
    localStorage.removeItem("user"),
    window.location.reload()

  }
  return (
    <div className="w-80 min-h-screen bg-white text-gray-800 px-8 py-8 shadow-lg border-r border-gray-200">
      {/* Top Heading */}
      {/* <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-300 pb-4">
        Inventory
      </h2> */}

      {/* Navigation Links */}
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex items-center gap-4 text-gray-700 hover:bg-gray-100 px-5 py-3 rounded-lg transition-all duration-200 text-lg font-semibold"
          >
            <span className="text-blue-600">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="flex py-120 items-center gap-4 text-gray-700 hover: px-5  rounded-lg transition-all duration-200 text-lg font-semibold">
      
        {/* <LogOutIcon className="text-red-600" size={26}/> */}
        <button className="text-white bg-red-500 w-[150px] h-[50px] rounded-xl " onClick={handleLogout}>Logout</button>
      </div>
      
    </div>
  );
}
