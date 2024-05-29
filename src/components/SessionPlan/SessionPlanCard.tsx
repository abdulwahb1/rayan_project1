import { CrossSvgBlue } from "@/Icons";
import Image from "next/image";
import Link from "next/link";
import { BiConversation } from "react-icons/bi";

type SessionPlanCardProps = {
  title: string;
  date: string;
  image: string;
};

const SessionPlanCard = ({ title, date, image }: SessionPlanCardProps) => {
  return (
    <div className="shadowprofile mt-5 bg-white w-[685px] min-h-20 rounded-md flex justify-center items-center">
      <div className="flex justify-center items-center ml-4">
        <div className="w-12 h-12 bg-[#D7E3F4] rounded-full justify-center flex items-center overflow-hidden">
          <Image
            src={image}
            width={26}
            height={76}
            alt="profile"
            className="mt-3.5"
          />
        </div>
      </div>
      <div className="flex flex-col ml-6 items-start justify-center font-bold text-md w-full max-w-[30rem] max-h-20">
        <Link href="/" className="overflow-hidden max-h-[22px]">
          <span className="text-darkblueui text-md underline overflow-hidden">
            {title}
          </span>
        </Link>
        <span className="font-normal text-darkblueui text-sm">{date}</span>
      </div>
      <div className="flex ml-3 w-3/4 justify-evenly items-center">
        {/* 1st Icon Link */}
        <div className="flex flex-col justify-center items-center">
          <Link href="/" className="flex flex-col justify-center items-center">
            <Image src="/chat.png" width={29} height={29} alt="chat icon" />
            <span className="text-blueui text-center text-xs flex flex-col items-center whitespace-nowrap">
              Open
              <br />
              Chat
            </span>
          </Link>
        </div>
        {/* 2nd Icon Link */}
        <div className="flex flex-col justify-center items-center">
          <Link href="/" className="flex flex-col justify-center items-center">
            <Image
              src="/calendaricon.png"
              width={29}
              height={29}
              alt="chat icon"
            />
            <span className="text-blueui text-center text-xs flex flex-col items-center whitespace-nowrap">
              Reschedule
              <br />
              Session
            </span>
          </Link>
        </div>
        {/* 3rd Icon Link */}
        <div className="flex flex-col justify-center items-center mt-1">
          <Link href="/" className="flex flex-col justify-center items-center">
            <CrossSvgBlue />
            <span className="text-blueui text-center text-xs flex flex-col items-center whitespace-nowrap mt-2">
              Cancel
              <br />
              Session
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SessionPlanCard;
