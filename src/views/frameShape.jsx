import Navbar from "../components/navbar";
import { useEffect } from "react";
import polygonFrame from "../assets/images/polygonFrame.webp";
import hornFrame from "../assets/images/hornFrame.webp";
import squareFrame from "../assets/images/squareFrame.webp";
import roundFrame from "../assets/images/roundFrame.webp";
import cateyeFrame from "../assets/images/cateyeFrame.webp";
import rectangleFrame from "../assets/images/rectangleFrame.webp";
import aviatorFrame from "../assets/images/aviatorFrame.webp";
import browlineFrame from "../assets/images/browlineFrame.webp";
import { useTranslation, Trans } from "react-i18next";

export default function frameShape() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <Navbar />
      <div className="h-full w-screen bg-CoolGray-900 text-mainWhite pt-32 flex items-center justify-center flex-col">
        <h1 className="lg:text-6xl capitalize text-6xl text-mainWhite font-extrabold text-center  max-w-2xl ">
          {t("easily")}
        </h1>
        <p className="text-center text-mainWhite text-3xl px-16 mt-10 mb-12">
          {t("pairFind")}
        </p>
        <div className="flex lg:px-32 border-x-2 border-mainWhite py-10 lg:flex-row flex-col justify-center lg:space-y-0 space-y-14 lg:space-x-9 w-screen ">
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={polygonFrame}
              alt=""
            />
            <div className="flex items-center justify-center text-center  flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 text-center underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("polygon")}
                </span>
              </h1>

              <button
                className=" px-16 mr-9 lg:mr-0  transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={hornFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("horn")}
                </span>
              </h1>

              <button
                className=" px-16    mr-9 lg:mr-0 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:px-32 border-x-2 border-mainWhite py-10 lg:flex-row flex-col  justify-center lg:space-y-0 space-y-14 lg:space-x-9 w-screen ">
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={roundFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("round")}
                </span>
              </h1>

              <button
                className=" px-16    mr-9 lg:mr-0 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={squareFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("square")}
                </span>
              </h1>

              <button
                className=" px-16    mr-9 lg:mr-0 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:px-32 border-x-2 border-mainWhite py-10 lg:flex-row flex-col  justify-center lg:space-y-0 space-y-14 lg:space-x-9 w-screen ">
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={cateyeFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("catEye")}
                </span>
              </h1>

              <button
                className=" px-16    mr-9 lg:mr-0 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={rectangleFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("rectangle")}
                </span>
              </h1>

              <button
                className=" px-16    mr-9 lg:mr-0 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:px-32 border-x-2 border-mainWhite py-10 lg:flex-row flex-col  justify-center lg:space-y-0 space-y-14 lg:space-x-9 w-screen ">
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={aviatorFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("aviator")}
                </span>
              </h1>

              <button
                className=" px-16    mr-9 lg:mr-0 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-11  flex-col">
            <img
              className="object-contain  mb-6  active:bg-mainWhite cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-2 rounded-sm"
              src={browlineFrame}
              alt=""
            />
            <div className="flex items-center flex-col space-y-8">
              <h1 className="text-5xl text-mainWhite lg:text-6xl font-black  lg:mr-0 mr-6">
                <span className=" underline-offset-8 underline p-2 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {t("browline")}
                </span>
              </h1>

              <button
                className=" px-16    mr-9 lg:mr-0 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
                type="submit"
              >
                {t("showMe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
