"use client";

import React, { useState, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Heading from "../_components/Heading";

const Skills = () => {
  const [skill, setSkill] = useState("");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 1"],
  });

  const handleMouseEnter = (text) => {
    setSkill(text);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress,
      }}
      className='flex lg:flex-row flex-col-reverse lg:ml-32  lg:overflow-hidden justify-center mb-40 mt-40 px-4'
    >
      <div className='lg:w-[42rem] lg:h-[24rem] w-full h-[16rem] bg-[#1e1e1e] rounded-md mt-4'>
        <p className='text-white py-4 pl-4 pr-32'>{skill}</p>
      </div>
      <div className='lg:w-[28rem] lg:h-[20rem] w-full relative '>
        <div className='flex lg:items-end lg:justify-end justify-center lg:mb-0 mb-8'>
          <Heading text='Skills' />
        </div>

        <div
          className='lg:w-[36rem] lg:absolute right-0 justify-end'
          onMouseLeave={() => handleMouseEnter("")}
        >
          <div className='lg:mb-2 mb-1 flex lg:justify-end justify-center'>
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className='text-[#cdcdcd] lg:px-8 px-3 lg:py-2 py-1 lg:mr-2 mr-1 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]'
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>

          <div className='lg:mb-2 mb-1 flex lg:justify-end justify-center'>
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className='text-[#cdcdcd] lg:px-8 px-3 lg:py-2 py-1 lg:mr-2 mr-1 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]'
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>

          <div className='lg:mb-2 mb-1 flex lg:justify-end justify-center'>
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className='text-[#cdcdcd] lg:px-8 px-3 lg:py-2 py-1 lg:mr-2 mr-1 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]'
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>

          <div className='lg:mb-2 mb-1 flex lg:justify-end justify-center'>
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className='text-[#cdcdcd] lg:px-8 px-3 lg:py-2 py-1 lg:mr-2 mr-1 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]'
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>
          <div className='lg:mb-2 mb-1 flex lg:justify-end justify-center'>
            {["Text1", "Text2", "Text3", "Text4", "Text5"].map((text, i) => (
              <span
                key={text}
                className='text-[#cdcdcd] lg:px-8 px-3 lg:py-2 py-1 lg:mr-2 mr-1 rounded-sm cursor-pointer border hover:bg-[#6E92F3] hover:text-[#111111] font-medium hover:border-[#111111]'
                onMouseEnter={() => handleMouseEnter(text)}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
