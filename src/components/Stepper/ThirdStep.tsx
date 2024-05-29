import React from "react";

const ThirdStep = () => {
  return (
    <>
      <div className="flex flex-col min-h-96 h-full items-center">
        <h2 className="text-darkblueui font-bold text-2xl">
          Tell us something about yourself
        </h2>
        <span className="text-darkblueui text-base text-center">
          Students will be able to see this information. You can always <br />{" "}
          adjust this information in the Account Settings.
        </span>
        <textarea
          placeholder="Teacher for 47 years, specialized in ...."
          className="bg-white min-w-[27rem] min-h-24 rounded-3xl border border-[#D7E3F4] mt-5 py-2 px-2"
        />
      </div>
    </>
  );
};

export default ThirdStep;
