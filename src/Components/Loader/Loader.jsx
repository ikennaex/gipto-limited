import React from "react";
import { logo, spray } from "../../imports";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-white">
      <div className="flex flex-col justify-center items-center animate-pulse rounded-full border-white">
        <img className="h-56 w-56" src={logo} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
