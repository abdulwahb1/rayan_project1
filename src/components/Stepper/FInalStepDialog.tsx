import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

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
              href="/"
              className="text-darkblueui text-sm underline underline-offset-2 mt-4 mr-6"
            >
              Back to profile setup
            </Link>
            <button className="bg-darkblueui px-3 h-9 rounded-full flex text-white text-sm items-center mt-2">
              Go to dashboard
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 ml-3"
              >
                <g id="Frame 1">
                  <path
                    id="Vector"
                    d="M11.6666 19.3333C11.2 19.3333 10.8889 19.1778 10.5777 18.8667C9.95553 18.2444 9.95553 17.3111 10.5777 16.6889L18.3555 8.91112C18.9777 8.2889 19.9111 8.2889 20.5333 8.91112C21.1555 9.53335 21.1555 10.4667 20.5333 11.0889L12.7555 18.8667C12.4444 19.1778 12.1333 19.3333 11.6666 19.3333Z"
                    fill="#EFF4FA"
                  />
                  <path
                    id="Vector_2"
                    d="M19.4444 11.5556C18.9777 11.5556 18.6666 11.4 18.3555 11.0889L10.5777 3.31113C9.95553 2.68891 9.95553 1.75557 10.5777 1.13335C11.2 0.511132 12.1333 0.511132 12.7555 1.13335L20.5333 8.91112C21.1555 9.53334 21.1555 10.4667 20.5333 11.0889C20.2222 11.4 19.9111 11.5556 19.4444 11.5556Z"
                    fill="#EFF4FA"
                  />
                  <path
                    id="Vector_3"
                    d="M17.9444 11.6667H1.05556C0.422222 11.6667 0 11.0667 0 10.1667C0 9.26669 0.422222 8.66669 1.05556 8.66669H17.9444C18.5778 8.66669 19 9.26669 19 10.1667C19 11.0667 18.5778 11.6667 17.9444 11.6667Z"
                    fill="#EFF4FA"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalStepDialog;
