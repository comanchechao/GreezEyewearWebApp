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
  Checkbox,
} from "@chakra-ui/react";
import CartImage from "../components/cartImage";

import { Cardholder } from "phosphor-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import gsap from "gsap";
import sampleEyeglass from "../assets/images/sampleEyeglass.webp";
import { useTranslation, Trans } from "react-i18next";
import cartImage from "../components/cartImage";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/shop/shoppingCart";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const { t, i18n } = useTranslation();
  const breadCrumbMenu = useRef();
  const mainBg = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.getTotalPrice());
  }, []);

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
          className=" h-14 w-full drop-shadow-lg filter   mb-6 flex justify-end items-center px-7  text-lg bg-mainCream"
        >
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>
                <span className="font-black"> {t("checkout")}</span>
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
              <Link to={"/lensSelect"}>
                <BreadcrumbLink>
                  <span className=""> {t("lensSelect")}</span>
                </BreadcrumbLink>
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
          className="h-auto  w-screen lg:px-20 mb-7 text-CoolGray-900"
        >
          <div className="h-full w-full pb-9 bg-mainCream ">
            <h1 className="text-5xl my-5 bg-CoolGray-900 text-mainWhite px-9 py-7">
              {t("checkout")}
            </h1>
            <div className="h-full w-full lg:px-11 px-3 lg:space-y-0 space-y-5  flex item-center justify-center lg:space-x-4  lg:flex-row flex-col">
              <div className="flex flex-col  justify-around">
                {cart.map((item) => {
                  return (
                    <div className=" h-36 lg:w-96 w-full  bg-white border-2 border-mainWhite  shadow-xl flex justify-between items-center p-10">
                      <div className="bg-mainBlue">
                        <CartImage
                          cartImage={item.product.firstImage}
                        ></CartImage>
                      </div>
                      <div className="flex  items-center flex-col justify-center">
                        <h1 className="font-black text-3xl  text-CoolGray-900">
                          {item.product.Title}
                        </h1>
                        <h2 className="font-light text-CoolGray-700 text-lg">
                          price: {item.product.Price}
                        </h2>
                      </div>
                      <div>
                        <span className="justify-self-end">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <button className="px-12 flex items-center transition ease-in duration-300 border-2 border-dashed border-CoolGray-900 hover:bg-mainBlue py-2 text-lg lg:text-2xl my-6 bg-mainCream   rounded-full  ">
                  {t("proceed")}
                  <Cardholder className="mx-2" size={40} weight="fill" />
                </button>
                <div>
                  <button className="px-12 space-x-2 flex items-around  transition ease-in duration-300 border-2 border-dashed border-CoolGray-900 bg-mainBlue py-2 text-lg lg:text-2xl my-6 bg-mainCream   rounded-full  ">
                    <p> {total}</p>
                    <p>تومان</p>
                  </button>
                </div>
              </div>

              <div className=" text-right h-72 w-full lg:w-96 bg-white border-2 border-mainWhite  shadow-xl flex items-end flex-col lg:mr-20 px-8">
                <h1 className="text-3xl font-black my-4 w-full">
                  {t("shippingMethod")}
                </h1>
                <Checkbox size="lg">
                  <span className="text-2xl">{t("express")}</span>
                </Checkbox>
                <Checkbox size="lg">
                  <span className="text-2xl">{t("post")}</span>
                </Checkbox>
              </div>

              <div className=" h-carousel w-full lg:w-96 bg-white border-2 border-mainWhite  shadow-xl flex items-end flex-col px-8">
                <div className="h-full w-full my-2 space-y-3">
                  <h1 className="text-3xl font-black my-2">
                    {t("shippingAddress")}
                  </h1>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-lg font-light">{t("email")}</span>
                    </FormLabel>
                    <Input placeholder="ایمیلتون رو وارد کنید" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-lg font-light">
                        {t("fullName")}
                      </span>
                    </FormLabel>
                    <Input placeholder="اسم کامل" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <span className="text-lg font-light">{t("country")}</span>
                    </FormLabel>
                    <Select placeholder="شهر">
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-lg font-light">{t("address")}</span>
                    </FormLabel>
                    <Input placeholder="آدرس" />
                  </FormControl>
                  <div className="flex space-x-3">
                    <FormControl isRequired>
                      <FormLabel>
                        <span className="text-lg font-light">{t("city")}</span>
                      </FormLabel>
                      <Input placeholder="شهر" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        <span className="text-lg font-light">{t("state")}</span>
                      </FormLabel>
                      <Select placeholder="استان">
                        <option>آذربایجان شرقی</option>
                        <option>آذربایجان غربی</option>
                      </Select>
                    </FormControl>
                  </div>
                  <FormControl isRequired>
                    <FormLabel>
                      <span className="text-lg font-light">{t("phone")}</span>
                    </FormLabel>
                    <Input placeholder="شماره ی تلفن" />
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
