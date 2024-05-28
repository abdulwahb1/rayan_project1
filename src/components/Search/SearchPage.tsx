/* eslint-disable react/no-unescaped-entities */
import React from "react";
import QuickLinksCard from "../QuickLinks/QuickLinksCard";
import { CrossSvg } from "@/Icons";
import SearchResults from "./SearchResults";

type SearchPageProps = {
  searchTerm: string;
};

const SearchPage = ({ searchTerm }: SearchPageProps) => {
  return (
    <section className="w-full h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <span className="text-2xl font-bold text-darkblueui">
          Search results for:
        </span>
        <span className="text-2xl font-bold text-blueui">"{searchTerm}"</span>
        <span className="font-bold text-darkblueui text-base mt-6">
          Applied filters:
        </span>
        <div className="flex w-1/2 justify-center items-center mt-3">
          <div className="flex justify-center">
            <QuickLinksCard
              textSize="sm"
              title="Laudantium Non Provident"
              svg={CrossSvg}
            />
            <QuickLinksCard
              textSize="sm"
              title="Quis Porro Est"
              svg={CrossSvg}
            />
            <QuickLinksCard
              textSize="sm"
              title="Voluptatibus Enim"
              svg={CrossSvg}
            />
          </div>
        </div>
        <SearchResults />
      </div>
    </section>
  );
};

export default SearchPage;
