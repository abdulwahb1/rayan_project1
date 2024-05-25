import React from "react";
import { LIKED_ARTICLE_LINK } from "@/constants/constant";
import RightCardLink from "./RightCardLink";

const ProfileQuickLinkSection = () => {
  return (
    <div>
      {LIKED_ARTICLE_LINK.map((link) => (
        <RightCardLink
          key={link.id}
          title={link.title}
          link1Title="Lorem Ipsum"
          link1Description="Dolor sit amet, consectetur adipiscing elit."
          link2Title="Consectetur"
          link2Description="Dolor sit amet, consectetur adipiscing elit."
          url={link.url}
        />
      ))}
    </div>
  );
};

export default ProfileQuickLinkSection;
