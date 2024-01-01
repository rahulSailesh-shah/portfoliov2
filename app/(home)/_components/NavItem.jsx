import React from "react";

const NavItem = ({ title }) => {
  return (
    <div className="flex flex-col mb-6 md:flex-row md:mb-0 text-[#cdcdcd] justify-center items-center">
      <a
        href={`#${title}`}
        className="cursor-pointer relative group px-2 mx-2 text-base font-medium capitalize"
        // onClick={() => handleItemClick(value)}
      >
        {title}
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-[#6E92F3] scale-0 transition-transform duration-300 group-hover:scale-100"></span>
      </a>
    </div>
  );
};

export default NavItem;
