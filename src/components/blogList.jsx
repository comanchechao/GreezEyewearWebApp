import blogOne from "../assets/images/blogOne.webp";
import { SquaresFour, Rows } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function blogList(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(props.blogs);
    console.log(blogs[0]);
  });

  return (
    <div className="w-full h-full">
     
        <div className="flex flex-wrap rounded space-y-5 px-4 py-7 w-full h-full  bg-mainWhite shadow-2xl">
          <div className="flex bg-white items-center rounded justify-end w-full h-12">
            <SquaresFour className=" transition hover:bg-mainBlue" size={45} />
            <Rows className=" transition hover:bg-mainBlue" size={45} />
          </div>
          <div className="flex flex-col shadow-2xl space-y-2 md:flex-row lg:flex-row bg-mainCream  h-full">
            <div className="w-full">
              <img
                src={blogOne}
                alt=""
                className=" w-full h-full object-contain"
              />
            </div>
            <div className="flex p-2 space-y-2 flex-col justify-center items-center w-full">
              <h1 className="text-4xl flex-col font-bold"></h1>
              <p className="text-xl">Sunday 2021</p>
              <p className="text-xl"></p>
            </div>
            <div className="flex justify-start p-5  items-end">
              <Link to={"/blog"}>
                <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-2xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>;
   
    </div>
  );
}
