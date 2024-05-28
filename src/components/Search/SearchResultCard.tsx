import React from "react";
import QuickLinksCard from "../QuickLinks/QuickLinksCard";
import { LittleStar } from "@/Icons";

type SearchResultCardProps = {
  title: string;
  rating: number;
  reviews: number;
  description: string;
};

const SearchResultCard = ({
  title,
  rating,
  reviews,
  description,
}: SearchResultCardProps) => {
  return (
    <div className="shadowprofile mt-8 bg-white w-[670px] h-44 rounded-lg flex justify-center items-center px-5">
      <div className="flex justify-center items-center">
        <div className="w-28 h-28 bg-[#D7E3F4] rounded-full justify-center flex items-center"></div>
        <div className="flex flex-col ml-5 w-3/4">
          <span className="text-darkblueui text-xl font-bold">{title}</span>
          <div className="flex">
            <LittleStar />
            <p className="ml-1 text-xs text-darkblueui">
              {rating}
              <span className="underline ml-1">({reviews} reviews)</span>
            </p>
          </div>
          <p className="text-darkblueui text-sm">{description}</p>
          <div className="flex justify-between w-3/4">
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
    </div>
  );
};

export default SearchResultCard;
