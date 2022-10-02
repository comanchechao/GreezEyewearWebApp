import cardPicture1 from "../assets/images/cardPicture1.webp";
import { ShoppingCart } from "phosphor-react";
export default function Card() {
  return (
    <div className="flex-col my-10  w-96 h-rem33 bg-mainCream flex justify-around items-center">
      <img src={cardPicture1} className="object-contain w-full" alt="" />
      <div className="flex space-x-5 justify-center items-center">
        <h2 className="text-2xl font-bold">St Michel</h2>
        <h2 className="text-2xl font-bold">$50</h2>
        <button
          className="px-6 transition flex ease-in duration-300 border-l-8 border-white hover:bg-white py-2 text-lg font-bold my-3 bg-mainBlue outline-2 outline rounded-full outline-black"
          type="submit"
        >
          Add to Cart <ShoppingCart size={28} />
        </button>
      </div>
    </div>
  );
}
