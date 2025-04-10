import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <>
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <p
          className="text-2xl text-maincolor font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          PetVet
        </p>
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-maincolor" : "text-black"
            }
            to="/"
          >
            <li className="font-bold">HOME</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-maincolor" : "text-black"
            }
            to="/doctors"
          >
            <li className="font-bold">ALL DOCTORS</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-maincolor" : "text-black"
            }
            to="/about"
          >
            <li className="font-bold">ABOUT</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-maincolor" : "text-black"
            }
            to="/contact"
          >
            <li className="font-bold">CONTACT</li>
          </NavLink>
        </ul>
        <div>
          {token ? (
            <div className="flex items-center cursor-pointer group relative gap-2">
              <img
                className="w-8 rounded-full"
                src={assets.profile_pic}
                alt=""
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/myprofile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/myappointment")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointment
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-maincolor text-white px-8 py-3 rounded-full font-semibold hidden md:block 
  transition-all 
  hover:bg-blue-600 hover:shadow-lg 
  active:bg-blue-700 active:scale-95"
            >
              Create Account
            </button>
          )}
        </div>
        <img src={assets.menu_icon} className="w-6 md:hidden" alt="" />
        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div>
            <p
              className="text-2xl text-maincolor font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              PetVet
            </p>
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul>
            <NavLink>HOME</NavLink>
            <NavLink>ALL DOCTORS</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>CONTACT</NavLink>
          </ul>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
