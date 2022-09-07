import Navbar from "./navbar";
import { useEffect } from "react";
import aviatorFrame from "../assets/images/aviatorFrame.webp";
import hornFrame from "../assets/images/hornFrame.webp";
import squareFrame from "../assets/images/squareFrame.webp";
import roundFrame from "../assets/images/roundFrame.webp";
import cateyeFrame from "../assets/images/cateyeFrame.webp";
import rectangleFrame from "../assets/images/rectangleFrame.webp";

export default function frameShape() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto w-screen">
      <Navbar />
      <div className="h-full w-screen bg-CoolGray-900 text-mainWhite pt-32 flex items-center justify-center flex-col">
        <h1 className="lg:text-6xl capitalize text-6xl text-mainWhite font-extrabold text-center  max-w-2xl ">
          Easily find the best glasses by frame shape
        </h1>
        <p className="text-center text-mainWhite text-3xl px-16 mt-10 mb-12">
          Find the right pair for you.
        </p>
        <div className="flex lg:px-32 border-x-2 border-mainWhite my-10 lg:flex-row flex-col justify-center lg:space-y-0 space-y-14 lg:space-x-9 w-screen ">
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={aviatorFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Aviator
                </span>
              </h1>

              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={hornFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Horn
                </span>
              </h1>

              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:px-32 border-x-2 border-mainWhite my-10 lg:flex-row flex-col  justify-center lg:space-y-0 space-y-14 lg:space-x-9 w-screen ">
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={roundFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Round
                </span>
              </h1>

              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={squareFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Square
                </span>
              </h1>

              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:px-32 border-x-2 border-mainWhite my-10 lg:flex-row flex-col  justify-center lg:space-y-0 space-y-14 lg:space-x-9 w-screen ">
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={cateyeFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Cat-eye
                </span>
              </h1>

              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={rectangleFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Rectangle
                </span>
              </h1>

              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
