import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FiUploadCloud, FiBarChart2, FiFileText, FiClock, FiLogOut } from "react-icons/fi";

const LinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 ${
        isActive ? "bg-gray-200 font-semibold" : ""
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Layout() {
  const nav = useNavigate();
  return (
    <div className="w-screen h-screen flex">
      <aside className="w-56 bg-white shadow-lg p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">NetThreat</h1>
        <nav className="flex-1 space-y-1">
          <LinkItem to="/dashboard"><FaTachometerAlt /> Dashboard</LinkItem>
          <LinkItem to="/upload"><FiUploadCloud /> Upload</LinkItem>
          <LinkItem to="/visualize"><FiBarChart2 /> Visualize</LinkItem>
          <LinkItem to="/reports"><FiFileText /> Reports</LinkItem>
          <LinkItem to="/history"><FiClock /> History</LinkItem>
        </nav>
        <button onClick={() => nav("/")} className="mt-auto flex items-center gap-2 text-red-600">
          <FiLogOut /> Log out
        </button>
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
