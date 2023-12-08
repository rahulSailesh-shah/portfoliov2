import React from "react";

const NavItem = () => {
  return (
    <div className="flex flex-col mb-6 md:flex-row md:mb-0  gap-x-10 text-[#cdcdcd] -rotate-90">
      <div
        className={`cursor-pointer relative group px-2 text-base font-medium  my-10`}
        // onClick={() => handleItemClick(value)}
      >
        Home
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-[rgb(110,146,243)] scale-0 transition-transform duration-300 group-hover:scale-100"></span>
      </div>
    </div>
  );
};

export default NavItem;
