"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import Heading from "../_components/Heading";
import Image from "next/image";

const Education = () => {
  const edu1Ref = useRef(null);
  const edu2Ref = useRef(null);

  const yProgress = (ref) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.1 1"],
    });

    return scrollYProgress;
  };

  return (
    <div className=" lg:ml-32 overflow-hidden mb-40 lg:mt-80 mt-40 px-4">
      <motion.div
        ref={edu1Ref}
        style={{
          opacity: yProgress(edu1Ref),
        }}
        className="flex lg:flex-row flex-col justify-center mb-16"
      >
        <div className="lg:w-[40rem] w-full h-[30rem] bg-[#1e1e1e] rounded-md relative overflow-hidden">
          <Image src="/ASU.jpg" layout="fill" objectFit="cover" alt="logo" />
        </div>
        <div className="lg:w-[30rem] w-full h-[30rem] lg:relative">
          <div className="p-4 mb-4">
            <div className="flex items-end lg:justify-end -mb-4">
              <Heading text="Master in Computer Science" />
            </div>
            <h1 className="text-white lg:text-right mb lg:text-3xl text-xl font-semibold">
              Arizona State University
            </h1>
          </div>

          <div className=" lg:w-[32rem] w-full h-fit lg:absolute right-0 justify-end bg-[#6E92F3] flex flex-col self-end px-8 py-8 rounded-md">
            <h1 className="lg:self-end text-lg font-semibold mb-2 text-[#111111]">
              Courses
            </h1>
            <ul className="lg:self-end">
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div className=" lg:absolute bottom-2 right-0 p-4 mb-4 flex ">
            <p className="text-xl mr-12 text-[#cdcdcd]">2023 - 2025</p>
            <p className="text-xl font-semibold text-[#6E92F3]">GPA: 4.0</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={edu2Ref}
        style={{
          opacity: yProgress(edu2Ref),
        }}
        className="flex lg:flex-row flex-col-reverse justify-center"
      >
        <div className="lg:w-[30rem] w-full h-[30rem]  relative">
          <div className="p-4 mb-4">
            <div className="flex items-end justify-start -mb-4">
              <Heading text="Bachelor in Electronics" />
            </div>
            <h1 className="text-white text-left mb lg:text-3xl text-xl font-semibold">
              SDM College of Engineering and Technology
            </h1>
          </div>

          <div className=" lg:w-[32rem] w-full h-fit lg:absolute left-0 justify-end bg-[#6E92F3] flex flex-col self-end px-8 py-8 rounded-md z-10">
            <h1 className="self-start text-lg font-semibold mb-2 text-[#111111]">
              Courses
            </h1>
            <ul className="self-start">
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
              <li className="text-[#111111]">Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div className=" lg:absolute -bottom-6 left-0 p-4 mb-4 flex ">
            <p className="text-xl mr-12 text-[#cdcdcd]">2016 - 2020</p>
            <p className="text-xl font-semibold text-[#6E92F3]">GPA: 4.0</p>
          </div>
        </div>

        <div className="lg:w-[40rem] w-full h-[30rem] bg-[#1e1e1e] relative rounded-md overflow-hidden">
          <Image src="/SDM.jpeg" layout="fill" objectFit="cover" alt="logo" />
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
