import React from "react";
import { QuickLinks, SelectTopics } from "@/components";

const Search = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center border border-red-500 ">
      <div className="max-w-[25.5rem] flex flex-col justify-center items-center">
        <h1 className="text-darkblueui font-bold text-3xl">
          What do you want to learn?
        </h1>
        <p className="text-darkblueui font-normal text-sm text-center">
          Search topics, teachers and price ranges about anything you want to
          learn.
        </p>
      </div>
      <div className="border-2 border-[#d7e3f4] rounded-full w-96 h-12 mt-8">
        <form className="w-full max-w-sm">
          <div className="flex items-center py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
            />
            <button
              className="h-[2rem] w-[5rem] flex-shrink-0 bg-darkblueui text-sm text-white py-1 px-2 rounded-full mr-1 hover:bg-blueui"
              type="button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-4">
        <SelectTopics />
      </div>
      <div className="mt-4 flex flex-col min-h-[100px]">
        <QuickLinks />
      </div>
    </section>
  );
};

export default Search;
