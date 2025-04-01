import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const [doctorsAppointment, setDoctorsAppointment] = useState([]);
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <div>
        <h1 className="pb-3 mt-12 text-lg font-medium text-gray-600 border-b">
          My Appointments
        </h1>
        <div>
          {doctors.slice(0, 2).map((item, index) => (
            <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b">
              <div className="border-b py-4" key={index}>
                <img className="w-36 bg-[#EAEFFF]" src={item.image} />
              </div>
              <div className="flex-1 font-medium py-4">
                <p className="font-bold">{item.name}</p>
                <p className="text-[#5E5E5E] text-sm">{item.speciality}</p>
                <p className="text-[#464646] font-semibold mt-1">Address:</p>
                <p className="text-[#5E5E5E] text-sm">{item.address.line1}</p>
                <p className="text-[#5E5E5E] text-sm">{item.address.line2}</p>
                <p className="text-[#5E5E5E] text-sm">
                  <span className="text-black font-medium">Date & Time: </span>31 Apr 2025 | 11:00 AM
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <button className="px-6 py-3 hover:text-white font-semibold rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:bg-green-500 hover:scale-105 border">
                  Pay Online
                </button>
                <button className="px-6 py-3 hover:text-white font-semibold rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105 border">
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
{
  /* <div>
    <div className="border-b py-4" key={index}>
      <img className="w-36 bg-[#EAEFFF]" src={item.image} alt="" />
    </div>
    <div>
      <p>{item.name}</p>
      <p>{item.speciality}</p>
      <p>Address: </p>
      <p>{item.address}</p>
      <p>{item}</p>
      <p>
        <span>Date & Time:</span>30 Apr 2025 | 12:00 PM
      </p>
    </div>
  </div> */
}
