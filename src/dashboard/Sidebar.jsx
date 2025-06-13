import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/dashboard/order", label: "Orders" },
  { to: "/dashboard/products", label: "Products" },
  { to: "/dashboard/payment-shipping", label: "Payment & Shipping" },
];

function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-gray-900 text-white p-2 rounded shadow"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <HiMenu className="text-2xl" />
      </button>

      {/* Sidebar for desktop and mobile */}
      <aside
        className={`bg-gray-900 text-white w-64 min-h-screen fixed md:static z-40 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ top: 0, left: 0 }}
      >
        <div className="p-6 font-bold text-2xl border-b border-gray-700 flex justify-between items-center">
          Admin Panel
          {/* Close button for mobile */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            &times;
          </button>
        </div>
        <nav className="mt-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-6 py-3 hover:bg-gray-800 transition ${
                location.pathname === link.to ? "bg-gray-800" : ""
              }`}
              onClick={() => setOpen(false)} // Close sidebar on link click (mobile)
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
