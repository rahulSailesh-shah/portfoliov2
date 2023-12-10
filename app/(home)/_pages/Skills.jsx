"use client";

import React, { useState } from "react";
import Heading from "../_components/Heading";

const Skills = () => {
  const [skill, setSkill] = useState("");

  const handleMouseEnter = (text) => {
    setSkill(text);
  };

  return (
    <div className="flex ml-32  overflow-hidden justify-center mb-24">
      <div className="w-[42rem] h-[24rem] bg-[#1e1e1e] rounded-md">
        <p className="text-white py-4 pl-4 pr-32">{skill}</p>
      </div>
      <div className="w-[28rem] h-[20rem] relative">
        <div className="flex items-end justify-end">
          <Heading text="Skills" />
        </div>

        <div
          className=" w-[36rem] h-full absolute right-0 justify-end"
          onMouseLeave={() => handleMouseEnter("")}
        >
          <div className="mb-2 flex justify-end">
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className="text-[#cdcdcd] px-8 py-2 mr-2 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]"
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>

          <div className="mb-2 flex justify-end">
            {["Text1", "Text2", "Text3", "Text4"].map((text, i) => (
              <span
                key={text}
                className="text-[#cdcdcd] px-8 py-2 mr-2 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]"
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>

          <div className="mb-2 flex justify-end">
            {["Text1", "Text2", "Text3", "Text4", "Text5", "Text6"].map(
              (text, i) => (
                <span
                  key={text}
                  className="text-[#cdcdcd] px-8 py-2 mr-2 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]"
                  onMouseEnter={() => handleMouseEnter(text)}
                >
                  {text}
                </span>
              )
            )}
          </div>

          <div className="mb-2 flex justify-end">
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className="text-[#cdcdcd] px-8 py-2 mr-2 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]"
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>

          <div className="mb-2 flex justify-end">
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className="text-[#cdcdcd] px-8 py-2 mr-2 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]"
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
