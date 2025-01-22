import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import {
  FaTwitter,
  FaPinterest,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-[#1C4670] flex justify-end gap-4 items-center h-11 px-4 lg:px-14">
        <div className="flex gap-4">
          <span className="text-white flex items-center text-sm">
            <CgMail size={20} className="mr-1" />
            www.registerkaro.in
          </span>
          <span className="text-white flex items-center text-sm">
            <IoCall size={20} className="mr-1" />
            +918447746183
          </span>
        </div>

        <div className="text-white flex gap-3">
          <IoLogoInstagram size={20} />
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaPinterest size={20} />
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-14 py-3">
          <img src={Logo} alt="Register Karo Logo" className="h-10 w-auto" />

          <button
            className="lg:hidden text-[#1C4670] focus:outline-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <ul
            className={`lg:flex lg:gap-6 lg:items-center lg:static lg:bg-transparent lg:opacity-100 lg:translate-x- lg:ml-auto absolute left-0 bg-white shadow-md lg:shadow-none px-4 py-6 lg:py-0 lg:px-0 space-y-4 lg:space-y-0 transition-all duration-300 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-0 opacity-0"
            }
            `}
          >
            <li className="text-[#272D37] font-semibold hover:text-[#1C4670]">
              Home
            </li>
            <li className="text-[#272D37] font-semibold hover:text-[#1C4670] flex items-center">
              Our Services <MdKeyboardArrowDown className="ml-1 mt-[2px]" />
            </li>
            <li className="text-[#272D37] font-semibold hover:text-[#1C4670]">
              Blog
            </li>
            <li className="text-[#272D37] font-semibold hover:text-[#1C4670]">
              Contact Us
            </li>
            <li className="text-[#272D37] font-semibold hover:text-[#1C4670]">
              About Us
            </li>
            <li>
              <CiSearch size={24} className="cursor-pointer text-[#272D37]" />
            </li>
            <li>
              <button className="bg-[#FFA229] text-white px-4 py-2 rounded hover:bg-[#FFB347] transition">
                Talk An Expert
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
