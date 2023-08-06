import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center max-w-[800px] mx-auto">
      <div className="border-t-[1px] border-white/25 mt-16 mb-2 w-[90vw] max-w-[800px]"></div>

      <div className="text-start w-[90vw] pb-10 max-w-[800px]">
        <h1 className="text-2xl font-bold">Hosein Baseri</h1>
        <h2 className="opacity-50">
          Software Engineer • {new Date().getFullYear()}
        </h2>
        <h2 className="opacity-50">me@hoseinwave.ir</h2>
      </div>
    </div>
  );
};

export default Footer;
