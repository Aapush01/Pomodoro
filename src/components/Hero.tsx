import React from "react";
import Timer from "./Timer";

const Hero = () => {
  return (
    <div className="font-mono text-lg font-semibold flex flex-col justify-center items-center px-4 py-6 md:px-8 lg:px-16">
      {/* Buttons Section */}
      <div className="flex gap-4 md:gap-6 lg:gap-8 py-4 md:py-8">
        <button className="px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Pomodoro
        </button>
        <button className="px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Short Break
        </button>
        <button className="px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Long Break
        </button>
      </div>
      
      {/* Timer Section */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <Timer />
      </div>
    </div>
  );
};

export default Hero;
