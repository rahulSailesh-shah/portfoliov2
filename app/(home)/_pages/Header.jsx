"use client";
import React, { useEffect, useRef } from "react";
import ThreeDModel from "../_components/ThreeDModel";
import { motion, useAnimation, useInView } from "framer-motion";
import Button from "../_components/Button";

const Header = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      slideControls.start("visible");
    }
  }, [inView]);

  return (
    <main className="bg-[#111111] w-full h-screen ml-32">
      <div className="relative">
        <div className="lg:block hidden absolute -right-40 -top-80">
          <ThreeDModel />
        </div>
      </div>

      <div className="flex flex-col justify-center h-full ml-8 ">
        <div className="w-1/2 pr-12">
          <h1 className="mb-4">
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">R</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">A</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">H</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">U</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-6">L</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">S</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">H</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">A</span>
            <span className="text-2xl font-medium text-[#cdcdcd] pr-2">H</span>
          </h1>
          <h1 className="text-[#cdcdcd] text-5xl font-light ">
            I am a{" "}
            <span className="font-semibold text-[rgb(110,146,243)]">
              Full Stack Developer
            </span>{" "}
          </h1>
          <p className="text-[#cdcdcd] mt-4 text-base leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            quidem voluptatibus sunt optio, sequi molestiae itaque. Doloremque
            qui sequi repellendus.
          </p>
          <div className="mt-6">
            <Button text="Contact Me" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
