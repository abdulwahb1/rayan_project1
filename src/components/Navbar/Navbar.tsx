import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { FaUser } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (href: string) => router.pathname === href;
  return (
    <div className="flex w-full min-h-18 mt-2 justify-between shadow ">
      <div className="flex min-w-8  bg-white"> </div>
      <div className="flex min-w-[380px] max-h-20 ">
        {/* First Icon */}
        <div
          className={`flex flex-col w-16 h-16 hover:bg-blue-500 rounded-full hover:text-white outerdivclass ${
            isActive("/Search") ? "bg-blue-500 text-white" : ""
          }`}
        >
          <div className="ml-2 mt-0">
            <div
              className={`ml-2 text-3xl mt-1 hover:fill-white ${
                isActive("/Search") ? "search-icon-active" : "search-icon"
              }`}
            >
              <IoIosSearch />
            </div>
            <div className="text-sm ml-0.5">
              <Link href="/Search">Search</Link>
            </div>
          </div>
        </div>
        {/* Second Icon */}
        <div className="flex flex-col w-16 h-16 bg-white hover:bg-blue-500 rounded-full hover:text-white outerdivclass ml-10">
          <div className="ml-2 mt-0.5">
            <div className="ml-3 text-2xl mt-1 hover:fill-white">
              <SlBookOpen className="search-icon" />
            </div>
            <div className="text-sm ml-0.5 mt-1">
              <Link href="/">Library</Link>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="flex flex-col w-16 h-16 bg-white hover:bg-blue-500 rounded-full hover:text-white outerdivclass ml-10">
          <Link href="/Profile">
            <div className="ml-2 mt-0">
              <div className="ml-2 text-3xl mt-1 hover:fill-white">
                <FaUser className="search-icon" />
              </div>
              <div className="text-sm ml-1">Profile</div>
            </div>
          </Link>
        </div>
        {/* Fourth */}
        <div className="flex flex-col w-16 h-16 bg-white hover:bg-blue-500 rounded-full hover:text-white outerdivclass ml-10">
          <div className="ml-2 mt-0">
            <div className="ml-2 text-3xl mt-1 hover:fill-white">
              <BiConversation className="search-icon" />
            </div>
            <div className="text-sm ml-2">
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
