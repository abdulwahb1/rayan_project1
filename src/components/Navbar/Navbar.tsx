import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { FaUser } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (href: string) => router.pathname === href;

  const navItem = (
    href: string,
    Icon: any,
    label: string,
    iconClass: string
  ) => (
    <Link href={href}>
      <div
        className={`flex flex-col items-center justify-center w-16 h-16 hover:bg-blue-500 rounded-full hover:text-white outerdivclass ${
          isActive(href) ? "bg-blue-500 text-white" : ""
        }`}
      >
        <Icon
          className={`text-2xl hover:fill-white ${
            isActive(href) ? "search-icon-active" : iconClass
          }`}
        />
        <span className="text-sm">{label}</span>
      </div>
    </Link>
  );

  return (
    <div className="flex w-full min-h-18 mt-2 justify-between items-center shadow">
      <div></div>
      <div className="flex space-x-10">
        {navItem("/Search", IoIosSearch, "Search", "search-icon")}
        {navItem("/Library", SlBookOpen, "Library", "search-icon")}
        {navItem("/Profile", FaUser, "Profile", "search-icon")}
        {navItem("/Chat", BiConversation, "Chat", "search-icon")}
      </div>
      <button className="h-[1.8rem] w-[4.8rem] rounded-full bg-blueui flex justify-center items-center mt-4 hover:bg-dark">
        <FaRegCircleQuestion className="text-sm mt-0.5 question-icon" />
        <span className="text-sm text-white ml-1 font-light">Help</span>
      </button>
    </div>
  );
};

export default Navbar;
