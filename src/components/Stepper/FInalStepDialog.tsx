import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { ArrowIconWhite } from "@/Icons";

const FinalStepDialog = () => {
  const router = useRouter();

  const getImageSrc = () => {
    if (router.pathname === "/create/student/profileSetup") {
      return "/studentdialog.png";
    } else if (router.pathname === "/create/teacher/profileSetup") {
      return "/teacherdialog.png";
    } else {
      return "";
    }
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="bg-white w-11/12 md:max-w-lg mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="flex flex-col justify-center items-center pb-3">
            <Image
              src={getImageSrc()}
              width={122}
              height={168}
              alt="dialogpng"
            />
            <p className="text-2xl font-bold text-darkblueui mt-10">
              Welcome, Dolor Sit Amet!
            </p>
            <p className="text-md text-darkblueui text-center">
              Amazing! Let’s start to check out your dashboard and guide you
              through the app.
            </p>
          </div>

          <div className="flex justify-end mt-8">
            <Link
              href="/getStarted"
              className="text-darkblueui text-sm underline underline-offset-2 mt-4 mr-6"
            >
              Back to profile setup
            </Link>
            <Link
              href="/profile/dashboard"
              className="bg-darkblueui px-3 h-9 rounded-full flex items-center mt-2"
            >
              <span className="text-white text-sm mr-1.5">Go to dashboard</span>
              <ArrowIconWhite />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalStepDialog;
