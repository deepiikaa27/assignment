import React from "react";
import Hero1 from "../assets/Hero1.png";
import { IoPeopleOutline, IoStarSharp } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { LuHandshake } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-white via-light-cream to-soft-blue py-10">
      <div className="container mx-auto flex flex-col lg:flex-row lg:px-14  lg:space-y-0 space-y-10 items-center lg:items-start">
        <div className="md:w-1/2 text-center md:text-left space-y-5 px-5 lg:px-0">
          <div className="flex items-center text-sm font-semibold text-[#181617] gap-1 justify-center lg:justify-start">
            <IoStarSharp color="#F2C94C" size={21} />
            <span>Google Rating</span>
          </div>

          <h1 className="text-[48px] font-medium text-[#010101] leading-tight">
            Your trusted partner <br />
            for compliance business needs
          </h1>

          <div className="w-10 h-[1px] bg-[#F60014] mx-auto lg:mx-0"></div>

          <p className="text-[#4F4F4F]  text-sm sm:text-base lg:text-xl">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various{" "}
            <span className="font-bold">registrations, tax filings,</span> and
            other <span className="font-bold">legal matters.</span>
          </p>

          <div
            className="grid grid-cols-3
           "
          >
            <div className="flex items-center gap-2">
              <CiGrid41 size={50} />
              <div className="text-[#4F4F4F] text-sm">
                <div className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-400 to-blue-900 text-transparent bg-clip-text">
                  4.5+
                </div>
                Customer Rating
              </div>
            </div>

            <div className="flex items-center gap-2">
              <IoPeopleOutline size={49} />
              <div className="text-[#4F4F4F] text-sm">
                <div className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-400 to-blue-900 text-transparent bg-clip-text">
                  20,000+
                </div>
                Clients
              </div>
            </div>

            <div className="flex items-center gap-2">
              <LuHandshake size={48} />
              <div className="text-[#4F4F4F] text-sm">
                <div className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-400 to-blue-900 text-transparent bg-clip-text">
                  99.8%
                </div>
                Financial Stability
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <button className="bg-[#1C4670] text-white rounded font-bold py-3 px-8 shadow-lg hover:bg-[#163b5d] transition">
              Talk An Expert
            </button>
            <div className="font-semibold text-[#282828] cursor-pointer hover:underline">
              See how it works
            </div>
          </div>
        </div>

        <div className="md:w-1/2 px-4">
          <img
            src={Hero1}
            alt="Hero Illustration"
            className="mx-auto w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
