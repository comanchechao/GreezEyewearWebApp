import Navbar from "../components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import ProgressMenu from "../components/progressMenu";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import lensSelectPic from "../assets/images/lensSelectPic.webp";
import { ShoppingBagOpen } from "phosphor-react";

export default function LensSelect() {
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
        <div className="h-full w-full flex flex-col items-center justify-center bg-mainCream">
          <div
            ref={breadCrumbMenu}
            className=" h-14 w-full drop-shadow-lg filter   mb-6 flex items-center px-7  text-lg bg-mainWhite"
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

              <BreadcrumbItem>
                <Link to={"/ShoppingPage"}>
                  <BreadcrumbLink>Eyeglasses</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={"/productDetail"}>
                  <BreadcrumbLink>Product Detail</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>
                  <span className="font-black">Select Lens</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div ref={mainBg} className="w-screen h-auto flex">
            <div className="h-full w-3/5 px-8 py-7 bg-mainCream border-2 border-mainWhite mx-5">
              <ProgressMenu></ProgressMenu>
            </div>
            <div className=" h-carousel px-24  w-2/5 bg-mainCream flex justify-center items-center">
              <div className=" bg-white border-2 border-mainWhite h-2/3  flex justify-center  flex-col  p-6 w-full">
                <img className=" object-contain" src={lensSelectPic} alt="" />
                <div className=" w-full  ">
                  <h1 className="text-3xl">Botanist</h1>
                  <div className="flex">
                    <h2 className=" text-2xl text-gray-500">Frame Price: </h2>
                    <h2 className="text-2xl ml-3 text-CoolGray-900 font-black">
                      $29.99
                    </h2>
                  </div>
                  <div className="flex">
                    <h2 className=" text-2xl text-gray-500">Lens Price: </h2>
                    <h2 className="text-2xl ml-3 text-CoolGray-900 font-black">
                      $59.99
                    </h2>
                  </div>
                </div>
                <Link to={"/checkoutPage"}>
                  <button className="px-12 self-center flex items-center space-x-3 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-xl lg:text-2xl my-3 bg-mainCream   rounded-full  ">
                    <span>Add To Cart</span>
                    <ShoppingBagOpen size={30} weight="fill" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
