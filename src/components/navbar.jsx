import Auth from "./auth";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import {
  SignIn,
  House,
  Alien,
  Eyeglasses,
  Sunglasses,
  Copyright,
  Eye,
} from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/GlassesLogo.webp";

export default function navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(boxRef.current, { opacity: "0", duration: 1.3 });
  });

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div
      ref={boxRef}
      className="w-screen bg-CoolGray-900  z-10 Navbar h-20 flex flex-col fixed  lg:px-8 lg:justify-between  text-3xl  "
    >
      <div className="flex  h-full lg:justify-around justify-evenly items-center lg:py-7">
        <Link
          to={"/"}
          className="text-mainWhite font-extrabold flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <House size={35} />
        </Link>
        <Link
          to={"/ShoppingPage"}
          className="text-mainWhite font-extrabold hidden lg:flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-centerr"
        >
          <h1 className="pr-3 font-extralight hidden lg:flex">Eyeglasses</h1>
          <Eyeglasses size={35} />
        </Link>
        <Link
          to={"/ShoppingPage"}
          className="flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center text-mainWhite"
        >
          <h1 className="pr-3 font-extralight hidden lg:flex  ">Sunglasses</h1>
          <Sunglasses size={35} />
        </Link>
        <Link
          to={"/ShoppingPage"}
          className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <h1 className="pr-3 font-extralight hidden lg:flex ">Lenses</h1>
          <Eye size={30} />
        </Link>
        <Link
          to={"/blogs"}
          className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <h1 className=" font-extralight ">Blog</h1>
        </Link>
        <Link
          to={"/blogs"}
          className="lg:flex hidden text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <h1 className=" ">Premium Brands</h1>
          <Copyright size={18} />
        </Link>

        <Link
          to={"/admin"}
          className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <Alien size={35} />
        </Link>
        {/* <button className="flex ">
          <img src={logo} alt="" />
        </button> */}
        <button
          onClick={openModal}
          className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
        >
          <SignIn size={35} />
          {/* <h1 className="text-2xl mr-2">عضویت</h1> */}
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
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
                  leave="ease-in duration-200"
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
