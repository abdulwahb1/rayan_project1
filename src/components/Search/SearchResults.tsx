import React from "react";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  return (
    <div className="mt-8">
      <SearchResultCard
        title="Dolor Sit Amet"
        rating={4.5}
        reviews={20}
        description="Lorem ipsum dolor sit amet. mollitia quo rerum velit et assumenda assumenda qui nemo debitis et suscipit magni. "
      />
      <SearchResultCard
        title="Dolor Sit Amet"
        rating={4.5}
        reviews={20}
        description="Lorem ipsum dolor sit amet. mollitia quo rerum velit et assumenda assumenda qui nemo debitis et suscipit magni. "
      />
      <SearchResultCard
        title="Dolor Sit Amet"
        rating={4.5}
        reviews={20}
        description="Lorem ipsum dolor sit amet. mollitia quo rerum velit et assumenda assumenda qui nemo debitis et suscipit magni. "
      />
    </div>
  );
};

export default SearchResults;
