import React, { useEffect, useState } from "react";
import { useLanyard } from "react-use-lanyard";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import NavBar from "../components/navbar";
import Tooltip from "../components/ToolTip";
import RepoCard from "../components/RepoCard";
import DiscordCard from "../components/DiscordCard";

import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import Footer from "../components/Footer";
import avatar from "../assets/avatar.jpg";
import constants from "../utils/constants";
import axios from "axios";
import { useThemeStore } from "../contexts/theme";

const Home = () => {
  const { mode } = useThemeStore();
  const [repos, setRepos] = useState([]);
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [top4, setTop4] = useState([]);

  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  const { loading, status: discord_data /*, websocket */ } = useLanyard({
    userId: constants.discord_id,
    socket: true,
  });
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${constants.github_username}/repos`)
      .then((res) => {
        setRepos(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    if (repos.length) {
      const myrepo = repos.filter((e) => !e.fork);
      const starsRepo = myrepo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.stargazers_count;
      }, 0);
      setStars(starsRepo);
      const forksRepo = myrepo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.forks;
      }, 0);
      setForks(forksRepo);
      const top4Repos = myrepo
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);
      setTop4(top4Repos);
    }
  }, [repos]);
  return (
    <div className={`bg-zinc-900 min-h-screen text-white font-rubik bg-grid`}>
      <NavBar />

      <div className="flex w-full items-center justify-center flex-col">
        <div className="flex w-full items-center justify-center flex-col h-screen">
          <div className="relative">
            <img
              src={avatar}
              alt=""
              className={`w-[16rem] rounded-full ${
                mode === "light" ? "invert hue-rotate-180" : ""
              }`}
            />
            <div
              style={{
                background:
                  discord_data?.discord_status === "online"
                    ? "#23a55a"
                    : discord_data?.discord_status === "dnd"
                    ? "#f23f43"
                    : discord_data?.discord_status === "idle"
                    ? "#efb132"
                    : "#7d818b",
              }}
              className="border-4 border-zinc-900 h-10 w-10 rounded-full bg-slate-500 absolute right-4 bottom-4"
            ></div>
          </div>
          <div className="flex items-center gap-4 text-4xl mt-5">
            {constants.top_page_socials.map((item, idx) => {
              return (
                <a
                  target="_blank"
                  href={item.link}
                  key={idx}
                  className="hover:text-primary hover:shadow-2xl transition-all duration-300 hover:scale-110"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
          <h1 className="text-3xl font-medium mt-2 font-rubik">
            Hi, I’m <span className="text-primary">Hosein</span>
          </h1>
          <h3
            className={`${
              mode === "light" && "invert text-black hue-rotate-180"
            }`}
          >
            <TypeAnimation
              sequence={constants.intro_text_animation}
              wrapper="span"
              speed={200}
              style={{ fontSize: "1.4rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>
          <p className="text-center max-w-[17rem] md:max-w-[19rem]">
            I’m a {new Date().getFullYear() - constants.birth_year} year old
            front-end engineer based in{" "}
            <a
              target="_blank"
              className="bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 px-2 py-0.5 whitespace-nowrap rounded-full inline-flex items-center justify-center w-fit gap-2"
              href={constants.map_location_url}
            >
              <ImLocation className="text-primary" /> {constants.location}
            </a>
          </p>
          <Link
            to={"/contact"}
            className="block bg-primary border-white/10 border-[1px] px-12 py-4 rounded-2xl font-bold mt-5"
          >
            CONTACT ME
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 text-center flex flex-col items-center"
        >
          <h1 className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <p className="text-start max-w-[20rem] mt-5 md:max-w-[25rem] lg:max-w-[380px] lg:text-lg">
              I'm a self-taught software engineer and designer from Shiraz,
              Iran. Specializing in MERN stack development, I create robust web
              applications. With a fusion of technical expertise and design
              sensibilities, I craft visually stunning interfaces for
              exceptional user experiences.
            </p>
            <div className="my-10 flex items-center justify-center">
              {!loading ? <DiscordCard info={discord_data} /> : ""}
            </div>
          </div>
          <div className="flex text-2xl gap-16 mt-5 bg-boxes border-white/10 border-[1px] px-8 py-3 rounded-2xl relative">
            <p className="font-hand text-xl absolute -top-4 -left-8 -rotate-[35deg]">
              My Socials
            </p>
            {constants.public_socials.map((item, idx) => {
              return (
                <a
                  target="_blank"
                  key={idx}
                  href={item.link}
                  className="hover:text-primary transition-all hover:-translate-y-2 hover:scale-125 duration-300"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <h1 className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24">
            Technologies
          </h1>
          <p className="text-start max-w-[20rem] mt-5 md:max-w-[30rem] lg:max-w-[750px] lg:text-lg">
            I use a wide range of tools to tackle each hurdle in the most
            efficient manner possible.
          </p>
          <div className="grid grid-cols-6 text-3xl gap-4 mt-5 bg-boxes border-white/10 border-[1px] px-8 py-3 rounded-2xl lg:text-4xl md:grid-cols-9">
            {constants.techs.map((item, idx) => {
              return (
                <Tooltip key={idx} message={item.name}>
                  <div className="hover:text-primary cursor-pointer transition-all">
                    {item.icon}
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <h1 className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24">
            Projects
          </h1>
          <p className="text-start max-w-[20rem] mt-5 md:max-w-[30rem] lg:max-w-[750px] lg:text-lg">
            In my free time, I enjoy creating open source projects on{" "}
            <a
              className="underline text-purple-500 underline-offset-2 font-bold"
              href={constants.github_url}
            >
              GitHub
            </a>
            , so I can learn from others and share what I know. In total, all of
            my open sourced projects have earnt me <strong>{stars}</strong>{" "}
            stars on GitHub, and <strong>{forks}</strong> forks. Below are some
            of my most popular repositories.
          </p>
          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 my-16"
            id="cards"
          >
            {top4.map((item, idx) => {
              return <RepoCard key={idx} {...item} />;
            })}
          </div>
        </motion.div>
        <div>
          <Link
            to={"/contact"}
            className="block bg-boxes border-white/10 border-[1px] px-12 py-6 rounded-2xl font-bold mt-5"
          >
            CONTACT ME
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
