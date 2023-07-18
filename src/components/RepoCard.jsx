import RepoColors from "../assets/colors.json";

import { BsStarFill } from "react-icons/bs";
import { AiOutlineFork } from "react-icons/ai";

import { motion } from "framer-motion";

const RepoCard = ({
  full_name,
  description,
  language,
  forks,
  stargazers_count,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: "spring",
        }}
        className="card w-[20rem]"
      >
        <div className="card-border"></div>
        <div className="card-content flex flex-col text-start  p-5 rounded-xl  border-white/10 border-[1px] transition-all duration-300 hover:scale-105">
          <a
            target="_blank"
            href={`https://github.com/${full_name}`}
            className="font-medium "
          >
            {full_name}
          </a>
          <p className="flex-grow min-h-[5rem] font-light">{description}</p>
          <div className="flex gap-5 text-sm">
            <div className="flex gap-2 items-center ">
              <div
                style={{ background: RepoColors[language].color }}
                className="w-3 h-3 rounded-full"
              ></div>{" "}
              {language}
            </div>
            <div className="flex items-center gap-1">
              <BsStarFill /> {stargazers_count}
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineFork /> {forks}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RepoCard;
