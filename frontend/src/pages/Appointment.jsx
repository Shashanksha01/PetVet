import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const navigate = useNavigate();

  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  // console.log(docInfo);

  const [docSlot, setDocSlot] = useState([]);
  const [slotInd, setSlotInd] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const weekDays = ["SUN", "MON", "TUS", "WED", "THU", "FRI", "SAT"];

  const getDoctorInfo = async () => {
    const docInfo = await doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    getDoctorInfo();
  }, [docInfo, doctors, docId]);

  const getDocSlot = async () => {
    setDocSlot([]);
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datatime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlot((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getDocSlot();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlot);
  }, [docSlot]);

  return (
    <div>
      {docInfo ? (
        <div className="flex gap-4">
          <div>
            <img
              className="hidden md:block bg-maincolor w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
            />
          </div>
          <div className="border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0">
            <h1 className="text-3xl text-gray-700 font-semibold mb-3">
              {docInfo.name}
            </h1>
            <div className="flex gap-4 font-normal text-gray-500 mb-1">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <p className="px-2 py-0.5 border rounded-full text-sm cursor-pointer">
                {docInfo.experience}
              </p>
            </div>
            <div className="flex gap-3 w-3 mb-1 ">
              <p>About</p>
              <img src={assets.info_icon} />
            </div>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fee: {docInfo.fees}$
            </p>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}

      <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-500">
        <p>Booking Slots</p>
        <div className="flex gap-4">
          {docSlot.length &&
            docSlot.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotInd(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer border text-gray-600 hover:scale-105 hover:duration-700 ${
                  slotInd === index
                    ? "bg-maincolor text-white"
                    : "border-gray-300"
                }`}
              >
                <p>{item[0] && weekDays[item[0].datatime.getDay()]}</p>

                <p>{item[0] && item[0].datatime.getDate()}</p>
              </div>
            ))}
        </div>
        <div className="flex gap-2 mt-10 items-center w-full overflow-x-scroll scrollbar-hide">
          {docSlot.length &&
            docSlot[slotInd].map((item, index) => (
              <p
                className={`text-sm cursor-pointer border font-light flex-shrink-0 px-5 py-2 rounded-full ${
                  item.time === slotTime
                    ? "bg-maincolor text-white"
                    : "border-gray-300"
                }`}
                onClick={() => setSlotTime(item.time)}
                key={index}
              >
                {item.time}
              </p>
            ))}
        </div>
        <button
          onClick={() => navigate("/login")}
          className="bg-maincolor text-white text-sm font-light px-20 py-3 rounded-full my-6"
        >
          Book an appointment
        </button>
      </div>

      {docInfo && docInfo.speciality ? (
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      ) : (
        <p>Loading related doctors...</p>
      )}
    </div>
  );
};

export default Appointment;
