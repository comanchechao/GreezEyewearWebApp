import Navbar from "../components/navbar";
import { useEffect } from "react";
import Menu from "../components/shoppingPageMenu";
export default function shoppingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <Navbar />
      <div className="h-screen w-screen pt-40 lg:px-10 flex items-center justify-center bg-CoolGray-900">
        <div className=" h-screen w-screen bg-mainWhite">
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
}
