import React from "react";
import guide from "../assets/guide_1.png";
import { useThemeStore } from "../contexts/theme";

const DiscordCard = ({ info }) => {
  const { discord_user, activities, discord_status } = info;
  const { id, avatar, username, display_name } = discord_user;
  const { mode } = useThemeStore();

  return (
    <div className="w-[300px] min-h-[8rem] relative bg-boxes border-white/10 border-[1px] rounded-2xl px-4 flex flex-col transition-all duration-300 hover:scale-105 hover:-rotate-6">
      <img
        src={guide}
        alt=""
        className="hidden absolute -right-32 -top-12 -rotate-[25deg] lg:block"
      />
      <div className="mt-5 w-fit relative">
        <img
          src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.webp?size=60`}
          alt=""
          className={`rounded-full ${
            mode === "light" && "invert hue-rotate-180"
          }`}
        />
        <div
          style={{
            background:
              discord_status === "online"
                ? "#23a55a"
                : discord_status === "dnd"
                ? "#f23f43"
                : discord_status === "idle"
                ? "#efb132"
                : "#7d818b",
          }}
          className="w-5 h-5 absolute bottom-0 right-0 rounded-full border-boxes border-4"
        ></div>
      </div>
      <div className="text-start mt-2 mb-4">
        <h1 className="text-xl font-bold">{display_name}</h1>
        <p>@{username}</p>
      </div>
      {activities.length > 0 && activities[0].name === "Code" ? (
        <div className="flex items-center gap-2 w-full justify-center mb-4">
          <div className="relative w-fit">
            <img
              src={activities[0].assets.large_image.replace(
                "mp:external",
                "https://media.discordapp.net/external"
              )}
              alt=""
              className="w-16 rounded-lg"
            />
            <img
              src={activities[0].assets.small_image.replace(
                "mp:external",
                "https://media.discordapp.net/external"
              )}
              alt=""
              className="absolute -right-1 -bottom-1 w-7 rounded-full border-boxes border-4"
            />
          </div>
          <div className="text-xs text-start flex-grow">
            <div className="font-bold">{activities[0].name}</div>
            {activities[0].details ? (
              <div>{activities[0].details.slice(0, 31)}...</div>
            ) : (
              ""
            )}
            {activities[0].state ? (
              <div>{activities[0].state.slice(0, 31)}...</div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DiscordCard;
