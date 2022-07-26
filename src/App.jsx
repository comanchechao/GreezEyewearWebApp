import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Eye,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  TelegramLogo,
  Phone,
  MapPin,
} from "phosphor-react";
import "./App.css";
import Navbar from "./components/navbar";
import EmblaCarousel from "./components/EmblaCarousel";
import FaceShape from "./assets/images/shopByFaceShape.webp";
import FrameShape from "./assets/images/shopByFrameShape.webp";
import mainPagePicture from "./assets/images/mainPagePicture.webp";
import mensPopular from "./assets/images/mensPopular.webp";
import womansPopular from "./assets/images/womansPopular.webp";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import Carousel from "./components/carousel";
// import logo from "./assets/images/GlassesLogoBig.webp";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
function App() {
  const mainPageBg = useRef();
  const mainPicture = useRef();
  const mainText = useRef();
  const firstContainer = useRef();
  const firstBox = useRef();
  const secondContainer = useRef();
  const secondBox = useRef();
  const mainContainer = useRef();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    gsap.from(firstBox.current, {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: "expo.out",
      scrollTrigger: {
        trigger: firstContainer.current,
        start: "top center",
        end: "100% top",
        toggleActions: "play none resume reverse",
      },
    });
    gsap.from(secondBox.current, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: "power.Out",
      scrollTrigger: {
        trigger: secondContainer.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none resume play",
      },
    });
    gsap.to(mainPageBg.current, {
      opacity: 0,
      x: -30,
      duration: 0.5,
      ease: "power.Out",
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "center center",
        end: "bottom top",
        toggleActions: "play none resume reset",
      },
    });
    gsap.to(mainPicture.current, {
      opacity: 0,
      x: 30,
      duration: 0.5,
      ease: "power.Out",
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "center center",
        end: "bottom top",
        toggleActions: "play none resume reset",
      },
    });
    var tl = gsap.timeline();
    tl.from(mainPageBg.current, {
      opacity: "0",
      x: -30,
      duration: 0.8,
      delay: 1.3,
    });
    tl.from(mainText.current, { opacity: "0", duration: 0.6, y: 50 });
    tl.from(mainPicture.current, {
      opacity: "0",
      duration: 0.5,

      x: 30,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-screen h-full bg-CoolGray-900 overflow-x-hidden capitalize">
      <Navbar></Navbar>
      <div
        ref={mainContainer}
        className="flex w-screen relative lg:h-screen lg:px-32 mt-4 pt-10 h-carousel  flex-col lg:flex-row   lg:justify-center items-center"
      >
        <img
          ref={mainPicture}
          className="object-contain absolute top-96 lg:mt-0 mt-10 lg:top-28  lg:right-48 max-w-xs  lg:max-w-2xl z-10"
          src={mainPagePicture}
          alt=""
        />
        <div
          ref={mainPageBg}
          className="  w-2/3  bg-mainWhite py-4  mt-2  flex  flex-col justify-center px-3 lg:pl-24 lg:pr-96 capitalize  items-center lg:items-start h-full"
        >
          <h2 className="  text-9xl leading-10  font-SultanFont mt-10 font-bold">
            Azim
          </h2>
          <h4 className="text-3xl font-SultanFont my-3  font-extralight  lg:ml-0 ml-28  flex items-center">
            Eyewear <Eye className="ml-1" size={23}></Eye>
          </h4>
          <h1
            ref={mainText}
            className=" text-3xl  lg:text-left text-center leading-loose lg:text-7xl  my-2  text-CoolGray-900 font-black underline-offset-8 underline "
          >
            {t("find")}
          </h1>
          <Link to={"/shoppingPage"}>
            <button
              className="lg:px-20 px-10  transition ease-in duration-300 border-l-8 border-CoolGray-900 hover:text-CoolGray-900 text-mainWhite hover:bg-mainBlue py-3 text-xl lg:text-3xl my-3 bg-CoolGray-900   rounded-full  "
              type="submit"
            >
              {t("shopNow")}
            </button>
          </Link>

          {/* <h1 className="text-5xl ml-30 flex items-center space-x-5 text-CoolGray-900 font-extralight">
            <span>Eyewear</span>
            <img
              className="object-contain  w-20"
              src={glessesSmallMainPage}
              alt=""
            />
          </h1> */}
        </div>
        <div className="w-1/3 h-full bg-CoolGray-900"></div>
        {/* <div className="  w-1/4 rotate-90 lg:rotate-12 lg:-translate-x-40  transform -skew-y-12 lg:-skew-x-12 -translate-y-44  h-full shadow-inner filter drop-shadow-2xl flex justify-center items-center bg-mainWhite"></div> */}
      </div>
      <div
        ref={firstContainer}
        className="flex w-screen lg:h-auto mb-9 py-14 h-screen bg-CoolGray-900 flex-col justify-between items-center"
      >
        <div
          ref={firstBox}
          className="w-full h-full py-10 mb-14 flex flex-col lg:flex-row justify-around items-center"
        >
          <div className="  h-full lg:h-rem26 w-full lg:w-2/5 bg-mainBlue flex flex-col lg:flex-row text-right items-center lg:items-start justify-center pl-5">
            <div className=" w-full lg:w-1/2 h-full bg-mainBlue flex flex-col items-start justify-center p-4">
              <h4 className="text-2xl ">{t("specialOffer")}</h4>
              <h1
                style={{ lineHeight: 1.02 }}
                className="capitalize text-4xl lg:text-left text-center lg:text-5xl my-4"
              >
                {t("mostMen")}
              </h1>
              <Link to={"/shoppingPage"}>
                <button
                  className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-xl lg:text-3xl my-3 bg-mainCream outline-2 outline rounded-full outline-black"
                  type="submit"
                >
                  {t("showMe")}
                </button>
              </Link>
            </div>
            {/* <div className="w-1/2 lg:h-full  flex  lg:relative">
              <img
                className="object-contain lg:absolute lg:left-5 lg:max-w-xs lg:top-14 shadow-xl"
                src={mensPopular}
                alt=""
              />
            </div> */}
          </div>
          <div
            ref={firstBox}
            className="  h-full lg:h-rem26 w-full lg:w-2/5 bg-mainCream flex flex-col lg:flex-row text-right items-center lg:items-start justify-center pl-5"
          >
            {/* <div className="w-1/2 lg:h-full   lg:relative">
              <img
                className="object-contain lg:absolute lg:right-5 lg:max-w-xs lg:top-14 shadow-xl"
                src={womansPopular}
                alt=""
              />
            </div> */}
            <div className=" w-full lg:w-1/2 h-full   flex flex-col items-end justify-center p-4">
              <h4 className="text-2xl ">{t("specialOffer")}</h4>
              <h1
                style={{ lineHeight: 1.02 }}
                className="capitalize text-4xl lg:text-right text-center lg:text-5xl my-4"
              >
                {t("mostWomen")}
              </h1>
              <Link to={"/shoppingPage"}>
                <button
                  className="px-12 transition ease-in duration-300 border-l-8 border-white hover:bg-white py-1 text-xl lg:text-3xl my-3 bg-mainBlue outline-2 outline rounded-full outline-black"
                  type="submit"
                >
                  {t("showMe")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-full mb-20 flex-col text-mainWhite justify-between items-center">
        <Link to={"/shoppingPage"}>
          <h1 className="text-6xl max-w-5xl font-extrabold   my-10 text-center p-6 hover:bg-CoolGray-900 bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-mainWhite text-CoolGray-900">
            {t("newestSunglasses")}
          </h1>
        </Link>
        <div className="w-full h-full ">
          <div>
            <EmblaCarousel slides={slides} />
          </div>
        </div>
      </div>
      <div className="h-full w-screen bg-mainBlue flex  flex-col items-center justify-between">
        <h1 className="text-6xl  font-extrabold capitalize px-6 py-7 lg:py-20 text-center">
          {t("tailorMade")}
        </h1>
        <div
          ref={secondContainer}
          className=" h-full py-28 w-screen flex lg:flex-row flex-col items-center   justify-center bg-CoolGray-900"
        >
          <div
            ref={secondBox}
            className="lg:flex h-full w-full items-center justify-center  lg:space-x-20"
          >
            <div className=" relative lg:mt-0 mt-9 cursor-pointer transition ease-in duration-200 active:bg-mainCream lg:hover:bg-mainCream p-8 lg:p-3  ">
              <Link to={"/frameShape"}>
                <img className="object-contain" src={FrameShape} alt="" />
                <h1 className="text-3xl lg:text-5xl font-black absolute top-0 my-10 lg:my-10 lg:mx-6 mx-3">
                  {t("shopBy")}
                  <span className=" underline-offset-8 underline pl-2">
                    {t("frameShape")}
                  </span>
                </h1>
              </Link>
            </div>
            <div className=" relative active:bg-mainBlue  lg:mb-0 mb-9 cursor-pointer transition ease-in duration-200 lg:hover:bg-mainBlue p-8 lg:p-3  ">
              <Link to={"/faceShape"}>
                <img className="object-contain" src={FaceShape} alt="" />
                <h1 className="text-3xl lg:text-5xl font-black absolute top-0 my-10 lg:my-10 lg:mx-6 mx-3">
                  {t("shopBy")}
                  <span className=" underline-offset-8 underline pl-2">
                    {t("faceShape")}
                  </span>
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-96 p-10 lg:p-24  flex flex-col space-y-4 items-center bg-mainBlue">
        <h1 className="text-5xl text-CoolGray-900 text-center">
          {t("findUs")}
        </h1>
        <div className="flex items-center justify-between space-x-5">
          <InstagramLogo size={50} weight="fill" />
          <FacebookLogo size={50} weight="fill" />
          <WhatsappLogo size={50} weight="fill" />
          <TelegramLogo size={50} weight="fill" />
          <Phone size={50} weight="fill" />
        </div>
        <button className=" space-x-3 py-2 px-10  lg:px-24 transition items-center ease-in flex duration-300 border-2 hover:bg-CoolGray-900 border-CoolGray-900 hover:text-mainWhite text-CoolGray-900     my-6 border-dashed   rounded-full  ">
          <h2 className=" text-3xl">{t("findMap")}</h2>
          <MapPin size={40} weight="fill" />
        </button>
      </div>
      <div className="flex  justify-end items-center">
        <a
          href="https://www.instagram.com/comanchechao/?hl=en"
          class="Chao text-xl text-mainWhite mx-1 p-1 lg:mx-3 transition
ease-in
duration-300 border-2 border-dashed border-mainBlue hover:bg-purple-900 rounded-sm lg:p-2 "
        >
          🧙{t("Chao")}
        </a>
        <span className="text-mainWhite text-xl">و</span>
        <a
          href="https://www.instagram.com/just_greez/?hl=en"
          class="Greez text-xl text-mainWhite mx-1 p-1 lg:mx-3 transition
ease-in
duration-300 border-2 border-dashed border-mainBlue hover:bg-purple-900 rounded-sm lg:p-2 "
        >
          🐻{t("Greez")}
        </a>
        <h1 className="lg:text-xl text-lg p-2 lg:p-4 my-2 text-center text-mainWhite border-dashed border-mainWhite">
          : {t("design")}
        </h1>
      </div>
    </div>
  );
}

export default App;
