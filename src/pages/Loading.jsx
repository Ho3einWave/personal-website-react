import React from "react";
import { useThemeStore } from "../contexts/theme";
const Loading = () => {
  const { mode } = useThemeStore();
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center bg-zinc-900 bg-grid ${
        mode === "light" && "invert hue-rotate-180"
      }`}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
