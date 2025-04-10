import React, { ontext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const {    } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  console.log(relDoc);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality?.length > 0) {
      const docData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(docData);
    }
  }, [doctors, speciality, docId]);

  console.log(doctors);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {relDoc.slice(0, 5).map((item) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
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
      <button
        onClick={() => navigate("/doctors")}
        className="bg-maincolor text-white px-8 py-2 rounded-full font-bold hover:bg-black hover:text-white duration-700 my-7 hover:scale-105 transition-all"
      >
        more
      </button>
    </div>
  );
};

export default RelatedDoctors;
