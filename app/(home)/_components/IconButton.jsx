import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

const IconButton = ({ text, type }) => {
  return (
    <div>
      {" "}
      <button className="bg-[#6E92F3] inline-block px-6 py-2 hover:bg-[rgb(84,114,194)] transition-hover duration-200  rounded-md text-md mr-4 font-medium text-[#111111]">
        <div className="flex justify-center items-center">
          {type == "Github" ? <IoLogoGithub /> : <FiExternalLink />}
          <span className="ml-2">{text}</span>
        </div>
      </button>
    </div>
  );
};

export default IconButton;
