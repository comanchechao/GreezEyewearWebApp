import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import shapeRectangle from "../assets/images/shapeRectangle.webp";
import shapeSquare from "../assets/images/shapeSquare.webp";
import shapeAviator from "../assets/images/shapeAviator.webp";
import shapeOval from "../assets/images/shapeOval.webp";
import shapeRound from "../assets/images/shapeRound.webp";
import shapeCat from "../assets/images/shapeCat.webp";
import shapePolygon from "../assets/images/shapePolygon.webp";
import shapeHorn from "../assets/images/shapeHorn.webp";
import Rimless from "../assets/images/Rimless.webp";
import FullRim from "../assets/images/FullRim.webp";
import SemiRimless from "../assets/images/semiRimless.webp";
import ShoppingMenuModal from "./shoppingPageModal";
import { useTranslation } from "react-i18next";




export default function ShoppingMenu() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const { t, i18n } = useTranslation();

  const [thisisshape , setthisisshape ] = useState("Shape")

  // Genders
  const [unisex, setUnisex] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [kids, setKids] = useState(false);

  // shapes

  const [Rectangle, setRectangle] = useState(false);
  const [Square, setSquare] = useState(false);
  const [Round, setRound] = useState(false);
  const [Aviator, setAviator] = useState(false);
  const [Oval, setOval] = useState(false);
  const [CatEye, setCatEye] = useState(false);
  const [Polygon, setPolygon] = useState(false);
  const [Horn, setHorn] = useState(false);

  // Material

  const [Acetate, setAcetate] = useState(false);
  const [TR, setTR] = useState(false);
  const [MemoryPlastic, setMemoryPlastic] = useState(false);
  const [UItem, setUItem] = useState(false);
  const [SilicaGel, setSilicaGel] = useState(false);
  const [Metal, setMetal] = useState(false);
  const [MemoryMetal, setMemoryMetal] = useState(false);
  const [Titanium, setTitium] = useState(false);
  const [MixedMaterial, setMixedMaterial] = useState(false);

  // size

  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);

  // Rims

  const [fullRim, setFullRim] = useState(false);
  const [semiRim, setSemiRim] = useState(false);
  const [rimless, setRimless] = useState(false);

  

  useEffect(() => {
    console.log(
      "male:",
      male,
      "unisex",
      unisex,
      "small ",
      small,
      "ACetate: ",
      Acetate,
      "TR:",
      TR,
      "memory plastic",
      MemoryPlastic,
      "Silicagel",
      SilicaGel
    );
  });

  return (
    <div className=" h-24 w-full z-20 flex justify-start lg:px-0 px-9 lg:justify-center py-7 lg:space-x-4  items-center text-2xl">
      <div className="flex items-center space-x-2  ">
        <div className="lg:hidden flex">
          <ShoppingMenuModal className="  " />
        </div>
        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite flex"
            minH="48px"
            px={4}
            py={0}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            <span>{t("price")}</span>
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem className="flex flex-col px-7 text-center">
              <span className="text-2xl px-28">Price Range</span>

              <div className="h-full w-full flex space-x-3 mx-6">
                <span className="text-lg ">{minPrice}</span>
                <RangeSlider
                  colorScheme="blue"
                  step={20}
                  aria-label={["min", "max"]}
                  max={1000}
                  defaultValue={[0, 300]}
                  onChangeEnd={(val) =>
                    setMinPrice(val[0]) & setMaxPrice(val[1])
                  }
                  className="mx-7"
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>

                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <span className=" text-lg ">{maxPrice}</span>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="   h-full hidden lg:flex lg:space-x-4">
        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite"
            minH="48px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            {t("brands")}

            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Ray-ban (12)</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Mascot (40)</span>
              </Checkbox>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite"
            minH="48px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            {t("genders")}

            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Checkbox
                onChange={(e) => {
                  e.preventDefault;
                  setUnisex((prev) => !prev);
                }}
                size="lg"
              >
                <span className="text-2xl">Unisex</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox
                onChange={(e) => {
                  e.preventDefault;
                  setFemale((prev) => !prev);
                }}
                size="lg"
              >
                <span className="text-2xl">Women</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox
                onChange={() => {
                  setMale((prev) => !prev);
                  console.log(male);
                }}
                size="lg"
              >
                <span className="text-2xl">Men</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox
                onChange={(e) => {
                  e.preventDefault;
                  setKids((prev) => !prev);
                }}
                size="lg"
              >
                <span className="text-2xl">Kids</span>
              </Checkbox>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite"
            minH="48px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            {t(thisisshape)}

            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setRectangle((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapeRectangle}
                      alt=""
                    />
                    <span className="text-2xl">Rectangle</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setSquare((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapeSquare}
                      alt=""
                    />
                    <span className="text-2xl">Square</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setAviator((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapeAviator}
                      alt=""
                    />
                    <span className="text-2xl">Aviator</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setOval((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapeOval}
                      alt=""
                    />
                    <span className="text-2xl">Oval</span>
                  </div>
                </Checkbox>
              </MenuItem>
            </div>
            <div>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setRound((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapeRound}
                      alt=""
                    />
                    <span className="text-2xl">Round</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setCatEye((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapeCat}
                      alt=""
                    />
                    <span className="text-2xl">Cat-eye</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setPolygon((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapePolygon}
                      alt=""
                    />
                    <span className="text-2xl">Polygon</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setHorn((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={shapeHorn}
                      alt=""
                    />
                    <span className="text-2xl">Horn</span>
                  </div>
                </Checkbox>
              </MenuItem>
            </div>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite"
            minH="48px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            {t("material")}

            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div className=" h-full w-full  ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3">
                Plastic
              </h1>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setAcetate((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Acetate</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setTR((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">TR</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setMemoryPlastic((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Memory Plastic</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setUItem((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Ultem</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setSilicaGel((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Silica Gel</span>
                </Checkbox>
              </MenuItem>
            </div>
            <div className=" h-full w-full  ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3">
                Metal
              </h1>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setMetal((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Metal</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setMemoryMetal((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Memory Metal</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setTitium((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Titanium</span>
                </Checkbox>
              </MenuItem>
            </div>
            <div className=" h-full w-full ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3 ">
                Mixed Material
              </h1>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setMixedMaterial((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl text-center">Mixed Materials</span>
                </Checkbox>
              </MenuItem>
            </div>
          </MenuList>
        </Menu>

        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite"
            minH="48px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            {t("size")}

            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div className=" h-full w-full  ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3">
                Total Width
              </h1>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setSmall((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Small(129mm)</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setMedium((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Medium(129mm to 135mm)</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setLarge((prev) => !prev);
                  }}
                  size="lg"
                >
                  <span className="text-xl">Large(135mm)</span>
                </Checkbox>
              </MenuItem>
            </div>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite"
            minH="48px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            {t("rim")}
            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setFullRim((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img className="object-contain w-12" src={FullRim} alt="" />
                    <span className="text-2xl">Full-Rim</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setSemiRim((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img
                      className="object-contain w-12"
                      src={SemiRimless}
                      alt=""
                    />
                    <span className="text-2xl">Semi-Rimless</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  onChange={(e) => {
                    e.preventDefault;
                    setRimless((prev) => !prev);
                  }}
                  size="lg"
                >
                  <div className="flex space-x-3">
                    <img className="object-contain w-12" src={Rimless} alt="" />
                    <span className="text-2xl">Rimless</span>
                  </div>
                </Checkbox>
              </MenuItem>
            </div>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton
            className=" bg-CoolGray-900 text-mainWhite"
            minH="48px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="sm"
            _hover={{ bg: "gray.600" }}
            _expanded={{ bg: "blue.400" }}
          >
            {t("feature")}
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Adjustable Nose Pads</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Lightweight</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Bifocal</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">For Wide Face</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">For Small Face</span>
              </Checkbox>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
