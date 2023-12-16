"use client";

import React from "react";
import ThreedDPhone from "../_components/ThreedDPhone";
import Image from "next/image";
import Heading from "../_components/Heading";
import ThreeDMac from "../_components/ThreeDMac";
import IconButton from "../_components/IconButton";

const Project = () => {
  return (
    <div className="flex flex-col relative">
      <div className="lg:ml-48 px-4">
        <div className="lg:w-fit w-full flex lg:flex-row flex-col justify-around mt-48 ">
          <div className="lg:block hidden top-0 lg:left-20 left-0">
            <ThreeDMac version={1} />
          </div>
          <div className="lg:hidden block w-full h-80 bg-gray-600"></div>

          <div className="lg:w-[32rem] w-full ">
            <Heading text="01" />
            <h1 className="lg:text-4xl text-2xl text font-semibold mb-6 text-white">
              Project Title
            </h1>
            <p className="p-1 lg:text-lg text-[#cdcdcd]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              debitis est omnis nemo sapiente consequatur recusandae nesciunt
              aliquam voluptates amet?
            </p>
            <div className="text-[#6E92F3] text-sm mt-4">
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>
            </div>

            <div className="flex mt-4">
              <IconButton text="View Project" type="external" />
              <IconButton text="Github" type="Github" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ml-60 lg:w-fit w-full px-4">
        <div className="lg:w-fit w-full flex lg:flex-row flex-col justify-around mt-12 ">
          <div className="lg:hidden block w-full h-80 bg-gray-600"></div>
          <div className="lg:w-[32rem] w-full ">
            <Heading text="02" />
            <h1 className="lg:text-4xl text-2xl text font-semibold mb-6 text-white">
              Project Title
            </h1>
            <p className="p-1 lg:text-lg text-[#cdcdcd]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              debitis est omnis nemo sapiente consequatur recusandae nesciunt
              aliquam voluptates amet?
            </p>
            <div className="text-[#6E92F3] text-sm mt-4">
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>
            </div>

            <div className="flex mt-4">
              <IconButton text="View Project" type="external" />
              <IconButton text="Github" type="Github" />
            </div>
          </div>
          <div className="lg:block hidden top-0">
            <ThreeDMac version={2} />
          </div>
        </div>
      </div>

      <div className="lg:ml-96 px-4">
        <div className="lg:w-fit w-full flex lg:flex-row flex-col justify-around mt-24 ">
          <div className="lg:block hidden top-0 left-20">
            <ThreedDPhone />
          </div>

          <div className="lg:hidden block w-full h-80 bg-gray-600"></div>
          <div className="lg:w-[32rem] w-full lg:ml-24">
            <Heading text="03" />
            <h1 className="lg:text-4xl text-2xl text font-semibold mb-6 text-white">
              Project Title
            </h1>
            <p className="p-1 lg:text-lg text-[#cdcdcd]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              debitis est omnis nemo sapiente consequatur recusandae nesciunt
              aliquam voluptates amet?
            </p>
            <div className="text-[#6E92F3] text-sm mt-4">
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>{" "}
              <span className="mr-4">React</span>
            </div>

            <div className="flex mt-4">
              <IconButton text="View Project" type="external" />
              <IconButton text="Github" type="Github" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
