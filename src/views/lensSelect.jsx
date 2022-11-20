import Navbar from "../components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import ProgressMenu from "../components/progressMenu";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import lensSelectPic from "../assets/images/lensSelectPic.webp";
import { ShoppingBagOpen } from "phosphor-react";
import { useTranslation, Trans } from "react-i18next";

export default function LensSelect() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
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
    <div className=" h-auto w-screen overflow-x-hidden bg-CoolGray-800">
      <Navbar></Navbar>
      <div className=" h-auto w-screen pt-20 ">
        <div className="h-full w-full flex flex-col items-center justify-center bg-CoolGray-800">
          <div
            ref={breadCrumbMenu}
            className=" h-14 w-full drop-shadow-lg filter   mb-6 flex justify-end items-center px-7  text-lg bg-mainCream"
          >
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>
                  <span className="font-black"> {t("lensSelect")}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={"/productDetail"}>
                  <BreadcrumbLink> {t("productDetail")}</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to={"/ShoppingPage"}>
                  <BreadcrumbLink> {t("eyeGlasses")}</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to={"/"}>
                  <BreadcrumbLink> {t("home")}</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div
            ref={mainBg}
            className="w-screen h-auto mb-11 flex flex-col lg:flex-row items-center lg:px-24"
          >
            <div className="h-full w-screen lg:px-24  px-14 mx-6  py-7   ">
              <div className="     my-5">
                <h1 className="text-5xl mb-5 text-right bg-CoolGray-900 text-mainWhite px-9 py-7">
                  {t("lensSelect")}
                </h1>
                <ProgressMenu className=""></ProgressMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
