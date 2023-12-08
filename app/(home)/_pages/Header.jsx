import React from "react";
import ThreeDModel from "../_components/ThreeDModel";

const Header = () => {
  return (
    <main className="relative bg-[#111111] w-full h-screen ml-20">
      <div className="lg:block hidden absolute -right-40 -top-96">
        <ThreeDModel />
      </div>
      <h1 className="text-white">Header</h1>
    </main>
  );
};

export default Header;
