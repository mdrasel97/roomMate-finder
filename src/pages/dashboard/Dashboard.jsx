// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import LogOut from "../../components/LogOut";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Dashboard</h2>
        <nav className="space-y-3">
          <NavLinks closeSidebar={closeSidebar} />
        </nav>
      </aside>

      {/* Toggle Icon (Mobile Only) */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 text-3xl text-gray-700"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <IoClose /> : <CgMenuRightAlt />}
      </button>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Dashboard</h2>
          <nav className="space-y-3">
            <NavLinks closeSidebar={closeSidebar} />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-6">{<Outlet />}</main>
    </div>
  );
};

const NavLinks = ({ closeSidebar }) => {
  const baseClass = "block px-4 py-2 rounded transition font-medium";

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`
        }
        onClick={closeSidebar}
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`
        }
        onClick={closeSidebar}
      >
        Overview
      </NavLink>
      <NavLink
        to="/dashboard/browseListing"
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`
        }
        onClick={closeSidebar}
      >
        All RoomMates
      </NavLink>
      <NavLink
        to="/dashboard/addToFindRoomMate"
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`
        }
        onClick={closeSidebar}
      >
        Add Roommate
      </NavLink>
      <NavLink
        to="/dashboard/myListing"
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`
        }
        onClick={closeSidebar}
      >
        My Listings
      </NavLink>
      <div onClick={closeSidebar}>
        <LogOut />
      </div>
    </>
  );
};

export default Dashboard;
