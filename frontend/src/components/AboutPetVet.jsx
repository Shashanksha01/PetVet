import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPetVet = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between px-10 mb-12 mt-32">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold mb-4 text-maincolor hidden md:block">
          PetVet
        </h1>
        <p className="font-normal text-gray-600 text-sm leading-relaxed hidden md:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          doloribus ratione dolore temporibus libero, incidunt eveniet odit,
          repudiandae voluptas nisi consequuntur pariatur, facere quam. Quidem
          perferendis facere vero nihil odit?
        </p>
      </div>
      <div className="w-1/10 w-full md:w-1/5">
        <h1 className="text-xl font-bold mb-4">COMPANY</h1>
        <ul className="space-y-2">
          <li
            onClick={() => scrollTo(0, 0)}
            className="hover:text-maincolor cursor-pointer transition"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:text-maincolor cursor-pointer transition"
          >
            About Us
          </li>
          <li
            onClick={() => navigate("/delivery")}
            className="hover:text-maincolor cursor-pointer transition"
          >
            Delivery
          </li>
          <li
            onClick={() => navigate("/policy")}
            className="hover:text-maincolor cursor-pointer transition"
          >
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/5">
        <h1 className="text-xl font-bold mb-4">GET IN TOUCH</h1>
        <p className="text-sm mb-2">📞 7878787878</p>
        <p className="text-sm">📧 petvet@gmail.com</p>
      </div>
    </div>
  );
};

export default AboutPetVet;
