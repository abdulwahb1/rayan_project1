import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FinalStepDialog from "./FInalStepDialog";

const Stepper = () => {
  const steps = ["Account Details", "Interests", "Biography", "Ready!"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="flex justify-between mt-9">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step"></div>
            <p className="text-[#181849] text-xs">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-2/4 h-full justify-center items-center mt-20">
        {(currentStep === 1 && <FirstStep />) ||
          (currentStep === 2 && <SecondStep />) ||
          (currentStep === 3 && <ThirdStep />) ||
          (currentStep === 4 && <FinalStepDialog />)}
        <div className="w-2/4 h-full flex justify-end items-center mt-5">
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="mr-4 text-darkblueui underline underline-offset-2"
          >
            Skip this step
          </button>
          {!complete && (
            <button
              className="bg-darkblueui px-5 py-2 rounded-full flex text-white"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 ml-3"
              >
                <g id="Frame 1">
                  <path
                    id="Vector"
                    d="M11.6666 19.3333C11.2 19.3333 10.8889 19.1778 10.5777 18.8667C9.95553 18.2444 9.95553 17.3111 10.5777 16.6889L18.3555 8.91112C18.9777 8.2889 19.9111 8.2889 20.5333 8.91112C21.1555 9.53335 21.1555 10.4667 20.5333 11.0889L12.7555 18.8667C12.4444 19.1778 12.1333 19.3333 11.6666 19.3333Z"
                    fill="#EFF4FA"
                  />
                  <path
                    id="Vector_2"
                    d="M19.4444 11.5556C18.9777 11.5556 18.6666 11.4 18.3555 11.0889L10.5777 3.31113C9.95553 2.68891 9.95553 1.75557 10.5777 1.13335C11.2 0.511132 12.1333 0.511132 12.7555 1.13335L20.5333 8.91112C21.1555 9.53334 21.1555 10.4667 20.5333 11.0889C20.2222 11.4 19.9111 11.5556 19.4444 11.5556Z"
                    fill="#EFF4FA"
                  />
                  <path
                    id="Vector_3"
                    d="M17.9444 11.6667H1.05556C0.422222 11.6667 0 11.0667 0 10.1667C0 9.26669 0.422222 8.66669 1.05556 8.66669H17.9444C18.5778 8.66669 19 9.26669 19 10.1667C19 11.0667 18.5778 11.6667 17.9444 11.6667Z"
                    fill="#EFF4FA"
                  />
                </g>
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Stepper;
