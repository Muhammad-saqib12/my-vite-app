import React, { useState } from "react";
import { Store, Bell, Settings, User, Menu, X } from "lucide-react";

const IconBox = ({ icon }) => (
  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer">
    {icon}
  </div>
);

export default function Navbar({ isSidebarOpen, toggleSidebar }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="flex items-center justify-between px-10 py-6 bg-white shadow border-b border-gray-200 text-lg relative">
      {/* 🔰 Brand section with menu icon after title */}
      <div className="flex items-center gap-3 pr-10 border-r border-gray-300 relative">
        <Store size={32} className="text-orange-500" />
        <span className="text-3xl font-bold text-gray-800">Freshmart</span>

        {/* 🟠 Menu / Close Icon */}
        <div onClick={toggleSidebar} className="cursor-pointer ml-3">
          {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-4 ml-10">
        <div
          className="relative w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer"
          onClick={toggleNotifications}
        >
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            2
          </span>

          {/* 🔽 Notification Dropdown */}
          {showNotifications && (
            <div className="absolute top-12 right-0 bg-white shadow-lg border border-gray-200 rounded-md w-64 z-50 p-4">
              <h4 className="font-semibold text-lg mb-2">Notifications</h4>
              <ul className="text-sm text-gray-700">
                <li className="border-b py-2">🛒 New order placed</li>
                <li className="border-b py-2">🔔 Price update alert</li>
                <li className="py-2">📦 Shipment ready to dispatch</li>
              </ul>
            </div>
          )}
        </div>

        <IconBox icon={<Settings size={20} />} />
        <IconBox icon={<User size={20} />} />
      </div>
    </div>
  );
}
