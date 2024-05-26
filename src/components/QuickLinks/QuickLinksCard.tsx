import React from "react";
import Link from "next/link";

type QuickLinksCardProps = {
  title: string;
  textSize?: "md" | "sm"; // Add a new prop for text size
};

const QuickLinksCard = ({ title, textSize = "md" }: QuickLinksCardProps) => {
  const textSizeClass = textSize === "sm" ? "text-sm" : "text-md"; // Determine the text size class based on the textSize prop

  return (
    <div
      className={`flex flex-col bg-[#d7e3f4] rounded-full ml-2 justify-center items-center mt-2 ${textSizeClass} text-darkblueui px-3 py-1`}
    >
      <Link href="/">{title}</Link>
    </div>
  );
};

export default QuickLinksCard;
