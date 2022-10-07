import Navbar from "../components/navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
export default function ProductDetail() {
  return (
    <div className=" h-auto w-screen overflow-x-hidden bg-CoolGray-900">
      <Navbar></Navbar>
      <div className=" h-screen w-screen pt-28 ">
        <div className="h-full w-full flex flex-col bg-mainCream">
          <div className=" h-14 w-full drop-shadow-lg filter flex items-center px-7  text-lg bg-mainCream">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="shoppingPage">Eyeglasses</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  <span className="underline-offset-8 underline">
                    Rectangle Eyeglasses
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className=" h-full w-full flex  px-44 mt-6">
            <div className=" h-full w-full bg-gray-100"></div>
            <div className=" h-full w-full bg-gray-100 flex items-center flex-col p-28 space-y-10">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-black">Botanist</h1>
                <h2 className=" text-2xl">Rectangle Gray Brown Eyeglasses</h2>
              </div>
              <h3 className=" text-3xl font-black"> $35 </h3>
              <button
                className="px-20 transition ease-in duration-300 border-l-8 border-mainWhite hover:bg-mainWhite py-2 text-3xl my-3 bg-mainBlue   rounded-full  "
                type="submit"
              >
                Select Lenses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
