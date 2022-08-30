import Navbar from "./navbar";
import nordGlasses from "../assets/images/nordGlasses.webp";
import blogOne from "../assets/images/blogOne.webp";
import { DotsThreeOutlineVertical } from "phosphor-react";

export default function blogs() {
  return (
    <div className=" w-full  h-full bg-mainCream">
      <Navbar />
      <div className="p-10 flex flex-col space-y-5 w-full h-full">
        <div className="mt-16 space-y-6 flex justify-end items-center flex-col  align-center">
          <div className="flex space-y-2 flex-col justify-center align-center items-center">
            <h1 className="font-bold text-3xl">Latest on eyewear Fashion</h1>
            <h2 className="text-xl">Monday 2022</h2>
          </div>
          <div className="flex justify-center">
            <img
              className="object-contain w-1/2 h-1/2"
              src={nordGlasses}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-5xl font-bold">Blogs</h2>
          </div>
          <div className="bg-white p-5 rounded-full">
            <DotsThreeOutlineVertical size={40} />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-wrap rounded space-y-2 p-4 w-full h-full  bg-mainWhite shadow-2xl">
            <div className="flex  flex-row bg-mainCream full3 h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-2xl flex-col font-bold">Title</h1>
                <p>sunday 2021</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="flex justify-end p-5  items-center">
                <button className="p-5 bg-mainBlue rounded-xl shadow-2xl">
                  {" "}
                  Continue reading
                </button>
              </div>
            </div>

            <div className="flex flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-2xl flex-col font-bold">Title</h1>
                <p>sunday 2021</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="flex justify-end p-5 items-center">
                <button className="p-5 bg-mainBlue rounded-xl shadow-2xl">
                  {" "}
                  Continue reading
                </button>
              </div>
            </div>

            <div className="flex flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-2xl flex-col font-bold">Title</h1>
                <p>sunday 2021</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="flex justify-end p-5 items-center">
                <button className="p-5 bg-mainBlue rounded-xl shadow-2xl">
                  {" "}
                  Continue reading
                </button>
              </div>
            </div>

            <div className="flex flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-2xl flex-col font-bold">Title</h1>
                <p>sunday 2021</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="flex justify-end p-5 items-center">
                <button className="p-5 bg-mainBlue rounded-xl shadow-2xl">
                  {" "}
                  Continue reading
                </button>
              </div>
            </div>

            <div className="flex flex-row bg-mainCream w-full h-full">
              <div className="w-full">
                <img
                  src={blogOne}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-2xl flex-col font-bold">Title</h1>
                <p>sunday 2021</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="flex justify-end p-5 items-center">
                <button className="p-5 bg-mainBlue rounded-xl shadow-2xl">
                  {" "}
                  Continue reading
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
