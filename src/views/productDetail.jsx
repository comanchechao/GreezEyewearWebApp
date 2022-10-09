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
export default function ProductDetail() {
  const [value, setValue] = useState("1");
  const [value2, setValue2] = useState("1");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" h-auto w-screen overflow-x-hidden bg-CoolGray-900">
      <Navbar></Navbar>
      <div className=" h-auto w-screen pt-28 ">
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
                  <span className="font-black">Rectangle Eyeglasses</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className=" h-full w-full flex  px-32 my-10 items-center">
            <div className=" h-full w-2/4 bg-CoolGray-900 py-36 px-16">
              <Slider dots={true} autoplay="true" pauseOnDotsHover="true">
                <InnerImageZoom
                  src="https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1280"
                  zoomSrc="https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1600"
                  fullscreenOnMobile={true}
                />
                <InnerImageZoom
                  src="https://images.unsplash.com/photo-1621605817954-50992699848a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1280"
                  zoomSrc="https://images.unsplash.com/photo-1621605817954-50992699848a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1600"
                  fullscreenOnMobile={true}
                />
                <InnerImageZoom
                  src="https://images.unsplash.com/photo-1571333249291-a6ec5e134a21?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1280"
                  zoomSrc="https://images.unsplash.com/photo-1571333249291-a6ec5e134a21?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1600"
                  fullscreenOnMobile={true}
                />
              </Slider>
            </div>
            <div className=" h-full w-2/4 bg-gray-100 flex items-center flex-col p-28 space-y-10">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-black">Botanist</h1>
                <h2 className=" text-2xl">Rectangle Gray Brown Eyeglasses</h2>
              </div>
              <h3 className=" text-3xl font-black"> $35 </h3>
              <div className="h-full w-full flex flex-col space-y-2 items-center">
                <h2 className=" text-2xl font-black">Select Colors: </h2>
                <RadioGroup
                  colorScheme="gray"
                  onChange={setValue}
                  value={value}
                >
                  <Stack direction="row">
                    <Radio
                      size="lg"
                      className=" bg-mainYellow p-3"
                      value="1"
                    ></Radio>

                    <Radio
                      size="lg"
                      className=" bg-blue-700 p-3"
                      value="2"
                    ></Radio>

                    <Radio
                      size="lg"
                      className=" bg-red-700 p-3"
                      value="3"
                    ></Radio>
                    <Radio
                      size="lg"
                      className=" bg-green-700 p-3"
                      value="4"
                    ></Radio>
                    <Radio
                      size="lg"
                      className=" bg-purple-700 p-3"
                      value="5"
                    ></Radio>
                    <Radio
                      size="lg"
                      className=" bg-pink-700 p-3"
                      value="6"
                    ></Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div className="h-full w-full flex flex-col space-y-2 items-center">
                <h2 className=" text-2xl font-black">Select Size: </h2>
                <RadioGroup
                  colorScheme="gray"
                  onChange={setValue2}
                  value={value2}
                >
                  <Stack colorScheme="purple" direction="row">
                    <Switch size="lg" />
                    <Switch size="lg" />
                    <Switch size="lg"></Switch>
                  </Stack>
                </RadioGroup>
              </div>
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