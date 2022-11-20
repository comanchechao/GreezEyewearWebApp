import Navbar from "../components/navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  RadioGroup,
  Radio,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { supabase } from "../supabaseClient";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { size, sizeActions, colorActions } from "../Store/shop/orderDetail";

export default function ProductDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [sizeValue, setSizeValue] = useState();
  const [loading, setLoading] = useState(false);

  // this value was set in homeDIR/Store/shop/orderDetail.js and dispatch do change state data

  const size = useSelector((state) => {
    return state.size.size;
  });

  const dispatch = useDispatch();

  // value of color in HomeDIR/store/shop/orderDetail.js and despatch do change state data

  const color = useSelector((state) => {
    return state.color.color;
  });

  // getting product images and setting them in an array

  const [images, setImages] = useState([]);

  const [firstUrl, setFirstUrl] = useState();
  const [secondUrl, setSecondUrl] = useState();
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 5000);
  }, []);

  const downloadFirstImage = async () => {
    if (firstUrl) {
      try {
        setLoading(true);
        const { data, error } = await supabase.storage
          .from("product-images")
          .download(firstUrl);

        if (error) {
          throw error;
        }
        const url = URL.createObjectURL(data);
        setFirstImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      } finally {
        setLoading(false);
        images.push(firstImage);
      }
    }
  };

  // image 2 download function

  const downloadSecondImage = async () => {
    if (secondUrl) {
      try {
        setLoading(true);
        const { data, error } = await supabase.storage
          .from("product-images")
          .download(secondUrl);

        if (error) {
          throw error;
        }
        const url = URL.createObjectURL(data);
        setSecondImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      } finally {
        setLoading(false);
        images.push(secondImage);
      }
    }
  };

  useEffect(() => {
    console.log(firstUrl);
    if (delay === false) {
      downloadFirstImage();
      downloadSecondImage();
    }
  }, [delay]);
  // getting product detail

  const getProduct = async () => {
    try {
      const { data, error } = await supabase
        .from("Products")
        .select()
        .eq("id", id);
      if (error) throw error;
      setProduct(data[0]);
      setFirstUrl(data[0].firstImage);
      setSecondUrl(data[0].secondImage);
    } catch (error) {
    } finally {
      downloadFirstImage();
      downloadSecondImage();
    }
  };

  const breadCrumbMenu = useRef();
  const productBg = useRef();

  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(breadCrumbMenu.current, {
      opacity: "0",
      y: -10,
      duration: 0.5,
      delay: 1,
    });
    tl.from(productBg.current, {
      opacity: "0",
      x: -10,
      duration: 0.4,
    });
    window.scrollTo(0, 0);
    getProduct();
  }, []);

  const [value, setValue] = useState("1");
  const [value2, setValue2] = useState("1");

  return (
    <div className=" h-auto w-screen overflow-x-hidden bg-CoolGray-900">
      <Navbar></Navbar>
      <div className=" h-auto w-screen pt-20 ">
        <div className="h-full w-full flex flex-col bg-CoolGray-800">
          <div
            ref={breadCrumbMenu}
            className=" h-14 w-full drop-shadow-lg filter flex items-center px-7  text-lg bg-mainCream"
          >
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <Link to={"/"}>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={"/ShoppingPage"}>
                  <BreadcrumbLink>Eyeglasses</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  <span className="font-black">{product.Title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div
            ref={productBg}
            className=" h-auto lg:h-screen w-full flex  lg:px-32 my-10 flex-col lg:space-x-4 lg:flex-row items-center"
          >
            <div className=" h-full w-screen lg:w-2/4  bg-gray-100 flex items-center flex-col p-20 space-y-10">
              <div className="flex flex-col items-start text-left">
                <h1 className="text-6xl text-CoolGray-900 font-black p-1  hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  {product.Title}
                </h1>
                <h2 className=" text-lg p-1 text-CoolGray-500 hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
                  Rectangle Gray Brown Eyeglasses
                </h2>
              </div>
              <h3 className=" text-3xl font-black">
                ${product.Price}{" "}
                <p className="text-black bg-red-500">
                  {color}
                  {size}
                </p>
              </h3>
              <div className="h-full w-full flex flex-col space-y-2 items-center">
                <h2 className=" text-2xl font-black">{t("selectColors")} </h2>
                <RadioGroup
                  colorScheme="gray"
                  onChange={setValue}
                  value={value}
                >
                  <Stack direction="row">
                    <Radio
                      size="lg"
                      className=" bg-mainYellow p-3"
                      value="yellow"
                      onChange={(e) =>
                        dispatch(colorActions.setColor(e.target.value))
                      }
                    ></Radio>

                    <Radio
                      size="lg"
                      className=" bg-blue-700 p-3"
                      value="blue"
                      onChange={(e) =>
                        dispatch(colorActions.setColor(e.target.value))
                      }
                    ></Radio>

                    <Radio
                      size="lg"
                      className=" bg-red-700 p-3"
                      value="red"
                      onChange={(e) =>
                        dispatch(colorActions.setColor(e.target.value))
                      }
                    ></Radio>
                    <Radio
                      size="lg"
                      className=" bg-green-700 p-3"
                      value="green"
                      onChange={(e) =>
                        dispatch(colorActions.setColor(e.target.value))
                      }
                    ></Radio>
                    <Radio
                      size="lg"
                      className=" bg-purple-700 p-3"
                      value="purple"
                      onChange={(e) =>
                        dispatch(colorActions.setColor(e.target.value))
                      }
                    ></Radio>
                    <Radio
                      size="lg"
                      className=" bg-pink-700 p-3"
                      value="pink"
                      onChange={(e) =>
                        dispatch(colorActions.setColor(e.target.value))
                      }
                    ></Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div className="h-full w-full flex flex-col space-y-2 items-center">
                <h2 className=" text-2xl font-black">{t("selectSize")} </h2>
                <RadioGroup
                  colorScheme="gray"
                  onChange={setValue2}
                  value={value2}
                >
                  <Stack
                    colorScheme="purple"
                    direction="row"
                    className="flex items-center justify-center"
                  >
                    <Switch
                      onChange={(e) => {
                        if (size !== "md") {
                          dispatch(sizeActions.setSize("md"));
                          console.log(e.target.value);
                        } else {
                          dispatch(sizeActions.setSize(""));
                        }
                      }}
                      size="lg"
                    />
                    <span className=" border-2 border-mainWhite text-CoolGray-900 font-black w-10 h-10 flex items-center justify-center rounded-sm text-2xl">
                      M
                    </span>
                    <Switch
                      onChange={(e) => {
                        if (size !== "sm") {
                          dispatch(sizeActions.setSize("sm"));
                          console.log(e.target.value);
                        } else {
                          dispatch(sizeActions.setSize(""));
                        }
                      }}
                      size="lg"
                    />
                    <span className=" border-2 border-mainWhite text-CoolGray-900 font-black w-10 h-10 flex items-center justify-center rounded-sm text-2xl">
                      S
                    </span>
                    <Switch
                      onChange={(e) => {
                        if (size !== "lg") {
                          dispatch(sizeActions.setSize("lg"));
                          console.log(e.target.value);
                        } else {
                          dispatch(sizeActions.setSize(""));
                        }
                      }}
                      size="lg"
                    />
                    <span className=" border-2 border-mainWhite text-CoolGray-900 font-black w-10 h-10 flex items-center justify-center rounded-sm text-2xl">
                      L
                    </span>
                  </Stack>
                </RadioGroup>
              </div>
              <Link to={`/lensSelect/${product.id}`}>
                <button
                  className=" w-full px-9 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-2 text-2xl my-3 bg-mainWhite   rounded-full  "
                  type="submit"
                >
                  {t("selectLens")}{" "}
                </button>
              </Link>
            </div>
            <div className=" w-screen lg:w-2/4">
              <Slider
                dots={true}
                autoplay="true"
                pauseOnDotsHover="true"
                adaptiveHeight={true}
                arrows={false}
              >
                <InnerImageZoom
                  src={firstImage}
                  zoomSrc={firstImage}
                  fullscreenOnMobile={true}
                />
                <InnerImageZoom
                  src={secondImage}
                  zoomSrc={secondImage}
                  fullscreenOnMobile={true}
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
