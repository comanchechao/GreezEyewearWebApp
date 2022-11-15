import Navbar from "../components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRef, useEffect } from "react";
import { Package, Truck, Receipt } from "phosphor-react";
import { Link } from "react-router-dom";
import EditableControls from "../components/editableControls";
import gsap from "gsap";

import { useTranslation, Trans } from "react-i18next";

export default function Profile() {
  const { t, i18n } = useTranslation();
  const breadCrumbMenu = useRef();
  const mainBg = useRef();

  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(breadCrumbMenu.current, {
      opacity: "0",
      y: -10,
      duration: 0.5,
      delay: 1,
    });
    tl.from(mainBg.current, {
      opacity: "0",
      x: -10,
      duration: 0.4,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-auto w-screen text-right bg-CoolGray-800 overflow-x-hidden">
      <Navbar></Navbar>
      <div className=" w-screen h-auto flex flex-col items-center  pt-20">
        <div
          ref={breadCrumbMenu}
          className=" h-14 w-full drop-shadow-lg filter  mb-6 flex justify-end    items-center lg:px-7  text-lg bg-mainCream"
        >
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <Link to={"/"}>
                <BreadcrumbLink>Home</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>
                <span className="font-black">Profile</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div
          ref={mainBg}
          className="h-auto  w-screen lg:px-20 mb-7 text-CoolGray-900"
        >
          <div className="h-full w-full bg-mainWhite">
            <h1 className="text-3xl my-5 bg-CoolGray-900 text-mainWhite px-9 py-4">
              سفارش ها
            </h1>
            <div className="w-full h-auto lg:h-60 items-center flex lg:flex-row flex-col lg:space-y-0 space-y-9 lg:space-x-28 px-10 lg:px-40 py-6">
              <div className=" h-full w-full lg:p-5 p-24 flex flex-col space-y-4 items-center justify-center bg-CoolGray-900 rounded-sm transition ease-in duration-300 hover:bg-mainBlue active:bg-mainBlue text-mainWhite hover:text-CoolGray-900 cursor-pointer transform hover:scale-95 active:scale-95">
                <h1 className="text-3xl  font-bold text-center">
                  تحویل داده شده
                </h1>
                <Receipt size={30} weight="fill" />
              </div>
              <div className=" h-full w-full lg:p-5 p-24 flex flex-col space-y-4 items-center justify-center bg-CoolGray-900 rounded-sm transition ease-in duration-300 hover:bg-mainBlue active:bg-mainBlue text-mainWhite hover:text-CoolGray-900 cursor-pointer transform hover:scale-95 active:scale-95">
                <h1 className="text-3xl  font-bold text-center">فرستاده شده</h1>
                <Truck size={30} weight="fill" />
              </div>
              <div className=" h-full w-full lg:p-5 p-24 flex flex-col space-y-4 items-center justify-center bg-CoolGray-900 rounded-sm transition ease-in duration-300 hover:bg-mainBlue active:bg-mainBlue text-mainWhite hover:text-CoolGray-900 cursor-pointer transform hover:scale-95 active:scale-95">
                <h1 className="text-3xl  font-bold text-center">
                  درحال پردازش
                </h1>
                <Package size={30} weight="fill" />
              </div>
            </div>
            <h1 className="text-3xl my-5 bg-CoolGray-900 text-mainWhite px-9 py-4">
              اطلاعات ارسال
            </h1>
            <div className="w-full h-36 flex items-center justify-center ">
              <EditableControls></EditableControls>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
