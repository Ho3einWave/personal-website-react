import { FiExternalLink } from "react-icons/fi";
import React from "react";

const SocialCard = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      className="min-w-[18rem] max-w-[20rem] flex items-center justify-between px-5 rounded-2xl font-rubik bg-boxes h-16 border-white/10 border-[1px] gap-2"
    >
      <span className="text-3xl">{icon}</span>
      <p className="flex-grow">{title}</p>
      <FiExternalLink />
    </a>
  );
};

export default SocialCard;
