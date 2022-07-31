import { useState } from "react";
import Auth from "./auth";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-Cyan-500 to-purple-500">
      <Navbar></Navbar>
      <div className="flex w-full h-full justify-center align-center">
        <Auth></Auth>
      </div>
    </div>
  );
}

export default App;
