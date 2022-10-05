import cardPicture1 from "../assets/images/cardPicture1.webp";
import { ShoppingCart } from "phosphor-react";
export default function Card() {
  return (
    <div className="flex-col relative shadow-xl my-10 w-96 h-rem26 bg-mainCream flex justify-between pb-5 cursor-pointer items-start">
      <img src={cardPicture1} className="object-contain w-full" alt="" />
      <button
        className="transition absolute p-5  top-40 left-80 ml-8 flex ease-in duration-300 border-white hover:bg-mainWhite text-mainWhite hover:text-CoolGray-900 active:bg-mainWhite active:text-CoolGray-900  text-3xl   bg-CoolGray-900  rounded-full  "
        type="submit"
      >
        <ShoppingCart size={28} weight="fill" />
      </button>
      <div className="flex space-x-5  justify-center items-center  self-center">
        <div className="">
          <h2 className="text-2xl p-2 underline-offset-8 underline font-bold hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
            St Michel
          </h2>
          <h2 className="text-xl p-2">$50</h2>
        </div>
        <button
          className=" px-12 transition ease-in duration-300  hover:bg-mainWhite py-3 text-2xl my-3 hover:text-CoolGray-900 bg-CoolGray-900 text-mainWhite rounded-full"
          type="submit"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
