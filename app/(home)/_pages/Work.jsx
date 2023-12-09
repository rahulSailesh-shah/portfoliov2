import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-20 w-fit">
        <div className="flex items-center self-start mb-20 ml-20">
          <Image
            height={60}
            width={30}
            src="./vector.svg"
            alt="logo"
            className="w-20 h-20 mr-4"
          />
          <h1 className="text-[#6E92F3] font-medium ">Work Experience</h1>
        </div>
        <div className="flex">
          <div className="flex h-40 items-center relative">
            <div className="w-40 h-40 bg-blue-500 rounded-md"></div>
            <div className="w-20 h-px bg-gray-700"></div>
            <span class="absolute -right-3 w-6 h-6 bg-blue-100 rounded-full  ring-8 ring-white dark:ring-gray-900 dark:bg-[#6E92F3] z-50"></span>
          </div>

          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-12 w-[50rem]    ">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li class="mb-10 ms-12 w-[50rem]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ms-12 w-[50rem]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>

        <div className="flex">
          <div className="flex h-40 items-center relative pt-24">
            <div className="w-40 h-40 bg-blue-500 rounded-md"></div>
            <div className="w-20 h-px bg-gray-700"></div>
            <span class="absolute -right-3 w-6 h-6 bg-blue-100 rounded-full  ring-8 ring-white dark:ring-gray-900 dark:bg-[#6E92F3] z-50"></span>
          </div>

          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-12 w-[50rem] pt-24 ">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li class="mb-10 ms-12 w-[50rem]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ms-12 w-[50rem]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Work;
