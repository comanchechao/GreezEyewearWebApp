import { useState } from "react";
import { ForkKnife } from "phosphor-react";
import "./App.css";
import Navbar from "./components/navbar";
import EmblaCarousel from "./components/EmblaCarousel";

// import Carousel from "./components/carousel";
// import logo from "./assets/images/GlassesLogoBig.webp";
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
function App() {
  return (
    <div className="w-screen h-full  ">
      <Navbar></Navbar>
      <div className="flex w-screen h-screen bg-mainWhite flex-col justify-center items-center">
        {/* <Auth></Auth> */}

        {/* <div className="w-3/4 h-3/5   flex items-center space-x-3 justify-center bg-mainBlue">
          <h1 className="text-10xl text-mainYellow font-mainFont underline-offset-6 underline">
            Azim
          </h1>
          <img src={logo} alt="" />
        </div> */}
      </div>
      <div className="flex w-screen h-screen bg-green-100 flex-col justify-between items-center">
        <div className="w-full h-full flex justify-around items-center">
          <div className=" h-3/6 w-2/5 bg-mainBlue flex flex-col px-10 text-left items-start justify-center">
            <h4 className="text-2xl">Special Offer</h4>
            <h1
              style={{ lineHeight: 0.8 }}
              className="capitalize text-6xl w-72 h-auto my-1"
            >
              most popular men glasses
            </h1>
            <button
              className="px-12 transition ease-in duration-300 border-l-8 border-white hover:bg-white py-1 text-3xl my-3 bg-mainBlue outline-2 outline rounded-full outline-black"
              type="submit"
            >
              Show Me
            </button>
          </div>
          <div className=" h-3/6 w-2/5 bg-white flex flex-col p-10 items-start justify-center">
            {" "}
            <h4 className="text-2xl">Special Offer</h4>
            <h1
              style={{ lineHeight: 0.8 }}
              className="capitalize text-6xl w-72 h-auto my-1"
            >
              most popular woman glasses
            </h1>
            <button
              className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-3xl my-3 bg-white outline-2 outline rounded-full outline-black"
              type="submit"
            >
              Show Me
            </button>
          </div>
        </div>
        <h1 className="text-6xl font-extrabold pb-14">Our Newest Sunnies!</h1>
      </div>
      <div className="flex w-screen h-auto mb-20 bg-gray-100 justify-center align-center">
        <div className="w-full h-full  ">
          <EmblaCarousel slides={slides} />
        </div>
      </div>
      <div className="h-screen w-screen bg-mainWhite flex flex-col items-center justify-around">
        <h1 className="text-6xl font-extrabold capitalize py-20">
          tailor made for you
        </h1>
        <div className=" h-full w-screen bg-white"></div>
      </div>
    </div>
  );
}

export default App;
