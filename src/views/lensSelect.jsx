import Navbar from "../components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function LensSelect() {
  return (
    <div className=" h-auto w-screen overflow-x-hidden bg-CoolGray-800">
      <Navbar></Navbar>
      <div className=" h-auto w-screen pt-28 ">
        <div className="h-full w-full flex flex-col bg-mainCream">
          <div className=" h-14 w-full drop-shadow-lg filter flex items-center px-7  text-lg bg-mainCream">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <Link to={"/Home"}>
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
                  <BreadcrumbLink>
                    <span className="">Product Detail</span>
                  </BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  <span className="font-black">Select Lens</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
}
