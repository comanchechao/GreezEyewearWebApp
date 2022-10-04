import Navbar from "./navbar";
import nordGlasses from "../assets/images/nordGlasses.webp";
import blogOne from "../assets/images/blogOne.webp";
import blogTwo from "../assets/images/blogTwo.webp";
import blogThree from "../assets/images/blogThree.webp";
import { DotsThreeOutlineVertical, SquaresFour, Rows } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import BlogList from "./blogList";

export default function blogs() {
  return (
    <div className=" w-full  h-full bg-mainWhite">
      <Navbar />
      <div className="p-5 flex flex-col space-y-5 w-full h-full">
        <div className="mt-16 space-y-6 flex justify-end items-center flex-col  align-center">
          <div className="flex space-y-2 flex-col justify-center align-center items-center">
            <h1 className="font-bold capitalize my-7 text-7xl text-center">
              Latest on eyewear Fashion
            </h1>
            <h2 className="text-xl">Monday 2022</h2>
          </div>
          <div className="flex justify-center">
            <img
              className="object-contain w-full h-full lg:w-1/2 lg:h-1/2"
              src={nordGlasses}
              alt=""
            />
          </div>
          <div className="flex w-full justify-center items-center flex-col space-y-8">
            <input
              className="p-4 w-80 rounded-full text-xl placeholder-gray-900"
              placeholder="Search Articles..."
              type="text"
            />
            <h2 className="text-5xl font-bold">Recent Articles</h2>
            <button className="text-3xl font-bold">get blogs</button>
          </div>
          <div className="bg-white p-5 rounded-full">
            <DotsThreeOutlineVertical size={40} />
          </div>
        </div>
        <div className="w-full h-full">
          <BlogList />
        </div>
      </div>
    </div>
  );
}
