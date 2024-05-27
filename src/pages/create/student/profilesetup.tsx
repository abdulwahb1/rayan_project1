import Stepper from "@/components/Stepper/Stepper";
import React from "react";

const ProfileSetup = () => {
  return (
    <section className="flex flex-col w-full min-h-screen    justify-center items-center">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <h1 className="text-darkblueui text-lg">Setting up your Profile</h1>
        <span className="text-blueui text-base">
          To make the platform as engaging as possible, we require some <br />
          information so our teachers know who they are talking to.
        </span>
        <Stepper />
      </div>
    </section>
  );
};

export default ProfileSetup;
