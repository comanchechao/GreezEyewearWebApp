import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  House,
  Alien,
  Eyeglasses,
  Sunglasses,
  Eye,
  List,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function PhoneDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <div>
      <>
        <button
          ref={btnRef}
          onClick={onOpen}
          className="text-mainWhite font-extrabold flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 items-center"
        >
          <List size={35} />
        </button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton className="text-mainWhite" />
            <div className="bg-CoolGray-900 h-full w-full">
              {/* <DrawerHeader>Create your account</DrawerHeader> */}

              <DrawerBody>
                <div className=" w-full h-full text-3xl flex justify-start items-center flex-col bg-CoolGray-900 p-10">
                  <Link
                    to={"/"}
                    className="text-mainWhite font-extrabold flex transition   ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 items-center"
                  >
                    <House size={35} />
                    <h1 className="pl-2 font-extralight  flex">Home</h1>
                  </Link>
                  <Link
                    to={"/ShoppingPage"}
                    className="text-mainWhite font-extrabold  flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 items-centerr"
                  >
                    <Eyeglasses size={35} />
                    <h1 className="pl-2 font-extralight  flex">Eyeglasses</h1>
                  </Link>
                  <Link
                    to={"/ShoppingPage"}
                    className="flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 items-center text-mainWhite"
                  >
                    <Sunglasses size={35} />
                    <h1 className="pl-2 font-extralight  flex  ">Sunglasses</h1>
                  </Link>
                  <Link
                    to={"/ShoppingPage"}
                    className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 items-center"
                  >
                    <Eye size={30} />
                    <h1 className="pl-2 font-extralight  flex ">Lenses</h1>
                  </Link>

                  <Link
                    to={"/admin"}
                    className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 items-center"
                  >
                    <Alien size={35} />
                  </Link>
                  {/* <Link
                    to={"/blogs"}
                    className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 justify-center items-center"
                  >
                    <Copyright size={18} />
                    <h1 className=" font-extralight text-center flex">
                      Premium Brands
                    </h1>
                  </Link>
                  <Link
                    to={"/blogs"}
                    className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 p-2 items-center"
                  >
                    <h1 className=" font-extralight text-mainWhite  ">Blog</h1>
                  </Link> */}
                </div>
              </DrawerBody>

              <DrawerFooter>
                <button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </button>
                <button colorScheme="blue">Save</button>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
}
