import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import QuickLinksCard from "../QuickLinks/QuickLinksCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { ArrowIconWhite } from "@/Icons";

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
                <ArrowIconWhite />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <button className="bg-darkblueui px-5 h-9 rounded-full flex text-white text-sm items-center">
          Submit
          <ArrowIconWhite />
        </button>
      </div>
    </>
  );
};

export default Rating;
