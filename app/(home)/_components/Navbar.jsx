// Navbar.js

import Image from "next/image";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-end">
      <div className="md:hidden cursor-pointer z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>

      <div className="fixed left-0 top-0 h-full bg-[#111111] p-4 md:block hidden flex-col">
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </div>
    </nav>
  );
};

export default Navbar;
