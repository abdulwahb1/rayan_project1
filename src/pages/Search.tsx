import React from "react";
import { Navbar, QuickLinks, SelectTopics } from "@/components";

const Search = () => {
  return (
    <section className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-auto mb-auto">
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-darkblueui font-bold text-3xl">
            What do you want to learn?
          </h1>
          <p className="text-darkblueui font-normal text-sm text-center">
            Search topics, teachers and price ranges about anything you <br />{" "}
            want to learn.
          </p>
        </div>
        <div className="border-2 border-[#d7e3f4] rounded-full w-96 h-12 mt-8 mx-auto">
          <form className="w-full max-w-sm">
            <div className="flex items-center py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder=""
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
        <div className="flex mt-4 justify-center">
          <SelectTopics />
        </div>
        <div className="mt-4 flex flex-col min-h-[100px] mx-auto">
          <QuickLinks />
        </div>
      </div>
    </section>
  );
};

export default Search;
