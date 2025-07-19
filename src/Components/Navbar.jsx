import React from "react";
import {
  Store,
  ShoppingCart,
  PlusCircle,
  Monitor,
  Mail,
  Bell,
  Settings,
  User,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

// 🔹 Optional reusable icon box
const IconBox = ({ icon }) => (
  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer">
    {icon}
  </div>
);

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-6 bg-white shadow border-b border-gray-200 text-lg">
      {/* 🔰 Brand with Border & Arrows on Right */}
      <div className="flex items-center gap-3 pr-10 border-r border-gray-300 relative">
        <Store size={32} className="text-orange-500" />
        <span className="text-3xl font-bold text-gray-800">Freshmart</span>
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-orange-500 text-2xl font-bold">
          ←←
        </div>
      </div>

      {/* 🔍 Search Input */}
      <div className="relative ml-10">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={24} />
        <input
          type="text"
          placeholder="Search..."
          className="pl-12 pr-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-96 text-xl"
        />
      </div>

      {/* 🛍 Dropdown and Action Buttons */}
      <div className="flex items-center gap-4 ml-10">
        <select className="cursor-pointer border border-gray-300 rounded-lg px-6 py-3 bg-white text-gray-700 focus:outline-none text-xl">
          <option value="freshmart">🛒 Freshmart</option>
          <option value="apex">🛍️ Grocery Apex</option>
          <option value="bavy">🛍️ Grocery Bavy</option>
          <option value="eden">🛍️ Grocery Eden</option>
        </select>

        <Link to="/add-new">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-orange-600 text-xl">
            <PlusCircle size={24} />
            Add New
          </button>
        </Link>

        <Link to="/pos">
          <button className="bg-purple-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-purple-900 text-xl">
            <ShoppingCart size={24} />
            POS
          </button>
        </Link>
      </div>

      {/* 🧊 Icon Set (including notification badge) */}
      <div className="flex items-center gap-4 ml-10">
        {/* Flag */}
        <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer">
          <img
            src="https://flagcdn.com/us.svg"
            alt="US Flag"
            className="w-5 h-5 rounded-sm"
          />
        </div>

        {/* Icons */}
        <IconBox icon={<Monitor size={20} />} />
        <IconBox icon={<Mail size={20} />} />

        {/* 🔔 Notification Bell with Badge */}
        <div className="relative w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            2
          </span>
        </div>

        <IconBox icon={<Settings size={20} />} />
        <IconBox icon={<User size={20} />} />
      </div>
    </div>
  );
}
