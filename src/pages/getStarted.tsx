import { Navbar2 } from "@/components";
import React from "react";
import Image from "next/image";
import { ArrowIconBlue } from "@/Icons";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="flex flex-col w-full h-screen landingpagebg">
      <div className="flex flex-col justify-center items-end w-full -ml-8">
        <Navbar2 />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="text-white font-bold text-5xl">
            Join our Educational Community!
          </h1>
          <p className="text-white text-2xl mt-4">Pick a side</p>
          {/* {Student/Teacher Starting} */}
          <div className="flex w-full justify-center items-center">
            <div className="flex flex-col justify-center items-center w-1/2">
              <div className="flex flex-col justify-center items-center w-full">
                <Image
                  src="/studentlanding.png"
                  width={155}
                  height={443}
                  alt="video cam big student"
                />
                <Link
                  href="/create/student/profileSetup"
                  className="text-darkblueui bg-white px-4 py-1.5 text-base rounded-full hover:bg-gray-200 flex mt-12 ml-2"
                >
                  <span className="text-sm text-darkblueui mt-0.5">
                    Start Learning
                  </span>
                  <ArrowIconBlue />
                </Link>
              </div>
            </div>
            <div className="w-2 h-[27rem] bg-white mx-40 mt-16"></div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <div className="flex flex-col justify-center items-center w-full">
                <Image
                  src="/teacherlanding.png"
                  width={155}
                  height={443}
                  alt="video cam big teacher"
                  className=""
                />
                <Link
                  href="/create/teacher/profileSetup"
                  className="bg-white px-4 py-1.5 rounded-full hover:bg-gray-200 flex mt-12"
                >
                  <span className="text-sm text-darkblueui mt-0.5">
                    Share Your Expertise
                  </span>
                  <ArrowIconBlue />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
