import { useState } from "react";
// import Auth from "./components/auth";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-full  ">
      <Navbar></Navbar>
      <div className="flex w-screen h-screen bg-mainYellow justify-center align-center">
        {/* <Auth></Auth> */}
      </div>
      <div className="flex w-screen h-screen bg-mainPink justify-center align-center"></div>
      <div className="flex w-screen h-screen bg-mainGreen justify-center align-center"></div>
    </div>
  );
}

export default App;
