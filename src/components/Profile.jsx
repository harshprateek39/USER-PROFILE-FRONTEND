import React from "react";
import bgImg from "./assets/background.jpg";
import { MdLightbulbCircle } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import data from "./data.json";

import { FaRegThumbsUp, FaRegEye, FaRegHeart, FaRegStar } from "react-icons/fa";
import Threads from "./Threads";
const Profile = () => {
  return (  
    <div className=" flex flex-col ">
      {/* background image */}
      <div className="  bg-slate-800">
        <img src={bgImg} className=" w-full md:h-72 h-44 object-cover   "></img>
      </div>
      {/* Profile area */}
      <div className=" grid grid-flow-row md:grid-cols-2 grid-cols-1  gap-1 sm:mx-auto     ">
        {/* upper profile */}
        <div className="  grid grid-flow-col  px-5 items-center justify-start   gap-8 lg:gap-16">
          <div className="   relative w-24 lg:w-44 lg:h-44 h-24  ">
            <img
              className=" rounded-full absolute -top-5 ring-1 ring-gray-700 aspect-square lg:h-44 lg:w-44"
              src={data.ImgURL}
            ></img>
          </div>
          <div className=" flex flex-col self-start ">
            <div className="flex items-center gap-2 Lg:text-2xl text-l  justify-start   ">
              <h1 className=" py-3 font-semibold whitespace-nowrap">
                {data.name}
              </h1>
              <MdLightbulbCircle className=" text-blue-700  md:text-2xl rounded-full  font-semibold" />
              <RiVerifiedBadgeFill className=" text-green-700  md:text-2xl rounded-full font-semibold " />
            </div>
            <div className="flex gap-3 justify-stretch ">
              <div className=" flex flex-col items-center grow">
                <h1 className=" rounded-lg ring-1 ring-gray-400 md:text-2xl text-center text-sm font-bold w-full text-gray-400 shadow-none px-3 py-1">
                  {data.follower}
                </h1>
                <h1 className=" text-xs md:text:sm text-slate-400  ">Followers</h1>
              </div>
              <div className=" flex flex-col items-center grow">
                <h1 className=" rounded-lg ring-1 ring-slate-400 md:text-2xl text-center text-sm font-bold w-full text-slate-400 shadow-none px-3 py-1">
                  {data.following}
                </h1>
                <h1 className=" text-xs md:text-sm text-slate-400  ">Following</h1>
              </div>
            </div>
          </div>
        </div>
        {/* end of upper profile */}

        {/* lower profile */}
        <div className=" flex flex-col  items-start px-5 py-3 ">
          <h1 className=" lg:text-2xl text-sm  text-slate-500 whitespace-nowrap">
            {data.description}
          </h1>
          <a className=" text-blue-500 md:text-sm text-xs" href={data.id}>
            {data.id}
          </a>
          <div className="flex gap-4 py-3 text-xs md:text-xl">
            <div className=" flex items-center gap-1">
              <span className=" flex items-center justify-center rounded-full p-1 bg-blue-500 text-white">
                <FaRegStar />
              </span>
              <h1 className=" text-sm"> {data.impressions}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <span className=" flex items-center justify-center rounded-full p-1 bg-yellow-500 text-white">
                <FaRegThumbsUp />
              </span>
              <h1 className=" text-sm"> {data.likes}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <span className=" flex items-center justify-center rounded-full p-1 bg-gray-600 text-white">
                <FaRegEye />
              </span>
              <h1 className=" text-sm"> {data.views}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <span className=" flex items-center justify-center rounded-full p-1 bg-pink-600 text-white">
                <FaRegHeart />
              </span>
              <h1 className=" text-sm">{data.heart}</h1>
            </div>
          </div>
        </div>
        {/* end of lower profile */}
      </div>
        {/* end of profile area */}

        {/* posts */}
      <div className=" flex w-full">
        
        <button className=" self-start md:text-2xl text-l font-semibold text-blue-400 bg-white px-3 rounded-md border-solid border-r-2 border-t-2 border-l-2 rounded-br-none whitespace-nowrap py-3   ">
          {data.posts.length} Posts
        </button>
        <hr className=" w-full  border-1 border-gray-200 self-end"></hr>
      </div>
      <div className=" grid grid-flow-row lg:grid-cols-1 grid-cols-1">
        {data.posts.map((post) => (
          <Threads
            title={post.title}
            description={post.description}
            read={post.readTime}
            date={post.day}
            views={post.views}
          />
        ))}
      </div>
        {/* end of posts */}
    </div>
  );
};

export default Profile;
