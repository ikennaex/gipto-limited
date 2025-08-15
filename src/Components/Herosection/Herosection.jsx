import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css";
import { img12, img13 } from "../../imports";

const Herosection = () => {
  return (
    <div
      className="hero-bg min-h-[80vh]"
      style={{
        backgroundImage: `url(${img13})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <div className="container-content">
          <div className="lg:px-10 pt-14 container mx-auto px-7 min-h-[80vh] lg:p-28 p-8 gap-4 flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col lg:items-center ">
              <div className="flex items-center gap-1 my-5">
                <div className="w-2 h-2 bg-customIndigo rounded-sm"></div>
                <p className="text-white font-bold">
                  Welcome to Gipto Limited
                </p>
              </div>

              <h1 className="lg:text-5xl lg:w-3/4 leading-[1.2] font-black header-text text-3xl text-white text-center pb-6 slide-in-fwd-center">
                The Best Cleaning Service in the United Kingdom
              </h1>

              <p className="text-white">
                Impeccable, detail-oriented and professional house & office cleaning services in the UK.
              </p>

              <div className="pt-4 flex flex-row items-center gap-6 slide-in-left2">
                <a href="mailto:info@boomanageproperties.net">
                  <button className=" lg:px-8 flex gap-2 items-center border-white hover:bg-white border-2 p-4  font-bold text-white hover:text-black cursor-pointer">
                    <MdOutlineMail size={27} />
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
