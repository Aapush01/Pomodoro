import React from "react";
import Timer from "./Timer";

const Hero = () => {
  return (
    <div className="font-mono text-lg font-semibold flex flex-col justify-center items-center">
      <div className="font-mono flex gap-6 py-10">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Pomodoro
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Short Break
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Long Break
        </button>
      </div>
      <div>
        {" "}
        <Timer />{" "}
      </div>
    </div>
  );
};

export default Hero;
