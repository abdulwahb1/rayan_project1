import React, { useState } from "react";
import { Navbar, QuickLinks, SelectTopics, SearchPage } from "@/components";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowResults(true);
  };
  return (
    <section className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-auto mb-auto">
        {!showResults && (
          <>
            <div className="flex flex-col justify-center items-center mt-20">
              <h1 className="text-darkblueui font-bold text-3xl">
                What do you want to learn?
              </h1>
              <p className="text-darkblueui font-normal text-sm text-center">
                Search topics, teachers and price ranges about anything you{" "}
                <br /> want to learn.
              </p>
            </div>
            <div className="border-2 border-[#d7e3f4] rounded-full w-96 mt-8 mx-auto">
              <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
                <div className="flex justify-center items-center py-1">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-3 leading-tight focus:outline-none"
                    type="text"
                    placeholder=""
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                  <button
                    className="flex-shrink-0 bg-darkblueui text-sm text-white py-2 px-4 rounded-full mr-1 hover:bg-blueui"
                    type="submit"
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
          </>
        )}
        {showResults && <SearchPage searchTerm={searchTerm} />}
      </div>
    </section>
  );
};

export default Search;
