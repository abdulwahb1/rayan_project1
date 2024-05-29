import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar, Navbar } from "@/components";
import { FaCalendarAlt } from "react-icons/fa";
import SessionPlan from "@/components/SessionPlan/SessionPlan";
import { ProfileQuickLinkSection } from "@/components";

const Profile = () => {
  return (
    <section className="flex flex-col w-full h-full">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full h-full flex ml-7 items-start justify-start">
          <div className="flex flex-col h-full mt-12 ml-4">
            <h1 className="text-[#181849] text-3xl font-bold">Dashboard</h1>
            <div className="ml-3 mt-14">
              <div className="text-4xl">
                <FaCalendarAlt className="text-[#181849]" />
              </div>
              <div className="flex mt-5 justify-between">
                <p className="text-[#181849] text-lg font-bold">
                  Sessions Planned:
                </p>
                <Link
                  href="/"
                  className="text-sm font-medium px-2.5 rounded-full bg-[#D7E3F4] justify-center items-center flex"
                >
                  See history
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-1/4 ml-3">
              <SessionPlan />
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-end mt-8 mr-10">
            <ProfileQuickLinkSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
