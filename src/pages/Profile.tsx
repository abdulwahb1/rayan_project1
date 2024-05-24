import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar, Navbar } from "@/components";
import { FaCalendarAlt } from "react-icons/fa";
import { BiConversation } from "react-icons/bi";

const Profile = () => {
  return (
    <section className="flex flex-col w-full h-full">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full h-full flex ml-6 items-start justify-start">
          <div className="flex flex-col w-3/4 h-full mt-12 ml-4">
            <h1 className="text-[#181849] text-3xl font-bold">Dashboard</h1>
            <div className="ml-3 mt-14">
              <div className="text-4xl">
                <FaCalendarAlt className="text-[#181849]" />
              </div>
              <div className="flex mt-5 w-[600px] justify-between">
                <p className="text-[#181849] text-lg font-bold">
                  Sessions Planned:
                </p>
                <span className="text-sm font-medium px-2.5 rounded-full bg-[#D7E3F4] justify-center items-center flex">
                  See history
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-5 w-1/4 ml-3">
              <div className="shadowprofile bg-white w-[600px] min-h-20 rounded-md flex justify-center items-center">
                <div className="flex justify-center items-center ml-4">
                  <div className="w-12 h-12 bg-[#D7E3F4] rounded-full justify-center flex items-center overflow-hidden">
                    <Image
                      src="/teacher1.png"
                      width={26}
                      height={76}
                      alt="profile"
                      className="mt-3.5"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-6 items-start justify-center font-bold text-md w-[45rem] max-w-[45rem]">
                  <Link href="/">
                    <span className="text-darkblueui text-md underline">
                      Dolor Sit Amet
                    </span>
                  </Link>
                  <span className="font-normal text-darkblueui text-sm">
                    Thursday, Oct 12th, 1:00PM - 2:00PM
                  </span>
                </div>
                <div className="flex ml-3 w-full justify-evenly items-center">
                  {/* 1st Icon Link */}
                  <div className="flex flex-col justify-center items-center">
                    <Link
                      href="/"
                      className="flex flex-col justify-center items-center"
                    >
                      <BiConversation className="text-2xl text-blueui" />
                      <span className="text-blueui text-center text-xs flex flex-col items-center whitespace-nowrap">
                        Open
                        <br />
                        Chat
                      </span>
                    </Link>
                  </div>
                  {/* 2nd Icon Link */}
                  <div className="flex flex-col justify-center items-center">
                    <Link
                      href="/"
                      className="flex flex-col justify-center items-center"
                    >
                      <BiConversation className="text-2xl text-blueui" />
                      <span className="text-blueui text-center text-xs flex flex-col items-center whitespace-nowrap">
                        Reschedule
                        <br />
                        Session
                      </span>
                    </Link>
                  </div>
                  {/* 3rd Icon Link */}
                  <div className="flex flex-col justify-center items-center">
                    <Link
                      href="/"
                      className="flex flex-col justify-center items-center"
                    >
                      <BiConversation className="text-2xl text-blueui" />
                      <span className="text-blueui text-center text-xs flex flex-col items-center whitespace-nowrap">
                        Cancel
                        <br />
                        Session
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/4 h-full border border-red-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
