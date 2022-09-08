import Navbar from "../components/navbar";
import { useEffect } from "react";

export default function shoppingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto w-screen">
      <Navbar />
      <div className="h-screen w-screen bg-CoolGray-900"></div>
    </div>
  );
}
