import { useState } from "react";
import { ForkKnife } from "phosphor-react";
import "./App.css";
import Navbar from "./components/navbar";
import logo from "./assets/images/GlassesLogoBig.webp";

function App() {
  return (
    <div className="w-screen h-full  ">
      <Navbar></Navbar>
      <div className="flex w-screen h-screen bg-blue-400 flex-col justify-center items-center">
        {/* <Auth></Auth> */}

        {/* <div className="w-3/4 h-3/5   flex items-center space-x-3 justify-center bg-mainBlue">
          <h1 className="text-10xl text-mainYellow font-mainFont underline-offset-6 underline">
            Azim
          </h1>
          <img src={logo} alt="" />
        </div> */}
      </div>
      <div className="flex w-screen h-screen bg-green-100 justify-around items-center">
        <div className=" h-3/6 w-2/5 bg-mainBlue flex flex-col px-7 text-left items-start justify-center">
          <h4 className="text-2xl">Special Offer</h4>
          <h1
            style={{ lineHeight: 0.8 }}
            className="capitalize text-6xl w-72 h-auto my-1"
          >
            best selling men glasses
          </h1>
          <button
            className="px-12 transition ease-in duration-300 hover:bg-white py-1 text-3xl my-3 bg-mainBlue outline-2 outline rounded-full outline-black"
            type="submit"
          >
            Show Me
          </button>
        </div>
        <div className=" h-3/6 w-2/5 bg-white flex flex-col p-7 items-start justify-center">
          {" "}
          <h4 className="text-2xl">Special Offer</h4>
          <h1
            style={{ lineHeight: 0.8 }}
            className="capitalize text-6xl w-72 h-auto my-1"
          >
            best selling woman glasses
          </h1>
          <button
            className="px-12 transition ease-in duration-300 hover:bg-mainBlue py-1 text-3xl my-3 bg-white outline-2 outline rounded-full outline-black"
            type="submit"
          >
            Show Me
          </button>
        </div>
      </div>
      <div className="flex w-screen h-screen bg-mainGreen justify-center align-center"></div>
    </div>
  );
}

export default App;
