"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ThreedDPhone from "../_components/ThreeDPhone";
import Heading from "../_components/Heading";
import IconButton from "../_components/IconButton";
import ThreeDMac from "../_components/ThreeDMac";
import ThreeDPhone from "../_components/ThreeDPhone";
import Link from "next/link";

const Project = () => {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const yProgress = (ref) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.1 1"],
    });

    return scrollYProgress;
  };

  return (
    <div className='flex flex-col relative' id='projects'>
      <motion.div
        ref={project1Ref}
        style={{
          opacity: yProgress(project1Ref),
        }}
        className='lg:ml-48 px-4'
      >
        <div className='lg:w-fit w-full flex lg:flex-row flex-col justify-around mt-48 '>
          <div className='lg:block hidden top-0 lg:left-20 left-0'>
            <ThreeDMac version={1} />
          </div>
          <div className='lg:hidden block w-full h-80 bg-gray-600'></div>

          <div className='lg:w-[32rem] w-full '>
            <Heading text='01' />
            <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
              AI - Imaginate
            </h1>
            <p className='p-1 lg:text-lg text-[#cdcdcd]'>
              Developed a React application to facilitate image creation through
              the utilization of the Dall-E API. Users can effortlessly craft
              images and seamlessly share them within the community, while also
              having the option to save the images directly to their devices.
            </p>
            <div className='text-[#6E92F3] text-sm mt-4'>
              <span className='mr-4'>React</span>{" "}
              <span className='mr-4'>MongoDB</span>{" "}
              <span className='mr-4'>Dall-E AI</span>{" "}
              <span className='mr-4'>Tailwind</span>
            </div>

            <div className='flex mt-4'>
              <a
                href='https://ai-imaginate-frontend.onrender.com/'
                target='_blank'
              >
                <IconButton text='View Project' type='external' />
              </a>

              <a
                href='https://github.com/rahulSailesh-shah/AI-Imaginate'
                target='_blank'
              >
                <IconButton text='Github' type='Github' />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={project2Ref}
        style={{
          opacity: yProgress(project2Ref),
        }}
        className='lg:ml-60 lg:w-fit w-full px-4'
      >
        <div className='lg:w-fit w-full flex lg:flex-row flex-col justify-around mt-12 '>
          <div className='lg:hidden block w-full h-80 bg-gray-600'></div>
          <div className='lg:w-[32rem] w-full '>
            <Heading text='02' />
            <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
              CoDev Space
            </h1>
            <p className='p-1 lg:text-lg text-[#cdcdcd]'>
              Crafted an collaborative online Python coding IDE using React and
              Web Sockets enabling real-time code development and execution,
              featuring live collaboration through shared coding rooms,
              fostering seamless teamwork among users.
            </p>
            <div className='text-[#6E92F3] text-sm mt-4'>
              <span className='mr-4'>Web Sockets</span>{" "}
              <span className='mr-4'>React</span>{" "}
              <span className='mr-4'>Redux</span>{" "}
              <span className='mr-4'>Express</span>{" "}
              <span className='mr-4'>MongoDB</span>
            </div>

            <div className='flex mt-4'>
              <a href='https://codev-space.onrender.com/' target='_blank'>
                <IconButton text='View Project' type='external' />
              </a>

              <a
                href='https://github.com/rahulSailesh-shah/CoDev-Space'
                target='_blank'
              >
                <IconButton text='Github' type='Github' />
              </a>
            </div>
          </div>
          <div className='lg:block hidden top-0'>
            <ThreeDMac version={2} />
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={project3Ref}
        style={{
          opacity: yProgress(project3Ref),
        }}
        className='lg:ml-96 px-4'
      >
        <div className='lg:w-fit w-full flex lg:flex-row flex-col justify-around mt-24 '>
          <div className='lg:block hidden top-0 left-20'>
            <ThreeDPhone />
          </div>

          <div className='lg:hidden block w-full h-80 bg-gray-600'></div>
          <div className='lg:w-[32rem] w-full lg:ml-24'>
            <Heading text='03' />
            <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
              Route Tracker
            </h1>
            <p className='p-1 lg:text-lg text-[#cdcdcd]'>
              Developed a React Native mobile app harnessing GPS capabilities to
              track and record routes, storing them in MongoDB for review,
              distance tracking, and implementing comprehensive user
              authentication.
            </p>
            <div className='text-[#6E92F3] text-sm mt-4'>
              <span className='mr-4'>React Native</span>{" "}
              <span className='mr-4'>Node.js</span>{" "}
              <span className='mr-4'>MongoDB</span>{" "}
              <span className='mr-4'>Express</span>
            </div>

            <div className='flex mt-4'>
              <a
                href='https://github.com/rahulSailesh-shah/Route-Tracker'
                target='_blank'
              >
                <IconButton text='Github' type='Github' />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
