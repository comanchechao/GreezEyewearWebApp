import Navbar from "./navbar";
import ovalFace from "../assets/images/ovalFace.webp";
import roundFace from "../assets/images/roundFace.webp";
import squareFace from "../assets/images/squareFace.webp";

export default function faceShape() {
  return (
    <div className="h-auto w-screen bg-mainWhite">
      <Navbar />
      <div className=" h-full w-screen bg-CoolGray-900 pt-32 flex flex-col items-center justify-center">
        <h1 className="lg:text-7xl text-6xl mt-24 text-mainWhite font-extrabold text-center  max-w-2xl ">
          Comfortabely Shop By Your Face Shape
        </h1>
        <p className="text-center text-mainWhite text-3xl px-16 mt-10 mb-12">
          Explore our glasses by face shape and find the right pair for you.
        </p>
        <div className="flex   my-10 justify-around w-screen px-24 items-center ">
          <div className="flex items-center  ">
            <img
              className="object-contain border-2 border-mainWhite active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={ovalFace}
              alt=""
            />
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Round
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 my-12">
                A round face is typically as wide as it's long without a
                prominent cheekbone.
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex   my-10 justify-around w-screen px-24 items-center ">
          <div className="flex items-center  ">
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Oval
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 my-12">
                An oval face is proportionally balanced with a slightly curved
                jawline that is a bit narrower than the forehead.
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
            <img
              className="object-contain border-2 border-mainBlue active:bg-mainBlue cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-3 rounded-md"
              src={roundFace}
              alt=""
            />
          </div>
        </div>
        <div className="flex   my-10 justify-around w-screen px-24 items-center ">
          <div className="flex items-center  ">
            <img
              className="object-contain border-2 border-mainWhite active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={squareFace}
              alt=""
            />
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Square
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 my-12">
                A square face typically has a wide forehead with a wide, angular
                jawline.
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
