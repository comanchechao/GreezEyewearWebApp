import { useState } from "react";
import Auth from "./auth";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-pink-100">
      <div className="flex w-full h-full justify-center align-center">
        <Auth></Auth>
      </div>
    </div>
  );
}

export default App;
