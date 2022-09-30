import Navbar from "../components/navbar";
import { useEffect } from "react";
import Menu from "../components/shoppingPageMenu";
import Card from "../components/card";
export default function shoppingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <Navbar />
      <div className="h-auto w-screen pt-40 lg:px-28 flex items-center justify-center bg-CoolGray-900">
        <div className=" h-full w-screen space-y-28 bg-mainWhite flex">
          <div>
            <Menu></Menu>
          </div>
          <div className="h-full w-full grid justify-items-center grid-cols-3 grid-rows-1  ">
            <Card></Card> <Card></Card>
            <Card></Card>
            <Card></Card> <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
