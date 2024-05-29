import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

type SidebarProps = {
  title: string;
  href: string; // Add a href prop to link to different pages
};

const SidebarCard = ({ title, href }: SidebarProps) => {
  const router = useRouter(); // Use useRouter to get the current route

  // Determine the styles based on the current route
  const styles =
    router.pathname === href ||
    (router.pathname === "/" &&
      (href === "/profile" || href === "/chat" || href === "/settings"))
      ? "bg-white text-[#181849] font-bold"
      : "text-white";

  return (
    <div
      className={`flex w-full hover:bg-white hover:text-[#181849] font-semibold hover:font-bold ${styles}`}
    >
      <div className="ml-6 w-full flex min-h-16 justify-start items-center ">
        <div className="bg-[#D7E3F4] w-8 h-8 rounded-full"></div>
        <Link href={href} className="ml-3">
          <span className="text-md ">{title}</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarCard;
