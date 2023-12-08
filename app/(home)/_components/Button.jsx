import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="bg-[rgb(110,146,243)] inline-block px-10 py-3 hover:bg-[rgb(84,114,194)] transition-hover duration-300  rounded-md text-lg font-medium text-[#111111]">
        {text}
      </button>
    </>
  );
};

export default Button;
