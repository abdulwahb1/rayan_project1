import React from "react";

const FirstStep = () => {
  return (
    <>
      <div className="flex flex-col min-h-96 h-full justify-center items-center">
        <h2 className="text-darkblueui font-bold text-2xl">Account Details</h2>
        <span className="text-darkblueui text-base text-center">
          Please provide your account details to sign in and display your <br />{" "}
          name on the platform.
        </span>
        <input
          type="text"
          placeholder="Name"
          className="bg-white py-4 pl-4 pr-6 min-w-96 rounded-full border border-[#D7E3F4] mt-10"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="bg-white py-4 pl-4 pr-6 min-w-96 rounded-full border border-[#D7E3F4] mt-5"
        />
        <input
          type="text"
          placeholder="Confirm Email Address"
          className="bg-white py-4 pl-4 pr-6 min-w-96 rounded-full border border-[#D7E3F4] mt-5"
        />
      </div>
    </>
  );
};

export default FirstStep;
