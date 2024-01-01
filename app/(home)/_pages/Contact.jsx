"use client";
import React, { useState, useRef } from "react";
import Heading from "../_components/Heading";
import { useScroll, motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  const sendMessage = async () => {
    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      style={{
        opacity: scrollYProgress,
      }}
      className="max-w-md mx-auto my-auto w-screen h-screen flex justify-center items-center px-4"
    >
      <div className="w-[30rem]">
        <div className="flex justify-center mb-12">
          <Heading text="Say Hello" />
        </div>

        <div className="relative z-0 w-full mb-10 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#6E92F3] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[#6E92F3] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email
          </label>
        </div>

        <div className="relative z-0 w-full mb-10 group">
          <input
            type="text"
            multiple
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#6E92F3] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[#6E92F3] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Message
          </label>
        </div>

        <div className="mt-20">
          <button
            onClick={sendMessage}
            className="bg-[#6E92F3] w-full inline-block px-10 py-3 hover:bg-[rgb(84,114,194)] transition-hover duration-200  rounded-md text-lg font-medium text-[#111111]"
          >
            Send Message
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
