import {
  Sunglasses,
  Eye,
  Eyeglasses,
  ArrowArcLeft,
  Trash,
} from "phosphor-react";
import { useState } from "react";

export default function salesManagement() {
  const [tab, setTab] = useState("");
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full bg-mainCream">
      {tab === "" ? (
        <div className="flex lg:h-68 lg:flex-row lg:space-x-5 lg:space-y-0 flex-col p-2 space-y-5 h-full flex-row justify-center justify-center items-start w-full">
          <button
            onClick={() => {
              setTab("Sun Glasses");
            }}
            className="flex flex-row w-full justify-around items-center lg:h-72 h-52 bg-CoolGray-800 hover:bg-CoolGray-900 transtition ease-all text-mainWhite"
          >
            <div className="flex p-2 space-y-4 flex-col">
              <h1 className="text-4xl lg:text-6xl">Sun Glasses</h1>
              <p className="text-lg">remaining: 24</p>
            </div>
            <div className="flex justify-center items-center">
              <Sunglasses size={70}></Sunglasses>
            </div>
          </button>
          <button
            onClick={() => {
              setTab("Lenses");
            }}
            className="flex lg:h-72 flex-row w-full justify-around items-center h-52 bg-CoolGray-800 hover:bg-CoolGray-900 transtition ease-all text-mainWhite"
          >
            <div className="flex justify-center items-center space-y-4 p-2 flex-col">
              <h1 className="text-4xl lg:text-6xl">Lenses</h1>
              <p className="text-lg">remaining: 24</p>
            </div>
            <div className="flex justify-center items-center">
              <Eye size={70}></Eye>
            </div>
          </button>
          <button
            onClick={() => {
              setTab("Eye Glasses");
            }}
            className="flex lg:h-72 flex-row justify-around items-center w-full h-52 bg-CoolGray-800 hover:bg-CoolGray-900 transtition ease-all text-mainWhite"
          >
            <div className="flex space-y-4 p-2 flex-col">
              <h1 className="text-4xl lg:text-6xl">Eye Glasses</h1>
              <p className="text-lg">remaining: 24</p>
            </div>
            <div className="flex justify-center items-center">
              <Eyeglasses size={70}></Eyeglasses>
            </div>
          </button>
        </div>
      ) : tab !== "" ? (
        <div className="bg-CoolGray-800 w-11/12 h-54">
          <div className="w-full p-4 flex-row-reverse justify-between items-center bg-mainWhite h-24 flex mt-0">
            <button
              className="m-2"
              onClick={() => {
                setTab("");
              }}
            >
              <ArrowArcLeft color="white" size={52}></ArrowArcLeft>
            </button>
            <h1 className="text-5xl text-CoolGray-800">{tab}</h1>
          </div>
          <div className="flex flex-col space-y-2 divide-y-4 p-5">
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex mt-5 w-11/12 flex-col bg-CoolGray-800">
        <div className="flex items-center bg-white h-24">
          <h1 className="text-4xl mx-4">latest sales</h1>
        </div>
        <div className="flex flex-col space-y-2 divide-y-4 p-5">
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
