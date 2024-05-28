import React from "react";
import Image from "next/image";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useState } from "react";

type VideoProps = {
  onFinish: () => void;
};

const Video: React.FC<VideoProps> = ({ onFinish }) => {
  return (
    <>
      <div className="w-full py-4 px-10 items-center flex min-h-20 shadowprofile bg-white relative z-20">
        <div className="flex w-full justify-between items-center">
          <button className="bg-blueui px-5 h-9 rounded-full flex text-white text-sm items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              className="mr-2"
            >
              <path
                d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM18 7L1 7V9L18 9V7Z"
                fill="white"
              />
            </svg>
            Back
          </button>
          <div>12:!4</div>
          <button className="px-4 py-2 rounded-full bg-[#6893D4] flex justify-center items-center mt-4 hover:bg-dark">
            <FaRegCircleQuestion className="text-sm question-icon" />
            <span className="text-sm text-white ml-2 font-light">Help</span>
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-96 h-96 rounded-full bg-blueui justify-center items-center flex">
          <Image
            src="/videocambigteacher.png"
            width={177}
            height={501}
            alt="bigteacher"
          />
        </div>
        <span className="text-darkblueui text-2xl font-bold mt-12">
          Dolor Sit Amet
        </span>
      </div>
      <div className="w-full justify-end items-end flex flex-col absolute inset-0 bottom-20">
        <div className="bg-[#EFF4FA] w-1/4  flex justify-center items-center pt-16">
          <Image
            src="/videocamteacher.png"
            width={110}
            height={311}
            alt="teacher"
          />
        </div>
      </div>
      <div className="w-full py-4 px-10 items-center justify-between flex min-h-20 shadowprofile bg-white relative z-20">
        <div></div>
        <div className="flex w-1/6 justify-between items-center ml-32">
          <div className="w-16 h-16 rounded-full bg-[#D7E3F4]"></div>
          <div className="w-16 h-16 rounded-full bg-[#D7E3F4]"></div>
          <div className="w-16 h-16 rounded-full bg-[#D7E3F4]"></div>
        </div>
        <div className="flex justify-end items-center">
          <button
            className="bg-darkblueui px-5 h-9 rounded-full flex text-white text-sm items-center"
            onClick={onFinish}
          >
            Finish
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="ml-2"
            >
              <path
                d="M11.6669 19.3333C11.2002 19.3333 10.8891 19.1778 10.578 18.8667C9.95577 18.2444 9.95577 17.3111 10.578 16.6889L18.3558 8.91112C18.978 8.2889 19.9113 8.2889 20.5335 8.91112C21.1558 9.53335 21.1558 10.4667 20.5335 11.0889L12.7558 18.8667C12.4447 19.1778 12.1335 19.3333 11.6669 19.3333Z"
                fill="white"
              />
              <path
                d="M19.4446 11.5556C18.978 11.5556 18.6669 11.4 18.3558 11.0889L10.578 3.31113C9.95577 2.68891 9.95577 1.75557 10.578 1.13335C11.2002 0.511132 12.1335 0.511132 12.7558 1.13335L20.5335 8.91112C21.1558 9.53334 21.1558 10.4667 20.5335 11.0889C20.2224 11.4 19.9113 11.5556 19.4446 11.5556Z"
                fill="white"
              />
              <path
                d="M17.9444 11.6667H1.05556C0.422222 11.6667 0 11.0667 0 10.1667C0 9.26669 0.422222 8.66669 1.05556 8.66669H17.9444C18.5778 8.66669 19 9.26669 19 10.1667C19 11.0667 18.5778 11.6667 17.9444 11.6667Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Video;
