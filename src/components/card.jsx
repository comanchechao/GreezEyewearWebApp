import cardPicture1 from "../assets/images/cardPicture1.webp";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

// import { RadioGroup } from "@headlessui/react";
// import { useState } from "react";
export default function Card() {
  // let [plan, setPlan] = useState("startup");
  return (
    <div className="flex-col relative filter drop-shadow-2xl my-10 w-screen lg:w-96 h-rem26 bg-white flex justify-between pb-2 cursor-pointer items-start">
      <img src={cardPicture1} className="object-contain w-full" alt="" />
      <button
        className="transition absolute p-5  top-40 left-64 lg:left-80 ml-8 flex ease-in duration-300 border-white hover:bg-mainBlue text-mainWhite hover:text-CoolGray-900 active:bg-mainBlue active:text-CoolGray-900  text-3xl   bg-CoolGray-900  rounded-full  "
        type="submit"
      >
        <ShoppingCart size={28} weight="fill" />
      </button>

      <div className="flex space-x-5  justify-center items-center  self-center">
        <div className="">
          <h2 className="text-2xl p-2 underline-offset-8 underline font-bold hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
            St Michel
          </h2>
          <h2 className="text-xl p-2">$500</h2>
        </div>
        <Link to={"/productDetail"}>
          <button
            className=" px-9 transition ease-in duration-300  hover:bg-mainCream py-2 text-2xl my-3 hover:text-CoolGray-900 bg-CoolGray-900 text-mainWhite rounded-full"
            type="submit"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
