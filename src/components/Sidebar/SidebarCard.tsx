import React from "react";
import Link from "next/link";
type SidebarProps = {
  title: string;
};

const SidebarCard = ({ title }: SidebarProps) => {
  return (
    <div className="flex w-full hover:bg-white hover:text-[#181849] text-white font-semibold hover:font-bold">
      <div className="ml-6 w-full flex min-h-16 justify-start items-center ">
        <div className="bg-[#D7E3F4] w-8 h-8 rounded-full"></div>
        <Link href="/" className="ml-3">
          <span className="text-md ">{title}</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarCard;
