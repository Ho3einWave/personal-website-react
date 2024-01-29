import { FaGlobe, FaGithub } from "react-icons/fa6";
import { RiOpenSourceFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import { EffectFlip } from "swiper/modules";
const ProjectsCard = ({
    name,
    type,
    images,
    description,
    link,
    active,
    opensource,
    github_link,
    tags,
    technologies,
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
                className="card w-[20rem] h-[28rem] !rounded-2xl"
            >
                <div className="card-border"></div>
                <div className="card-content flex flex-col gap-2 text-start  p-5 rounded-2xl  border-white/10 border-[1px] transition-all duration-300 ">
                    <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        loop
                        autoplay
                        modules={[EffectFlip]}
                        className="rounded-2xl w-[17rem]"
                    >
                        {images.map((image, idx) => (
                            <SwiperSlide key={`${name}-${idx}`}>
                                <img
                                    className="rounded-2xl object-contain w-[17rem]"
                                    src={image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <h1 className="text-sm pl-2 flex items-center gap-2">
                        {name}
                        {opensource ? (
                            <RiOpenSourceFill className="text-xl" />
                        ) : (
                            ""
                        )}
                        <div
                            className="px-3  inline w-fit rounded-xl  text-[10px] "
                            style={{
                                background: active ? "#40c057" : "#fa5252",
                            }}
                        >
                            {active ? "Active" : "DeActive"}
                        </div>
                    </h1>
                    <div>{description.slice(0, 80)}</div>
                    <div className="text-xs">
                        Positions:{" "}
                        {tags.map((item) => (
                            <span className="bg-blue-600 ml-1 px-2 text-nowrap rounded-xl">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="text-xs ">
                        Technologies:{" "}
                        <span className="flex flex-wrap gap-1">
                            {technologies.map((item) => (
                                <span className="bg-blue-600 ml-1 px-2 text-nowrap rounded-xl">
                                    {item}
                                </span>
                            ))}
                        </span>
                    </div>
                    <div className="bg-zinc-800 w-full p-2 rounded-2xl flex justify-center gap-1">
                        <a
                            href={link}
                            className="bg-zinc-900 w-1/2  rounded-2xl flex items-center justify-center p-2"
                        >
                            <FaGlobe />
                        </a>

                        <a
                            href={github_link ? github_link : "#"}
                            target="blank"
                            style={{
                                pointerEvents: github_link ? "auto" : "none",
                                opacity: github_link ? 1 : 0.3,
                            }}
                            className="bg-zinc-900 w-1/2  rounded-2xl flex items-center justify-center p-2 "
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectsCard;
