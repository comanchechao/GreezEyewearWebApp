import { useState } from "react";
// import Auth from "./components/auth";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-full  ">
      <Navbar></Navbar>
      <div className="flex w-screen h-screen bg-Rose-900   flex-col justify-center items-center">
        {/* <Auth></Auth> */}

        <div className="w-3/4 h-3/5   flex items-start space-x-3 justify-center">
          <h1 className="text-9xl text-mainPink font-SultanFont">پِینت</h1>
          <h1 className="text-5xl">کافه</h1>
        </div>
        <button className="text-3xl font-black rounded-full bg-mainPink px-14 py-4">
          دیدن منو
        </button>
      </div>
      <div className="flex w-screen h-screen bg-mainPink justify-center align-center"></div>
      <div className="flex w-screen h-screen bg-mainGreen justify-center align-center"></div>
    </div>
  );
}

export default App;
