import React from "react";
import Link from "next/link";

type QuickLinksCardProps = {
  title: string;
  textSize?: "md" | "sm"; // Add a new prop for text size
  svg?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; // Add a new prop for SVG
  marginLeft?: boolean; // Add a new prop for margin-left
};

const QuickLinksCard = ({
  title,
  textSize = "md",
  svg: Svg,
  marginLeft = true, // Default to true
}: QuickLinksCardProps) => {
  const textSizeClass = textSize === "sm" ? "text-sm" : "text-md"; // Determine the text size class based on the textSize prop
  const marginLeftClass = marginLeft ? "ml-2" : ""; // Determine the margin-left class based on the marginLeft prop

  return (
    <div
      className={`flex bg-[#d7e3f4] rounded-full justify-center items-center mt-2 ${textSizeClass} text-darkblueui px-3 py-1 ${marginLeftClass}`}
    >
      <Link href="/">{title}</Link>
      {Svg && <Svg />} {/* Render the SVG if it's provided */}
    </div>
  );
};

export default QuickLinksCard;
