import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import EmblaCarousel from "./components/EmblaCarousel";
import FaceShape from "./assets/images/shopByFaceShape.webp";
import FrameShape from "./assets/images/shopByFrameShape.webp";
import { Link } from "react-router-dom";

// import Carousel from "./components/carousel";
// import logo from "./assets/images/GlassesLogoBig.webp";
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-screen h-full bg-CoolGray-900 overflow-x-hidden">
      <Navbar></Navbar>
      <div className="flex w-screen h-screen    justify-center items-center">
        <div className="w-3/4 bg-CoolGray-900 flex flex-col justify-center items-center h-full">
          <h1 className="text-9xl text-mainWhite font-black">Azim</h1>
          <h1 className="text-3xl ml-60 text-mainWhite font-extralight">
            Eyewear
          </h1>
        </div>
        <div className="  w-1/4 rotate-12 -translate-x-40  transform -skew-y-12 -skew-x-12  h-full shadow-inner filter drop-shadow-2xl flex justify-center items-center bg-mainWhite"></div>
      </div>
      <div className="flex w-screen h-screen bg-green-100 flex-col justify-between items-center">
        <div className="w-full h-full py-10 flex flex-col lg:flex-row justify-around items-center">
          <div className=" h-full lg:h-rem26 w-full lg:w-2/5 bg-mainBlue flex flex-col lg:px-10 text-left items-start justify-center pl-5">
            <h4 className="text-2xl">Special Offer</h4>
            <h1
              style={{ lineHeight: 0.8 }}
              className="capitalize    text-6xl w-72 h-auto my-4"
            >
              most popular men glasses
            </h1>
            <button
              className="px-12 transition ease-in duration-300 border-l-8 border-white hover:bg-white py-1 text-3xl my-3 bg-mainBlue outline-2 outline rounded-full outline-black"
              type="submit"
            >
              Show Me
            </button>
          </div>
          <div className=" h-full lg:h-rem26 w-full lg:w-2/5 bg-white flex flex-col lg:p-10 items-start justify-center pl-5">
            <h4 className="text-2xl">Special Offer</h4>
            <h1
              style={{ lineHeight: 0.8 }}
              className="capitalize  text-6xl w-72 h-auto my-4"
            >
              most popular woman glasses
            </h1>
            <button
              className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-3xl my-3 bg-white outline-2 outline rounded-full outline-black"
              type="submit"
            >
              Show Me
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-full mb-20 flex-col bg-mainWhite justify-around align-center">
        <h1 className="text-6xl font-extrabold  my-14 text-center">
          Our Newest Sunnies!
        </h1>
        <div className="w-full h-full bg-CoolGray-900">
          <EmblaCarousel slides={slides} />
        </div>
      </div>
      <div className="h-full w-screen bg-mainWhite flex flex-col items-center justify-between">
        <h1 className="text-6xl  font-extrabold capitalize px-6 py-7 lg:py-20 text-center">
          tailor made for you
        </h1>
        <div className=" h-full w-screen flex lg:flex-row flex-col items-center   justify-center bg-CoolGray-900 lg:pt-10">
          <div className=" relative lg:mt-0 mt-9 cursor-pointer transition ease-in duration-200 active:bg-mainWhite lg:hover:bg-mainWhite p-8 lg:p-10  ">
            <Link to={"/frameShape"}>
              <img className="object-contain" src={FrameShape} alt="" />
              <h1 className="text-5xl lg:text-6xl font-black absolute top-0 my-12 lg:my-20 mx-6">
                Shop By
                <span className=" underline-offset-8 underline pl-2">
                  Frame Shape
                </span>
              </h1>
            </Link>
          </div>
          <div className=" relative active:bg-mainBlue  lg:mb-0 mb-9 cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-8 lg:p-10  ">
            <Link to={"/faceShape"}>
              <img className="object-contain" src={FaceShape} alt="" />
              <h1 className="text-5xl lg:text-6xl font-black absolute top-0 my-12 lg:my-20 mx-6">
                Shop By
                <span className=" underline-offset-8 underline pl-2">
                  Face Shape
                </span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
