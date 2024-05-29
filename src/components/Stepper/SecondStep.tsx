import React from "react";
import QuickLinksCard from "../QuickLinks/QuickLinksCard";

const SecondStep = () => {
  return (
    <>
      <div className="flex flex-col min-h-96 h-full items-center">
        <h2 className="text-darkblueui font-bold text-2xl">Favourite topics</h2>
        <span className="text-darkblueui text-base text-center">
          Please fill in topics you find interesting. These will be used to give{" "}
          <br />
          an indication on your interests.
        </span>
        <div className="flex flex-col w-[517px] min-h-[100px] justify-center items-center">
          <div className="flex flex-wrap justify-center items-center">
            <QuickLinksCard title="Laudantium Non Provident" textSize="sm" />
            <QuickLinksCard title="Quis Porro Est " textSize="sm" />
            <QuickLinksCard title="Voluptatibus Enim " textSize="sm" />
            <QuickLinksCard title="Lorem Ipsum" textSize="sm" />
            <QuickLinksCard title="Dolor Sit Amet" textSize="sm" />
            <QuickLinksCard title="Conseteur Amis" textSize="sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
