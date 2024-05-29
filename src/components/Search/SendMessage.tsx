import { ArrowIconWhite, LittleStar } from "@/Icons";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import SeeProfile from "./SeeProfile";

type SendMessageCardProps = {
  title: string;
  rating: number;
  reviews: number;
  handleClose: () => void;
};

const SendMessage = ({
  title,
  rating,
  reviews,
  handleClose,
}: SendMessageCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileOpen = () => {
    setIsOpen(true);
  };

  const handleProfileClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="bg-white w-[48rem] md:max-w-lg mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 bg-[#D7E3F4] rounded-full justify-center flex items-center"></div>
            <div className="flex flex-col ml-5 w-3/4">
              <div className="flex justify-between">
                <span className="text-darkblueui text-xl font-bold hover:underline">
                  {title}
                </span>
                <button
                  className="bg-[#6893D4] w-28 h-7 rounded-full flex justify-center items-center whitespace-nowrap"
                  onClick={handleProfileOpen}
                >
                  <FaUser className="mr-2 text-white text-xs" />
                  <span className="text-white text-xs">View Profile</span>
                </button>
              </div>
              <div className="flex">
                <LittleStar />
                <p className="ml-1 text-xs text-darkblueui">
                  {rating}
                  <span className="underline ml-1">({reviews} reviews)</span>
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="flex bg-[#d7e3f4] rounded-full justify-center items-center mt-2  text-darkblueui text-xs w-28 h-6">
                  Quis Porro Est
                </div>
                <div className="flex bg-[#d7e3f4] rounded-full justify-center items-center mt-2  text-darkblueui text-xs  w-28 h-6">
                  Quis Porro Est
                </div>
                <div className="flex bg-[#d7e3f4] rounded-full justify-center items-center mt-2  text-darkblueui text-xs  w-28 h-6">
                  Quis Porro Est
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex mt-4">
            <textarea
              className="w-full h-32 border border-[#D7E3F4] rounded-lg p-2"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="flex w-full justify-end mt-5">
            <button className="mr-5" onClick={handleClose}>
              <span className="text-darkblueui text-sm underline underline-offset-2">
                Cancel
              </span>
            </button>
            <button className="bg-darkblueui px-5 h-9 rounded-full flex text-white text-sm items-center">
              Send
              <ArrowIconWhite />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <SeeProfile
          title={title}
          rating={rating}
          reviews={reviews}
          handleProfileClose={handleProfileClose}
        />
      )}
    </div>
  );
};

export default SendMessage;
