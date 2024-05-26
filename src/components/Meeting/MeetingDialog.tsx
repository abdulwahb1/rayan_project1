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
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingDialog;
