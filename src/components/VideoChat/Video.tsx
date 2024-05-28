import React from "react";
import Image from "next/image";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useState } from "react";
import { ArrowIconWhite } from "@/Icons";

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
            className="bg-darkblueui px-5 h-9 rounded-full flex items-center"
            onClick={onFinish}
          >
            <span className="text-white text-sm mr-1">Finish</span>
            <ArrowIconWhite />
          </button>
        </div>
      </div>
    </>
  );
};

export default Video;
