import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
   const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="h-screen w-screen fixed">
      <Navbar />
      
      <div className="flex flex-row">
        <Sidebar />
        {/* ✅ render the *value*, not the whole props object */}
        <div className="border w-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}
