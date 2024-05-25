import React from "react";
import Link from "next/link";

type RightCardLinkProps = {
  title: string;
  link1Title: string;
  link1Description: string;
  link2Title: string;
  link2Description: string;
  url: string;
};

const RightCardLink = ({
  title,
  link1Title,
  link1Description,
  link2Title,
  link2Description,
  url,
}: RightCardLinkProps) => {
  return (
    <div className="shadowprofile w-[480px] h-[230px] rounded-lg p-4 mt-8">
      <div className="flex flex-col w-full h-full justify-between">
        <span className="text-whiteblue text-xl font-semibold whitespace-nowrap overflow-hidden">
          {title}
        </span>
        <div className="flex flex-col">
          <Link
            href={url}
            className="text-whiteblue text-lg underline underline-offset-2 font-semibold whitespace-nowrap overflow-hidden"
          >
            {link1Title}
          </Link>
          <span className="text-whiteblue text-base whitespace-nowrap overflow-hidden">
            {link1Description}
          </span>
        </div>
        <div className="flex flex-col">
          <Link
            href={url}
            className="text-whiteblue text-lg underline font-semibold underline-offset-2 whitespace-nowrap overflow-hidden"
          >
            {link2Title}
          </Link>
          <span className="text-whiteblue text-base whitespace-nowrap overflow-hidden">
            {link2Description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightCardLink;
