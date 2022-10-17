import Auth from "./auth";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ShoppingCartDrawer from "./shoppingCartDrawer";
import PhoneDrawer from "./phoneDrawer";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

import {
  SignIn,
  House,
  Alien,
  Eyeglasses,
  Sunglasses,
  Globe,
  Copyright,
  Eye,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const lngs = {
  en: { cut: "En", nativeName: "English" },
  fa: { cut: "Fa", nativeName: "farsi" },
};
const langButton = () => {
  Object.keys(lngs).map((lng) => {
    i18next.use(LanguageDetector);

    if (lng === "Fa") {
      return (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          type="submit"
          className="  text-mainWhite transition flex-col  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <Globe />
          En
        </button>
      );
    } else {
      return (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          type="submit"
          className="  text-mainWhite transition flex-col  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <Globe />
          Fa
        </button>
      );
    }
  });
};
export default function navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(boxRef.current, { opacity: "0", duration: 1.3 });
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  const { t, i18n } = useTranslation();

  return (
    <div
      ref={boxRef}
      className="w-screen bg-CoolGray-900  z-20 Navbar h-20 flex flex-col fixed  lg:px-8 lg:justify-between  text-3xl  "
    >
      <div className="flex  h-full justify-between lg:justify-around px-4 lg:px-0 items-center lg:py-7">
        <div className="lg:hidden flex">
          <PhoneDrawer></PhoneDrawer>
        </div>
        <Link
          to={"/"}
          className="text-mainWhite font-extrabold   transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-4 items-center"
        >
          <span className=" font-SultanFont text-5xl font-bold">Azim</span>
        </Link>
        <Link
          to={"/"}
          className="text-mainWhite font-extrabold   transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <House size={35} />
        </Link>
        <Link
          to={"/ShoppingPage"}
          className="text-mainWhite font-extrabold  transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-centerr"
        >
          <h1 className="pr-3 font-extralight hidden lg:flex">
            {t("eyeGlasses")}
          </h1>
          <Eyeglasses size={35} />
        </Link>
        <Link
          to={"/ShoppingPage"}
          className="  transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center text-mainWhite"
        >
          <h1 className="pr-3 font-extralight   ">{t("sunGlasses")}</h1>
          <Sunglasses size={35} />
        </Link>
        <Link
          to={"/ShoppingPage"}
          className="  text-mainWhite transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <h1 className="pr-3 font-extralight  ">{t("lenses")}</h1>
          <Eye size={30} />
        </Link>
        <Link
          to={"/blogs"}
          className="  text-mainWhite transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <h1 className=" ">{t("premiumBrands")}</h1>
          <Copyright size={18} />
        </Link>

        <Link
          to={"/blogs"}
          className="  text-mainWhite transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <h1 className=" font-extralight ">{t("blogs")}</h1>
        </Link>

        <Link
          to={"/admin"}
          className="  text-mainWhite transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <Alien size={35} />
        </Link>

        <div>{langButton()} </div>
        <div className="flex space-x-4">
          <button
            onClick={openModal}
            className="  text-mainWhite transition  ease-in duration-200  flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
          >
            <SignIn size={35} />
            {/* <h1 className="text-2xl mr-2">عضویت</h1> */}
          </button>
          <ShoppingCartDrawer></ShoppingCartDrawer>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" ease-in duration-200 hidden lg:flex "
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto">
              <div className="flex lg:w-full self-center min-h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave=" ease-in duration-200 hidden lg:flex "
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full h-full transform overflow-hidden rounded shadow-xl transition-all">
                    <Auth></Auth>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
