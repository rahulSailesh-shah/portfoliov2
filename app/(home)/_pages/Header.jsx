"use client";
import React, { useEffect, useRef } from "react";
import ThreeDModel from "../_components/ThreeDModel";
import { motion, useAnimation, useInView } from "framer-motion";
import Button from "../_components/Button";
import Link from "next/link";

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
    <main id='home' className='bg-[#111111] h-screen lg:ml-32 overflow-hidden'>
      <div className='relative w-full'>
        <div className='lg:block hidden absolute right-0 -top-80 '>
          <ThreeDModel />
        </div>
      </div>

      <div className='flex flex-col justify-center h-full ml-8 '>
        <div className='lg:w-[56rem] pr-12 '>
          <h1 className='mb-4 lg:text-3xl text-xl'>
            <span className=' font-medium text-[#cdcdcd] pr-2'>R</span>
            <span className=' font-medium text-[#cdcdcd] pr-2'>A</span>
            <span className=' font-medium text-[#cdcdcd] pr-2'>H</span>
            <span className=' font-medium text-[#cdcdcd] pr-2'>U</span>
            <span className=' font-medium text-[#cdcdcd] pr-6'>L</span>
            <span className=' font-medium text-[#cdcdcd] pr-2'>S</span>
            <span className=' font-medium text-[#cdcdcd] pr-2'>H</span>
            <span className=' font-medium text-[#cdcdcd] pr-2'>A</span>
            <span className=' font-medium text-[#cdcdcd] pr-2'>H</span>
          </h1>
          <h1 className='text-[#cdcdcd] lg:text-6xl text-4xl font-light '>
            I am a{" "}
            <span className='font-semibold text-[#6E92F3]'>
              Full Stack Developer
            </span>{" "}
          </h1>
          <p className='text-[#cdcdcd] mt-4 lg:text-xl lg:leading-8 z-50'>
            Specialising in crafting seamless web and mobile experiences as a
            software engineer, I am currently pursuing a Master's in Computer
            Science at <br className='lg:block hidden' />{" "}
            <a
              href='https://www.asu.edu'
              target='_blank'
              className='text-[#6E92F3]'
            >
              Arizona State University.
            </a>
          </p>
          <div className='mt-10'>
            <Button text='Contact Me' to='contact' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
