import { ArrowIconWhite } from "@/Icons";
import { MeetingDialog, Navbar } from "@/components";
import SidebarCard from "@/components/Sidebar/SidebarCard";
import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";

const Chat = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full relative z-30">
        <Navbar />
      </div>
      <div className="flex w-full h-full">
        <div className="flex flex-col min-w-[250px] max-w-[250px] bg-[#181849] min-h-screen">
          <h2 className="text-white text-2xl font-bold mt-4 ml-6">Chat</h2>
          <div className="flex flex-col w-full mt-5">
            <SidebarCard title="Dolor Sit Amet" href="/chat" />
            <SidebarCard title="Conseteur Et Amis" href="/videoSession" />
            <SidebarCard title="Assumenda Qui Nemo" href="/" />
            <SidebarCard title="Debitis Et Suscipit" href="/Settings" />
            <SidebarCard title="Dolor Sit Amet" href="/" />
          </div>
        </div>
        <div className="w-full items-center flex flex-col">
          <div className="w-full py-4 px-10 items-center flex min-h-20 shadowprofile bg-white relative z-20">
            <div className="w-16 h-16 rounded-full bg-[#D7E3F4]"></div>
            <div className="flex flex-col ml-5">
              <span className="text-darkblueui text-xl font-bold">
                Dolor Sit Amet
              </span>
              <span className="text-darkblueui text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quidem?
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col shadowprofile relative z-10 h-full bg-white">
            <div className="w-full h-full flex flex-col px-5">
              <div className="w-full flex justify-end py-5">
                <div className="w-1/2 min-h-32 bg-[#3468B6] border rounded-l-3xl rounded-tr-3xl"></div>
              </div>
              <div className="w-full flex justify-start py-5">
                <div className="w-1/2 min-h-32 bg-[#D7E3F4] border rounded-r-3xl rounded-tl-3xl"></div>
              </div>
              <div className="w-full flex justify-end py-5">
                <div className="w-1/2 min-h-32 bg-[#3468B6] border rounded-l-3xl rounded-tr-3xl"></div>
              </div>
              <MeetingDialog />
            </div>
            <div className="w-full flex mt-auto mb-20 pl-5">
              <div className="flex border-2 border-[#D7E3F4] w-11/12 rounded-2xl justify-center items-center">
                <textarea className="w-full appearance-none bg-transparent border-none leading-tight focus:outline-none " />
                <button
                  className="bg-[#6893D4] px-4 h-9 rounded-full flex text-white text-sm items-center mr-1 whitespace-nowrap"
                  onClick={openDialog}
                >
                  <FaUser className="mr-2" />
                  Plan Meeting
                </button>
              </div>
              <div className="w-1/12 justify-center items-center flex">
                <button className="bg-darkblueui px-5 h-9 rounded-full flex text-white text-sm items-center">
                  Send
                  <ArrowIconWhite />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>

          <div className="bg-white w-11/12 md:max-w-lg mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
            <div className="py-4 text-left px-6">
              <div className="flex w-full justify-center">
                <Image
                  src="/calendar.png"
                  width={74}
                  height={74}
                  alt="calendar"
                />
                <div className="flex flex-col justify-center ml-5">
                  <p className="text-darkblueui font-bold text-lg">
                    Pick a date and time
                  </p>
                  <p className="text-darkblueui text-sm">
                    Lorem ipsum dolor sit amet. mollitia quo rerum velit et
                    assumenda.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-6 ml-5">
                <input
                  type="text"
                  className="border-2 border-[#D7E3F4] w-2/5 h-9 rounded-md appearance-none bg-transparent leading-tight focus:outline-none "
                />
                <input
                  type="text"
                  className="border-2 border-[#D7E3F4] ml-4 w-2/5 h-9 rounded-md appearance-none bg-transparent leading-tight focus:outline-none "
                />
              </div>
              <div className="flex w-full justify-end mt-5">
                <button className="mr-5" onClick={closeDialog}>
                  <span className="text-darkblueui text-sm underline underline-offset-2">
                    Cancel
                  </span>
                </button>
                <button className="bg-darkblueui px-5 h-9 rounded-full flex text-white text-sm items-center">
                  Send
                  <ArrowIconWhite />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Chat;
