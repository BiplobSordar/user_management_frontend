import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";

import ROUTES from "../../constants/routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "font-semibold text-blue-600"
        : "text-slate-600 hover:text-blue-600"
    }`;

  const navLinks = [
    {
      name: "Dashboard",
      path: ROUTES.HOME,
    },
    {
      name: "Users",
      path: ROUTES.USERS,
    },
    {
      name: "Add User",
      path: ROUTES.CREATE_USER,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="page-container flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink
          to={ROUTES.HOME}
          className="text-xl font-bold text-blue-600"
        >
          User Management I have edit it
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="rounded-md p-2 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <HiXMark size={28} />
          ) : (
            <HiBars3 size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-72 border-t" : "max-h-0"
        }`}
      >
        <nav className="page-container flex flex-col py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "hover:bg-slate-100"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
