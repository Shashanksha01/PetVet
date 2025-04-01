import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "name",
    image: assets.profile_pic,
    mailId: "name@name.com",
    phone: "7894561230",
    address: "India",
    gender: "male/female",
    birthday: "None",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      {isEdit ? (
        <div>
          <div className="max-w-lg flex flex-col gap-2 text-sm pt-5">
            <img className="w-36 rounded-lg" src={userData.image} alt="" />
            <div>
              <p className="font-medium text-3xl mt-4 mb-2">{userData.name}</p>
              <input
                className="input"
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <hr className="bg-gray-500 h-[1px] border-none" />
              <div className="mb-4 flex flex-col gap-2 text-[#4f4f4f]">
                <p className="text-gray-600 underline mt-3 font-medium">
                  CONTACT INFORMATION
                </p>
                <p className="font-medium">Email id:</p>
                <input
                  className="input"
                  type="text"
                  value={userData.mailId}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, mailId: e.target.value }))
                  }
                />
                <p className="font-medium">Phone:</p>
                <input
                  className="input"
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
                <p className="font-medium">Address:</p>
                <input
                  className="input"
                  type="text"
                  value={userData.address}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="mb-4 flex flex-col gap-2 text-[#4f4f4f]">
                <p className="text-gray-600 underline mt-3 font-medium">
                  BASIC INFORMATION
                </p>
                <p className="font-medium">Gender:</p>
                <select
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  value={userData.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <p className="font-medium">Birthday:</p>
                <input
                  className="input"
                  type="date"
                  value={userData.birthday}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      birthday: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="mt-10">
                <button
                  onClick={() => setIsEdit(false)}
                  className="bg-white px-8 py-2 border-maincolor border rounded-full hover:bg-maincolor hover:text-white transition-all"
                >
                  Save Information
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-lg flex flex-col gap-2 text-sm pt-5">
          <img className="w-36 rounded-lg" src={userData.image} alt="" />
          <div>
            <p className="font-medium text-3xl mt-4 mb-2">{userData.name}</p>
            <hr className="bg-gray-500 h-[1px] border-none" />
            <div className="mb-4 flex flex-col gap-2 text-[#4f4f4f]">
              <p className="text-gray-600 underline mt-3 font-medium">
                CONTACT INFORMATION
              </p>
              <p className="font-medium">Email id:</p>
              <p>{userData.mailId}</p>
              <p className="font-medium">Phone:</p>
              <p>{userData.phone}</p>
              <p className="font-medium">Address:</p>
              <p>{userData.address}</p>
            </div>
            <div className="mb-4 flex flex-col gap-2 text-[#4f4f4f]">
              <p className="text-gray-600 underline mt-3 font-medium">
                BASIC INFORMATION
              </p>
              <p className="font-medium">Gender:</p>
              <p>{userData.gender}</p>
              <p className="font-medium">Birthday:</p>
              <p>{userData.birthday}</p>
            </div>
            <div className="mt-10">
              <button
                onClick={() => setIsEdit(true)}
                className="bg-white px-8 py-2 border-maincolor border rounded-full hover:bg-maincolor hover:text-white transition-all"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
