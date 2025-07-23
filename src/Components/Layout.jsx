import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-screen fixed">
      {/* Pass isSidebarOpen and toggle function to Navbar */}
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-row">
        {/* Conditionally render Sidebar */}
        {isSidebarOpen && <Sidebar />}
        
        <div className="w-full overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
