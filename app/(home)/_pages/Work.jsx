import Image from "next/image";
import React from "react";
import Heading from "../_components/Heading";

const Work = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-20 w-full md:w-fit">
        <div className="flex items-center self-start lg:mb-20 mb-8 lg:ml-20 ml-6">
          <Heading text="Work Experience" />
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="lg:flex hidden h-40 items-center relative">
            <div className="w-40 h-40 bg-blue-500 rounded-md"></div>
            <div className="w-20 h-px bg-gray-700"></div>
            <span className="absolute -right-3 w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-[#6E92F3] z-50"></span>
          </div>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full md:w-[50rem] lg:mx-0 mx-4">
            <li className="mb-10 lg:ms-12 ms-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 lg:ms-12 ms-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 lg:ms-12 ms-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
          </ol>
        </div>

        {/* Second section with similar modifications */}
        <div className="flex justify-center items-center w-full">
          <div className="lg:flex hidden h-40 items-center relative">
            <div className="w-40 h-40 bg-blue-500 rounded-md"></div>
            <div className="w-20 h-px bg-gray-700"></div>
            <span className="absolute -right-3 w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-[#6E92F3] z-50"></span>
          </div>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full md:w-[50rem] lg:mx-0 mx-4">
            <li className="mb-10 lg:ms-12 ms-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 lg:ms-12 ms-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 lg:ms-12 ms-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Work;
