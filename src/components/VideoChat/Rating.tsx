import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import QuickLinksCard from "../QuickLinks/QuickLinksCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

const Rating = () => {
  const [clickedStars, setClickedStars] = useState(0);

  const handleClick = (index: number) => {
    setClickedStars(index + 1);
  };

  return (
    <>
      <div className="w-full h-full justify-center items-center flex flex-col">
        <h1 className="text-2xl text-darkblueui font-bold mb-12">
          How was your experience?
        </h1>
        <div className="w-28 h-28 rounded-full bg-blueui mb-6"></div>
        <span className="text-darkblueui text-xl font-bold mb-6">
          Dolor Sit Amet
        </span>
        <span className="text-darkblueui font-bold text-lg mb-6">
          How many stars do you give?
        </span>
        <div className="flex justify-between items-center mb-6">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div onClick={() => handleClick(index)} key={index}>
                <Image
                  src={
                    index < clickedStars ? "/starfilled.png" : "/starhollow.png"
                  }
                  height={32}
                  width={32}
                  alt="star"
                  className="ml-6"
                />
              </div>
            ))}
        </div>
        <span className="text-darkblueui font-bold text-lg mb-6">
          Any quick feedback to help Dolor Sit Amet?
        </span>
        <div className="flex flex-col items-center mb-20">
          <div className="flex justify-center">
            <QuickLinksCard textSize="md" title="Laudantium Non Provident " />
            <QuickLinksCard textSize="md" title="Quis Porro Est  " />
            <QuickLinksCard textSize="md" title="Voluptatibus Enim  " />
          </div>
          <div className="flex justify-center">
            <QuickLinksCard textSize="md" title="Lorem Ipsum " />
            <QuickLinksCard textSize="md" title="Dolor Sit Amet " />
            <QuickLinksCard textSize="md" title="Conseteur Amis " />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mb-16">
          <Popover>
            <PopoverTrigger>
              <div className="flex">
                <span className="text-base text-darkblueui">
                  Write personal feedback
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  className="mt-2 ml-2"
                >
                  <path
                    d="M7.29289 8.20711C7.68342 8.59763 8.31658 8.59763 8.70711 8.20711L15.0711 1.84315C15.4616 1.45262 15.4616 0.819456 15.0711 0.428932C14.6805 0.0384075 14.0474 0.0384075 13.6569 0.428932L8 6.08579L2.34315 0.428932C1.95262 0.0384081 1.31946 0.0384081 0.928932 0.428932C0.538408 0.819457 0.538408 1.45262 0.928932 1.84315L7.29289 8.20711ZM7 4.5L7 7.5L9 7.5L9 4.5L7 4.5Z"
                    fill="#172B6D"
                  />
                </svg>
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <button className="bg-darkblueui px-5 h-9 rounded-full flex text-white text-sm items-center">
          Submit
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
    </>
  );
};

export default Rating;
