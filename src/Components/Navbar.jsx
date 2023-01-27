import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { FaSearch, FaUser } from "react-icons/fa";
import logo from "../Assets/logo.png";
function Navbar() {
  return (
    <div className="flex items-center justify-between px-5 py-2 lg:px-10">
      {/* Right part */}
      <div className="flex items-center shrink-0">
        <FiMenu className="w-6 h-6 cursor-pointer" />
        <div className="pl-4">
          <img src={logo} alt="Logo" className="w-28 cursor-pointer"></img>
        </div>
      </div>
      {/* middle part */}
      <div className=" hidden relative sm:flex w-full max-w-[45rem] mx-10 items-center">
        <input
          type={"search"}
          placeholder="search..."
          className="w-full outline-0 cursor-pointer bg-[#dae0e6] rounded-full pl-10 py-2"
        ></input>
        <div className="absolute left-4">
          <FaSearch/>
        </div>
      </div>

      {/* right part */}

      <div className="flex items-center h-full gap-3">
        <FiSearch className="sm:hidden cursor-pointer h-6 w-6" />
        <GrAppsRounded className="sm:hidden cursor-pointer h-6 w-6" />
        <IoMdSettings className="h-6 w-6 cursor-pointer" />
        <div className="flex items-center cursor-pointer text-teal-500 border-solid border-2 border-teal-200 p-1 transition rounded-full hover:bg-teal-400 hover:text-white">
          <FaUser className="font-bold w-4 sh-4 mr-1 ml-1.5" />
          <p className="font-bold mr-1.5 whitespace-nowrap">Log In</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
