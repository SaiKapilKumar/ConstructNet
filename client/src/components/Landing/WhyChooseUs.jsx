import React from 'react';
import ConstructNetLogo from "../ConstructNetLogo";
import { FaRegListAlt, FaUserPlus, FaUserCircle, FaSearch, FaStar, FaHandshake } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 flex justify-center items-center relative">
      <div className="z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* ConstructNet Logo and Description */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-semibold mb-5">Start Your Journey with </h2>
          <div className="flex justify-center lg:justify-start mb-5">
            <ConstructNetLogo fillColor={"#ffffff"} />
          </div>
          <p className="text-lg mb-8">
            Connect with a diverse range of thoroughly vetted professionals, ensuring expertise and reliability for your projects
          </p>
        </div>
        {/* Interactive List */}
        <div className="flex-1 ml-10">
          <ul className="list-none pl-0 space-y-5 text-lg">
            <li className="flex items-center cursor-pointer transition-transform transform hover:scale-105">
              <FaRegListAlt className="inline mr-5 text-yellow-500" /> Explore Services
            </li>
            <li className="flex items-center cursor-pointer transition-transform transform hover:scale-105">
              <FaUserPlus className="inline mr-5 text-yellow-500" /> Sign Up/Login
            </li>
            <li className="flex items-center cursor-pointer transition-transform transform hover:scale-105">
              <FaUserCircle className="inline mr-5 text-yellow-500" /> Profile Setup
            </li>
            <li className="flex items-center cursor-pointer transition-transform transform hover:scale-105">
              <FaSearch className="inline mr-5 text-yellow-500" /> Search & Connect
            </li>
            <li className="flex items-center cursor-pointer transition-transform transform hover:scale-105">
              <FaStar className="inline mr-5 text-yellow-500" /> Review & Select
            </li>
            <li className="flex items-center cursor-pointer transition-transform transform hover:scale-105">
              <FaHandshake className="inline mr-5 text-yellow-500" /> Initiate Collaboration
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
