import Navbar from "../components/navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import gsap from "gsap";

export default function Checkout() {
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
    <div className="h-auto w-screen bg-CoolGray-800 overflow-x-hidden">
      <Navbar></Navbar>
      <div className=" w-screen h-auto flex flex-col items-center  pt-20">
        <div
          ref={breadCrumbMenu}
          className=" h-14 w-full drop-shadow-lg filter  mb-6 flex items-center px-7  text-lg bg-mainCream"
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
            <BreadcrumbItem>
              <Link to={"/lensSelect"}>
                <BreadcrumbLink>Select Lens</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>
                <span className="font-black">Checkout</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div
          ref={mainBg}
          className="h-auto  w-screen px-20 mb-7 text-CoolGray-900"
        >
          <div className="h-full w-full pb-9 bg-mainCream ">
            <h1 className="text-5xl font-black px-9 py-7">Checkout</h1>
            <div className="h-full w-full px-11">
              <div className=" h-carousel w-96 bg-white  shadow-xl flex items-start flex-col px-8">
                <div className="h-full w-full my-2 space-y-3">
                  <h1 className="text-2xl font-black my-2">
                    1.Shipping Address
                  </h1>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-xl font-light">Email</span>
                    </FormLabel>
                    <Input placeholder="Enter your Email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-xl font-light">Full name</span>
                    </FormLabel>
                    <Input placeholder="Full Name" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <span className="text-xl font-light">Country</span>
                    </FormLabel>
                    <Select placeholder="Select Country">
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-xl font-light">Address</span>
                    </FormLabel>
                    <Input placeholder="Address" />
                  </FormControl>
                  <div className="flex space-x-3">
                    <FormControl isRequired>
                      <FormLabel>
                        <span className="text-xl font-light">City</span>
                      </FormLabel>
                      <Input placeholder="City" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        <span className="text-xl font-light">
                          State/Province
                        </span>
                      </FormLabel>
                      <Select placeholder="Select State">
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                      </Select>
                    </FormControl>
                  </div>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-xl font-light">Phone</span>
                    </FormLabel>
                    <Input placeholder="Enter your phone number" />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
