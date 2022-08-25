import { useState } from "react";
import { ForkKnife } from "phosphor-react";
import "./App.css";
import Navbar from "./components/navbar";
import logo from "./assets/images/GlassesLogoBig.webp";

function App() {
  return (
    <div className="w-screen h-full  ">
      <Navbar></Navbar>
      <div className="flex w-screen h-screen bg-mainWhite flex-col justify-center items-center">
        {/* <Auth></Auth> */}

        <div className="w-3/4 h-3/5   flex items-center space-x-3 justify-center bg-mainBlue">
          <h1 className="text-10xl text-mainYellow font-mainFont underline-offset-6 underline">
            Azim
          </h1>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="flex w-screen h-screen bg-mainPink justify-center align-center"></div>
      <div className="flex w-screen h-screen bg-mainGreen justify-center align-center"></div>
    </div>
  );
}

export default App;
