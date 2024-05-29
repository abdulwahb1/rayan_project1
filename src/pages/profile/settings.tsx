import { Navbar, Sidebar } from "@/components";
import React from "react";
import Link from "next/link";
import QuickLinksCard from "@/components/QuickLinks/QuickLinksCard";

const Settings = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <Navbar />
      <div className="w-full h-full flex">
        <Sidebar />
        <div className="w-full h-full flex flex-col ml-14 mt-11">
          <div className="flex flex-col">
            <p className="text-blueui">Teacher</p>
            <h1 className="text-darkblueui text-2xl font-bold">
              Account Settings
            </h1>
          </div>
          {/* {account personal detail} */}
          <div className="flex w-full h-full items-center mt-8">
            <div className="w-36 h-36 rounded-full bg-[#D7E3F4]"></div>
            <span className="ml-8 text-darkblueui text-2xl font-bold whitespace-nowrap">
              Dolor Sit Amet
            </span>
          </div>
          <div className="flex h-full mt-8">
            <div className="flex flex-col h-full w-1/2">
              <div className="flex justify-between w-full h-full">
                <span className="text-darkblueui text-lg font-bold">
                  Personal Details
                </span>
                <Link
                  href="/"
                  className="text-sm font-medium px-2.5 rounded-full bg-[#D7E3F4] justify-center items-center flex"
                >
                  Adjust details <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="flex flex-col w-full h-full mt-8">
                <div className="flex flex-col w-full h-full">
                  <span className="text-darkblueui font-bold text-base">
                    Name
                  </span>
                  <span className="text-darkblueui text-sm">
                    Dolor Sit Amet
                  </span>
                </div>
                <div className="flex flex-col w-full h-full mt-6">
                  <span className="text-darkblueui font-bold">About me</span>
                  <span className="text-darkblueui text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio ut ea labore beatae, delectus, quo deserunt quas
                    nesciunt, magni dolorem est quasi doloribus ad voluptate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sapiente veniam modi dolorum. Neque reprehenderit nobis
                    quidem placeat commodi distinctio. Eligendi commodi
                    temporibus repellendus impedit facilis.
                  </span>
                </div>
                <div className="flex flex-col w-full h-full mt-4">
                  <span className="text-darkblueui font-bold">Expertise</span>
                  <span className="text-darkblueui text-sm">
                    Teaching University Classes at Harvard
                  </span>
                  <span className="text-darkblueui text-sm">
                    Community service as priest
                  </span>
                  <span className="text-darkblueui text-sm">
                    Guiding international students to integrate in society
                  </span>
                </div>
                <div className="flex flex-col w-full h-full mt-8">
                  <span className="text-darkblueui font-bold">Topics</span>
                  <div className="flex flex-col min-h-[100px]">
                    <div className="flex flex-wrap ">
                      <QuickLinksCard
                        title="Laudantium Non Provident "
                        textSize="sm"
                      />
                      <QuickLinksCard title="Quis Porro Est " textSize="sm" />
                      <QuickLinksCard
                        title="Voluptatibus Enim "
                        textSize="sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/6 ml-16 h-full">
              <div className="flex justify-between w-full h-full">
                <span className="text-darkblueui text-lg font-bold">
                  Personal Details
                </span>
                <Link
                  href="/"
                  className="text-sm font-medium px-2.5 rounded-full bg-[#D7E3F4] justify-center items-center flex"
                >
                  Adjust settings <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="flex flex-col w-full h-full mt-2">
                <span className="text-darkblueui font-bold text-base">
                  Hourly Fee
                </span>
                <span className="text-darkblueui text-sm">$60</span>
                <span className="text-blueui text-xs">
                  We charge a 15% commision to keep our platform running. <br />{" "}
                  This means the end user pays $60, you get $51
                </span>
              </div>
              <div className="flex flex-col w-full h-full mt-4">
                <span className="text-darkblueui font-bold">
                  Connected Bank Account
                </span>
                <span className="text-darkblueui text-sm mt-2">
                  Card Number
                </span>
                <span className="text-darkblueui text-sm">
                  **** **** **** 5546
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
