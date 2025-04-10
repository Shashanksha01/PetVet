import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl pt-10 text-[#707070]">
        CONTACT <span className="text-gray-700 font-semibold">US</span>
      </h1>
      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} />
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <p className="font-semibold text-gray-700 text-xl">OUR OFFICE</p>
          <p className="text-gray-500">
            India, Telangana<br />
            ExampleArea 500000, Hyderabad, India
          </p>
          <p className="text-gray-500">
            Tel: +91 9638527410<br />
            Email: petvet@gmail.com
          </p>
          <p className="font-semibold text-gray-700 text-xl">
            CAREERS AT PETVET
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black py-4 px-8 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
