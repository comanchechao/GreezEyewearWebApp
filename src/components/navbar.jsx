import Auth from "./auth";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { SignIn, House, Alien } from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/GlassesLogo.webp";

export default function navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-screen bg-transparent z-10 Navbar h-20 flex flex-col fixed lg:px-8 lg:justify-between justify-center align-center text-3xl  ">
      <div className="flex align-center h-full justify-around flex-row items-center">
        <Link
          to={"/"}
          className="text-white font-extrabold hidden lg:flex align-center"
        >
          <House size={40} />{" "}
        </Link>
        <Link
          to={"/admin"}
          className="text-white font-extrabold hidden lg:flex align-center"
        >
          <Alien size={40} />{" "}
        </Link>
        <button className="flex ">
          <img src={logo} alt="" />
        </button>
        <button
          onClick={openModal}
          className="text-white font-medium hidden flex-col lg:flex my-10 items-center"
        >
          <SignIn size={40} />
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
      <div className="lg:hidden">
        <img
          className="transition ease-in duration-200 hover:bg-darkPurple p-3 rounded-lg cursor-pointer"
          src="../assets/images/SmallPunkyMonkeyLogo.webp"
          alt=""
        />
      </div>
    </div>
  );
}
