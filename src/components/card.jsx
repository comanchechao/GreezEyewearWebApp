import cardPicture1 from "../assets/images/cardPicture1.webp";
import { ShoppingCart } from "phosphor-react";
export default function Card() {
  return (
    <div className="flex-col my-10  w-96 h-rem33 bg-mainCream flex justify-around items-center">
      <img src={cardPicture1} className="object-contain w-full" alt="" />
      <div className="flex space-x-3">
        <h2 className="text-2xl font-bold">St Michel</h2>
        <h2 className="text-2xl font-bold">$50</h2>
        <ShoppingCart size={32} />
      </div>
    </div>
  );
}
