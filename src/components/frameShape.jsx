import Navbar from "./navbar";
import { useEffect } from "react";

export default function frameShape() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen w-screen bg-CoolGray-900">
      <Navbar />
    </div>
  );
}
