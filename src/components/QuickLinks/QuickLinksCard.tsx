import React from "react";
import Link from "next/link";

type QuickLinksCardProps = {
  title: string;
};

const QuickLinksCard = ({ title }: QuickLinksCardProps) => {
  return (
    <div className="flex flex-col bg-[#d7e3f4] rounded-full ml-2 justify-center items-center mt-2 text-md text-darkblueui px-3 py-1">
      <Link href="/">{title}</Link>
    </div>
  );
};

export default QuickLinksCard;
