import Navbar from "../components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import ProgressMenu from "../components/progressMenu";
import { useEffect } from "react";
export default function LensSelect() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" h-auto w-screen overflow-x-hidden bg-CoolGray-800">
      <Navbar></Navbar>
      <div className=" h-auto w-screen pt-20 ">
        <div className="h-full w-full flex flex-col items-center justify-center bg-mainCream">
          <div className=" h-14 w-full drop-shadow-lg filter flex items-center px-7  text-lg bg-white">
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

              <BreadcrumbItem isCurrentPage>
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
          <div className="w-screen h-screen flex">
            <div className="h-full w-1/2 px-8 py-7 bg-mainWhite">
              <ProgressMenu></ProgressMenu>
            </div>
            <div className="h-full w-1/2 bg-CoolGray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
