import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { FaUser } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full min-h-18 mt-2 justify-between shadow ">
      <div className="flex min-w-8  bg-white"> </div>
      <div className="flex min-w-[380px] max-h-20 ">
        {/* First Icon */}
        <div className="flex flex-col w-16 h-16 bg-white hover:bg-blue-500 rounded-full hover:text-white outerdivclass">
          <div className="ml-2 mt-0">
            <div className="ml-2 text-3xl mt-1 hover:fill-white">
              <IoIosSearch className="search-icon" />
            </div>
            <div className="text-sm ml-1">
              <Link href="/">Search</Link>
            </div>
          </div>
        </div>
        {/* Second Icon */}
        <div className="flex flex-col w-16 h-16 bg-white hover:bg-blue-500 rounded-full hover:text-white outerdivclass ml-10">
          <div className="ml-2 -mt-0.5">
            <div className="ml-2 text-3xl mt-1 hover:fill-white">
              <Image
                src="/bookicon.png"
                width={33}
                height={33}
                alt="icon"
                className="search-icon"
              />
            </div>
            <div className="text-sm ml-1">
              <Link href="/">Library</Link>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="flex flex-col w-16 h-16 bg-white hover:bg-blue-500 rounded-full hover:text-white outerdivclass ml-10">
          <div className="ml-2 mt-0">
            <div className="ml-2 text-3xl mt-1 hover:fill-white">
              <FaUser className="search-icon" />
            </div>
            <div className="text-sm ml-1">
              <Link href="/">Profile</Link>
            </div>
          </div>
        </div>
        {/* Fourth */}
        <div className="flex flex-col w-16 h-16 bg-white hover:bg-blue-500 rounded-full hover:text-white outerdivclass ml-10">
          <div className="ml-2 mt-0">
            <div className="ml-2 text-3xl mt-1 hover:fill-white">
              <BiConversation className="search-icon" />
            </div>
            <div className="text-sm ml-3">
              <Link href="/">Chat</Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="/">
        <div className="h-[1.8rem] w-[4.8rem] rounded-full bg-blueui flex justify-center items-center mt-4 hover:bg-dark">
          <div className="flex">
            <div className="text-sm mt-0.5">
              <FaRegCircleQuestion className="question-icon" />
            </div>
            <div className="text-sm text-white ml-1 font-light">Help</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
