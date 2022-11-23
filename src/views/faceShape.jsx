import Navbar from "../components/navbar";
import ovalFace from "../assets/images/ovalFace.webp";
import roundFace from "../assets/images/roundFace.webp";
import squareFace from "../assets/images/squareFace.webp";
import diamondFace from "../assets/images/diamondFace.webp";
import pearFace from "../assets/images/pearFace.webp";
import heartFace from "../assets/images/heartFace.webp";
import { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

export default function faceShape() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <div className="h-auto w-screen  ">
      <Navbar />
      <div className=" h-full w-screen bg-CoolGray-900 pt-32 flex flex-col items-center justify-center">
        <h1 className="lg:text-7xl text-6xl mt-24 text-mainWhite font-extrabold text-center  max-w-2xl ">
          {t("comfortabely")}
        </h1>
        <p className="text-center text-mainWhite text-3xl px-16 mt-10 mb-12">
          {t("explore")}
        </p>
        <div className="flex my-10 justify-around w-screen lg:px-24 items-center">
          <div className="flex items-center  lg:fle lg:flex-row flex-colrow flex-col">
            <img
              className="object-contain mb-6 border-2 border-mainWhite active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={ovalFace}
              alt=""
            />
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("round")}
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl lg:px-16 lg:my-12 my-9">
                {t("roundExplanation")}
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex my-10 justify-around w-screen lg:px-24 items-center">
          <div className="flex items-center lg:flex-row flex-col-reverse">
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("oval")}
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 lg:my-12 my-9">
                {t("ovalExplanation")}
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
            <img
              className="object-contain mb-6 border-2 border-mainBlue active:bg-mainBlue cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-3 rounded-md"
              src={roundFace}
              alt=""
            />
          </div>
        </div>
        <div className="flex my-10 justify-around w-screen lg:px-24 items-center">
          <div className="flex items-center lg:flex-row flex-col">
            <img
              className="object-contain mb-6 border-2 border-mainWhite active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={squareFace}
              alt=""
            />
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("square")}
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 lg:my-12 my-9">
                {t("squareExplanation")}
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex my-10 justify-around w-screen lg:px-24 items-center">
          <div className="flex items-center lg:flex-row flex-col-reverse">
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("diamond")}
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 lg:my-12 my-9">
                {t("diamondExplanation")}
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
            <img
              className="object-contain mb-6 border-2 border-mainBlue active:bg-mainBlue cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-3 rounded-md"
              src={diamondFace}
              alt=""
            />
          </div>
        </div>
        <div className="flex my-10 justify-around w-screen lg:px-24 items-center">
          <div className="flex items-center lg:flex-row flex-col">
            <img
              className="object-contain mb-6 border-2 border-mainWhite active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainWhite p-3 rounded-md"
              src={pearFace}
              alt=""
            />
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("pear")}
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 lg:my-12 my-9">
                {t("pearExplanation")}
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex my-10 justify-around w-screen lg:px-24 items-center">
          <div className="flex items-center lg:flex-row flex-col-reverse">
            <div className="flex items-center flex-col">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black ">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("heart")}
                </span>
              </h1>
              <p className="text-center text-mainWhite text-3xl px-16 lg:my-12 my-9">
                {t("heartExplanation")}
              </p>
              <button
                className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
            <img
              className="object-contain mb-6 border-2 border-mainBlue active:bg-mainBlue cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-3 rounded-md"
              src={heartFace}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
