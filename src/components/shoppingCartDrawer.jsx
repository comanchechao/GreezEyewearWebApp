import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ShoppingBag } from "phosphor-react";
export default function shoppingCartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray-900 lg:hover:text-CoolGray-900 lg:p-6 items-center"
      >
        <ShoppingBag size={32} />
        {/* <h1 className="text-2xl mr-2">عضویت</h1> */}
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="bg-mainWhite h-full w-full">
            <DrawerCloseButton />
            <DrawerHeader>
              <div className="  w-full h-full text-CoolGray-900 text-3xl py-9 font-black underline-offset-8 underline">
                My Cart
              </div>
            </DrawerHeader>

            <DrawerBody>
              <div className="bg-CoolGray-900 w-full h-full z-20">
                sdfasdfklas
              </div>
            </DrawerBody>

            <DrawerFooter>
              <button>Save</button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
