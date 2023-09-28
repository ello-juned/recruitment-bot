import React from "react";
import homeImg from "../assets/home.gif";

const Hero = () => {
  return (
    <div className="h-9/10 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center border-gray-400 bg-white border shadow-5xl m-2 rounded-xl p-5 h-full animate-fadeIn">
      <div className="rounded-full w-full h-full flex flex-col justify-center items-center cursor-pointer transform hover:scale-110 transition-transform duration-300">
        <img
          src={homeImg}
          alt="emoji"
          className="rounded-full object-cover w-64 h-64 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96"
        />
      </div>
      <div className="w-full h-full flex flex-col   gap-10 items-start justify-center animate-slideInRight">
        <h1 className="text-4xl font-bold underline">Welcome to RecruitBot</h1>
        <p className="text-xl">
          RecruitBot is your ultimate recruitment assistant, designed to help
          job seekers and clients find their perfect match.
        </p>
        <p className="text-xl">
          With its advanced features and user-friendly interface, RecruitBot
          streamlines the job search and hiring process, making it faster and
          more efficient.
        </p>
      </div>
    </div>
  );
};

export default Hero;
