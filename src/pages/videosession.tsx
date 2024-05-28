import { Video, Rating } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const VideoSession = () => {
  const [showRating, setShowRating] = useState(false);
  const handleFinishClick = () => {
    setShowRating(true);
  };

  return (
    <section className="w-full h-screen flex flex-col">
      {!showRating ? <Video onFinish={handleFinishClick} /> : <Rating />}
    </section>
  );
};

export default VideoSession;
