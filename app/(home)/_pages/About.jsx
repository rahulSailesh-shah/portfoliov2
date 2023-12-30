"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Button from "../_components/Button";
import Heading from "../_components/Heading";
import { useScroll, motion } from "framer-motion";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress,
      }}
      className="text-white lg:mt-20 flex lg:flex-row flex-col lg:ml-32 justify-around lg:px-20 px-6"
    >
      <div className="lg:hidden mb-8 ml-2">
        <Heading text="About Me" />
      </div>
      <div className="text-[#cdcdcd] lg:w-2/5 ">
        <h1 className="text-4xl font-semibold mb-10 text-white">Hi There</h1>
        <p className="text-[#cdcdcd] lg:text-xl lg:leading-8 lg:mb-10 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          asperiores, pariatur reprehenderit earum eaque harum, molestiae rerum
          sint alias repudiandae aliquam quae aliquid voluptatibus nesciunt!
          Porro a adipisci odio ullam quas, animi nihil asperiores pariatur
          maxime corporis repudiandae alias dicta ratione aut quaerat blanditiis
          temporibus esse illo deserunt. Recusandae, velit?
        </p>
        <p className="text-[#cdcdcd] lg:text-xl lg:leading-8 lg:mb-10 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto soluta
          maiores voluptas placeat? Vero corporis pariatur maxime, dolorum
          recusandae excepturi! Vero nobis officiis eum nostrum cumque harum,
          sint rerum nesciunt commodi alias voluptatem est tenetur illum at.
          Sunt, natus fugiat?
        </p>

        <div className="mt-10">
          <Button text="Send me a message" />
        </div>
      </div>

      <div className="lg:w-2/5 lg:mt-60 mt-12">
        <div className="lg:block hidden">
          <Heading text="About Me" />
        </div>

        <div className=" h-[40rem] bg-[rgb(126,126,126)]"></div>
      </div>
    </motion.div>
  );
};

export default About;
