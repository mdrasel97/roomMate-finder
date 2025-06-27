// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router";
import LogOut from "../../components/LogOut";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Dashboard</h2>
        {/* <div className="border border-primary"></div> */}
        <nav className="space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? "bg-primary text-white font-semibold"
                  : "hover:bg-primary hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? "bg-primary text-white font-semibold"
                  : "hover:bg-primary hover:text-white"
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/browseListing"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? "bg-primary text-white font-semibold"
                  : "hover:bg-primary hover:text-white"
              }`
            }
          >
            All RoomMates
          </NavLink>
          <NavLink
            to="/dashboard/addToFindRoomMate"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? "bg-primary text-white font-semibold"
                  : "hover:bg-primary hover:text-white"
              }`
            }
          >
            Add Roommate
          </NavLink>
          <NavLink
            to="/dashboard/myListing"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? "bg-primary text-white font-semibold"
                  : "hover:bg-primary hover:text-white"
              }`
            }
          >
            My Listings
          </NavLink>
          <LogOut />
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6 rounded-l-xl">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
