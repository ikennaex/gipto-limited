import React from "react";
import { logo } from "../../imports";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-customBlue text-white">
      <div className="flex flex-col justify-center items-center animate-pulse rounded-full h-16 w-16 border-white">
        <DotLottieReact className="h-96 w-96" src="src\assets\Loading 44 _ Spray.lottie" loop autoplay />
        <p className="text-center leading-[1] font-semibold ">
          Gipto Limited
        </p>
      </div>
    </div>
  );
};

export default Loader;
