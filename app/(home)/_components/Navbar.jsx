// Navbar.js

import Image from "next/image";
import NavItem from "./NavItem";
import { Logo } from "./Logo";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-end ">
      <div className="md:hidden cursor-pointer z-50">
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

      <div className="fixed left-0 top-0 h-full bg-[#111111] w-32 md:flex hidden flex-col justify-between ">
        <div>
          <div className="flex ml-3 my-10 justify-center items-center">
            <Logo />
          </div>
          <div className="flex flex-col">
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
          </div>
        </div>

        <div className="">
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
