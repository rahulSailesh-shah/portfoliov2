import Image from "next/image";
import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="flex items-center">
      <Image
        height={60}
        width={30}
        src="./vector.svg"
        alt="logo"
        className="w-20 h-20 mr-4"
      />
      <h1 className="text-[#6E92F3] font-medium">{text}</h1>
    </div>
  );
};

export default Heading;
