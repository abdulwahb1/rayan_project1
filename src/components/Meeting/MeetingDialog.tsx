import { ArrowIconWhite } from "@/Icons";
import React from "react";

const MeetingDialog = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-5">
        <div className="w-1/3 min-h-32 bg-[#EFF4FA] border rounded-md flex flex-col justify-center items-center p-5">
          <p>Time and date of your session</p>
          <div className="flex w-3/4 justify-center items-center mt-5">
            <div className="flex w-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.5 8.16H7.5C7.08579 8.16 6.75 8.49579 6.75 8.91C6.75 9.32421 7.08579 9.66 7.5 9.66H16.5C16.9142 9.66 17.25 9.32421 17.25 8.91C17.25 8.49579 16.9142 8.16 16.5 8.16Z"
                  fill="#181849"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.89 3.57H17C19.7614 3.57 22 5.80858 22 8.57V17.57C22 20.3314 19.7614 22.57 17 22.57H7C5.67392 22.57 4.40215 22.0432 3.46447 21.1055C2.52678 20.1679 2 18.8961 2 17.57V8.57C2 5.80858 4.23858 3.57 7 3.57H7.09V1.75C7.09 1.33579 7.42579 1 7.84 1C8.25421 1 8.59 1.33579 8.59 1.75V3.57H15.39V1.75C15.39 1.33579 15.7258 1 16.14 1C16.5542 1 16.89 1.33579 16.89 1.75V3.57ZM17 21.07C18.933 21.07 20.5 19.503 20.5 17.57V8.57C20.5 6.637 18.933 5.07 17 5.07H7C5.067 5.07 3.5 6.637 3.5 8.57V17.57C3.5 19.503 5.067 21.07 7 21.07H17Z"
                  fill="#181849"
                />
              </svg>
              <p className="text-sm ml-2">24th of August</p>
            </div>
            <div className="flex w-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.65 7.59C8.35449 7.31464 7.89399 7.32277 7.60838 7.60838C7.32277 7.89399 7.31464 8.35449 7.59 8.65L11.37 12.43V17.12C11.37 17.5342 11.7058 17.87 12.12 17.87C12.5342 17.87 12.87 17.5342 12.87 17.12V12.12C12.8698 11.9212 12.7907 11.7305 12.65 11.59L8.65 7.59Z"
                  fill="#181849"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2H14.24C16.3617 2 18.3966 2.84285 19.8969 4.34315C21.3971 5.84344 22.24 7.87827 22.24 10V14.24C22.24 18.6583 18.6583 22.24 14.24 22.24H10C5.58172 22.24 2 18.6583 2 14.24V10C2 5.58172 5.58172 2 10 2ZM14.24 20.74C17.8276 20.7345 20.7345 17.8276 20.74 14.24V10C20.7345 6.41243 17.8276 3.50551 14.24 3.5H10C6.41243 3.50551 3.50551 6.41243 3.5 10V14.24C3.50551 17.8276 6.41243 20.7345 10 20.74H14.24Z"
                  fill="#181849"
                />
              </svg>
              <p className="text-sm ml-2">4:00PM</p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center mt-5">
            <button className="bg-[#3468B6] px-5 h-9 rounded-full flex text-white text-sm items-center">
              Download to calendar
              <ArrowIconWhite />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingDialog;
