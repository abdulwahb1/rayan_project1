import { ArrowIconWhite, CrossSvg, LittleStar } from "@/Icons";
import React from "react";

type SeeProfileCardProps = {
  title: string;
  rating: number;
  reviews: number;
  handleProfileClose: () => void;
};

const SeeProfile = ({
  title,
  rating,
  reviews,
  handleProfileClose,
}: SeeProfileCardProps) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="bg-white w-[50rem] mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="flex justify-start items-center">
            <div className="w-20 h-20 bg-[#D7E3F4] rounded-full justify-center flex items-center"></div>
            <div className="flex flex-col ml-5 flex-grow">
              <div className="flex justify-between">
                <span className="text-darkblueui text-xl font-bold hover:underline">
                  {title}
                </span>
                <button
                  className="rounded-full flex justify-center items-center"
                  onClick={handleProfileClose}
                >
                  <CrossSvg />
                </button>
              </div>
              <div className="flex">
                <LittleStar />
                <p className="ml-1 text-xs text-darkblueui">
                  {rating}
                  <span className="underline ml-1">({reviews} reviews)</span>
                </p>
              </div>
              <div className="flex w-1/2">
                <div className="flex bg-[#d7e3f4] rounded-full justify-center items-center mt-2  text-darkblueui text-xs w-28 h-6">
                  Quis Porro Est
                </div>
                <div className="flex bg-[#d7e3f4] rounded-full justify-center items-center mt-2  text-darkblueui text-xs  w-28 h-6 ml-2">
                  Quis Porro Est
                </div>
                <div className="flex bg-[#d7e3f4] rounded-full justify-center items-center mt-2  text-darkblueui text-xs  w-28 h-6 ml-2">
                  Quis Porro Est
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-3/4 h-full justify-center items-center mt-5">
            <div className="flex flex-col h-48 w-3/4">
              <span className="text-darkblueui font-bold text-lg">
                Biography
              </span>
              <p className="text-darkblueui text-sm mt-4 pr-2">
                Lorem ipsum dolor sit amet. mollitia quo rerum velit et
                assumenda assumenda qui nemo debitis et suscipit magni. Lorem
                ipsum dolor sit amet. mollitia quo rerum velit et assumenda
                assumenda qui nemo debitis et suscipit magni. Lorem ipsum dolor
                sit amet. mollitia quo rerum velit et assumenda assumenda qui
                nemo debitis et suscipit magni.
              </p>
            </div>
            <div className="flex flex-col h-40 w-1/2 ml-4">
              <span className="text-darkblueui font-bold text-lg -mt-4">
                Expertise
              </span>
              <div className="flex flex-col mt-2">
                <span className="text-darkblueui font-bold text-base">
                  Excepturi nobis ea fugit{" "}
                </span>
                <p className="text-darkblueui text-sm">
                  Et minima consequuntur{" "}
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-darkblueui font-bold text-base">
                  Excepturi nobis ea fugit{" "}
                </span>
                <p className="text-darkblueui text-sm">
                  Et minima consequuntur{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end mt-5">
            <button
              className="bg-darkblueui px-5 h-9 rounded-full flex text-white text-sm items-center"
              onClick={handleProfileClose}
            >
              Send Message
              <ArrowIconWhite />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeProfile;
