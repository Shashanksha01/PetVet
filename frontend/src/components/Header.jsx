import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-xl bg-maincolor px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} />
          <p>
            simple browse through out extensive list of trusted doctors, <br />
            schedule your appiontment hassle-free
          </p>
        </div>
        <a href="#docType" className="flex items-center gap-2 px-8 py-3 bg-white text-gray-600 text-sm m-auto md:m-0 rounded-full">
          Book Appointment <img src={assets.arrow_icon} />
        </a>
      </div>
      <div className="md:w-1/2 relative ">
        <img className="w-full absolute bottom-0 h-auto rounded-lg hidden md:block" src={assets.header_img} />
      </div>
    </div>
  );
};

export default Header;
