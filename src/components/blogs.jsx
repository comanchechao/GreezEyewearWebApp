import Navbar from "./navbar";
import nordGlasses from "../assets/images/nordGlasses.webp";
import blogOne from "../assets/images/blogOne.webp";
import blogTwo from "../assets/images/blogTwo.webp";
import blogThree from "../assets/images/blogThree.webp";
import { DotsThreeOutlineVertical, SquaresFour, Rows } from "phosphor-react";

export default function blogs() {
  return (
    <div className=" w-full  h-full bg-mainWhite">
      <Navbar />
      <div className="p-5 flex flex-col space-y-5 w-full h-full">
        <div className="mt-16 space-y-6 flex justify-end items-center flex-col  align-center">
          <div className="flex space-y-2 flex-col justify-center align-center items-center">
            <h1 className="font-bold capitalize my-7 text-7xl">
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
              className="p-4 w-80 rounded"
              placeholder="Search ..."
              type="text"
            />
            <h2 className="text-5xl font-bold">Blogs</h2>
          </div>
          <div className="bg-white p-5 rounded-full">
            <DotsThreeOutlineVertical size={40} />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-wrap rounded space-y-5 px-4 py-7 w-full h-full  bg-mainWhite shadow-2xl">
            <div className="flex bg-white items-center rounded justify-end w-full h-12">
              <SquaresFour
                className=" transition hover:bg-mainBlue"
                size={45}
              />
              <Rows className=" transition hover:bg-mainBlue" size={45} />
            </div>
            <div className="flex flex-col shadow-2xl space-y-2 md:flex-row lg:flex-row bg-mainCream full3 h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex p-2 space-y-2 flex-col justify-center items-center w-full">
                <h1 className="text-4xl flex-col font-bold">Title</h1>
                <p className="text-xl">sunday 2021</p>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="flex justify-start p-5  items-end">
                <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-2xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black">
                  Continue
                </button>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl space-y-2 md:flex-row lg:flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogTwo}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex p-2 space-y-2 flex-col justify-center items-center w-full">
                <h1 className="text-4xl flex-col font-bold">Title</h1>
                <p className="text-xl">sunday 2021</p>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="flex justify-end p-5 items-end">
                <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-2xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black">
                  Continue
                </button>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl space-y-2 md:flex-row lg:flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogThree}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex p-2 space-y-2 flex-col justify-center items-center w-full">
                <h1 className="text-4xl flex-col font-bold">Title</h1>
                <p className="text-xl">sunday 2021</p>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="flex justify-end p-5 items-end">
                <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-2xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black">
                  Continue
                </button>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl space-y-2 md:flex-row lg:flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex p-2 space-y-2 flex-col justify-center items-center w-full">
                <h1 className="text-4xl flex-col font-bold">Title</h1>
                <p className="text-xl">sunday 2021</p>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="flex justify-end p-5 items-end">
                <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-2xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black">
                  Continue
                </button>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl space-y-2 md:flex-row lg:flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex p-2 space-y-2 flex-col justify-center items-center w-full">
                <h1 className="text-4xl flex-col font-bold">Title</h1>
                <p className="text-xl">sunday 2021</p>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="flex justify-end p-5 items-end">
                <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-2xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
