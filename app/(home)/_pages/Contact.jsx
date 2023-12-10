import React from "react";
import Heading from "../_components/Heading";

const Contact = () => {
  return (
    <div class="max-w-md mx-auto my-auto w-screen h-screen flex justify-center items-center">
      <div className="w-[30rem]">
        <div className="flex justify-center mb-12">
          <Heading text="Say Hello" />
        </div>

        <div class="relative z-0 w-full mb-10 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#6E92F3] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[#6E92F3] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email
          </label>
        </div>

        <div class="relative z-0 w-full mb-10 group">
          <input
            type="text"
            multiple
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#6E92F3] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[#6E92F3] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Message
          </label>
        </div>

        <div className="mt-10">
          <button className="bg-[#6E92F3] w-full inline-block px-10 py-3 hover:bg-[rgb(84,114,194)] transition-hover duration-200  rounded-md text-lg font-medium text-[#111111]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
