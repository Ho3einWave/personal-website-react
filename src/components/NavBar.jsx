import { useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { BsFillSunFill, BsMoon } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useThemeStore } from "../contexts/theme";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setMode } = useThemeStore();
  const changeMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };
  useEffect(() => {
    if (mode === "light") {
      document.documentElement.style.filter = "invert(100%) hue-rotate(180deg)";
    } else {
      document.documentElement.style.filter = "invert(0) hue-rotate(0deg)";
    }
  }, [mode]);
  const menuOnclick = () => {
    document.body.style.overflow = menuOpen ? "scroll" : "hidden";
    setMenuOpen((e) => {
      return !e;
    });
  };
  return (
    <>
      <div className="w-full flex text-white ">
        <div
          className={`fixed z-30 w-full flex items-center justify-between h-16 px-10 text-2xl bg-navbar/70 backdrop-blur-xl md:w-[80vw] md:left-[10vw] md:top-5 md:rounded-full md:border-white/10 md:border-[1px] ${
            mode === "light" && "fixed"
          }`}
        >
          <div className="w-full flex items-center justify-between md:hidden">
            <div className="cursor-pointer " onClick={menuOnclick}>
              <AiOutlineMenu />
            </div>
            <div className="cursor-pointer ">
              {mode === "dark" ? (
                <BsMoon onClick={changeMode} />
              ) : (
                <BsFillSunFill onClick={changeMode} />
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="font-mono text-sm flex gap-14">
              <Link
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300"
                to={"/"}
              >
                /
              </Link>
              <Link
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300"
                to={"/contact"}
              >
                /contact
              </Link>
              <a
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300"
                href={"https://blog.hoseinwave.ir"}
              >
                /blog
              </a>
            </div>
            <div className="cursor-pointer ">
              {mode === "dark" ? (
                <BsMoon onClick={changeMode} />
              ) : (
                <BsFillSunFill onClick={changeMode} />
              )}
            </div>
          </div>
        </div>
        <div
          className={`top-16 transition-all duration-500 fixed flex flex-grow h-[calc(100vh-4rem)] w-full bg-navbar/50 z-20 left-[-100vw] backdrop-blur-lg ${
            menuOpen ? "!left-0" : ""
          }`}
        >
          <div className="font-rubik flex flex-col items-center gap-10 w-full pt-12">
            <Link onClick={menuOnclick} to={"/"}>
              /HOME
            </Link>
            <Link onClick={menuOnclick} to={"/contact"}>
              /CONTACT
            </Link>
            <a href="https://blog.hoseinwave.ir">/BLOG</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
