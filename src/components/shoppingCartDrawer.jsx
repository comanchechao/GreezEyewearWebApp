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
import CartImage from "./cartImage";

import { ShoppingBag } from "phosphor-react";
import sampleEyeglass from "../assets/images/sampleEyeglass.webp";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function shoppingCartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { t, i18n } = useTranslation();

  const cart = useSelector((state) => state.cart.cart);

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
              <div className="  w-full h-full text-CoolGray-900 text-3xl py-9 font-black  ">
                My Cart
              </div>
            </DrawerHeader>

            <DrawerBody>
              {cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full my-3 h-24 bg-CoolGray-800 px-2 space-x-3 rounded-sm  flex justify-between items-center"
                  >
                    <div className="">
                      <CartImage
                        cartImage={item.product.firstImage}
                      ></CartImage>
                    </div>
                    <div className="flex  items-center flex-col justify-center">
                      <h1 className="font-black text-3xl  text-mainWhite">
                        {item.product.Title}
                      </h1>
                      <h2 className="font-light text-mainCream text-lg">
                        price: {item.product.Price}
                        quantity: {item.quantity}
                      </h2>
                    </div>
                    <div>
                      <span className="justify-self-end">X1</span>
                    </div>
                  </div>
                );
              })}
            </DrawerBody>

            <DrawerFooter>
              <button
                className=" px-8 transition ease-in duration-300  hover:bg-mainBlue py-2 text-2xl my-3 hover:text-CoolGray-900 bg-mainWhite text-CoolGray-900  rounded-sm border-2 border-dashed border-CoolGray-900"
                type="submit"
              >
                {t("checkout")}{" "}
              </button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
