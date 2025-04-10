import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoctors, setFilterDoctor] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const filterFunction = () => {
    if (speciality) {
      setFilterDoctor(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoctor(doctors);
    }
  };

  useEffect(() => {
    filterFunction();
  }, [doctors, speciality]);

  console.log(doctors.name);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className=" w-[98vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded-md transition-all cursor-pointer hover:scale-105 duration-500"
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className=" w-[98vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded-md transition-all cursor-pointer hover:scale-105 duration-500"
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className=" w-[98vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded-md transition-all cursor-pointer hover:scale-105 duration-500"
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className=" w-[98vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded-md transition-all cursor-pointer hover:scale-105 duration-500"
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className=" w-[98vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded-md transition-all cursor-pointer hover:scale-105 duration-500"
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className=" w-[98vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded-md transition-all cursor-pointer hover:scale-105 duration-500"
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoctors.map((item) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className=" border-blue-200 border-2 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] duration-500"
            >
              <img className="bg-blue-50" src={item.image} />
              <div className="p-4">
                <div className="flex text-center items-center text-green-500 gap-2 text-sm ">
                  <p className="border rounded-full bg-green-500 w-2 h-2"></p>
                  <p>Availble</p>
                </div>
                <p className="text-gray-900 font-bold text-lg">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
