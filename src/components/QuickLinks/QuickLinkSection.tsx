import React from "react";
import QuickLinksCard from "./QuickLinksCard";
import { QUICK_LINKS } from "../../constants/constant";

const QuickLinks = () => {
  return (
    <div className="flex flex-col w-[517px] min-h-[100px] justify-center items-center">
      <div className="flex flex-wrap justify-center items-center">
        {QUICK_LINKS.map((quickLink) => (
          <QuickLinksCard key={quickLink.id} title={quickLink.title} />
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
