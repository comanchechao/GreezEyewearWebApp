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
import { useState } from "react";
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

export default function ShoppingMenu() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  return (
    <div className=" h-24 w-full z-20 flex justify-start lg:px-0 px-9 lg:justify-center py-7  items-center text-2xl">
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
            <span>Price</span>
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
      <div className="   h-full hidden lg:flex">
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
            Brands
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
            Genders
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Unisex</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Women</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
                <span className="text-2xl">Men</span>
              </Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox size="lg">
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
            Shape
            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div>
              <MenuItem>
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
            Material
            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div className=" h-full w-full  ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3">
                Plastic
              </h1>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Acetate</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">TR</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Memory Plastic</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Ultem</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Silica Gel</span>
                </Checkbox>
              </MenuItem>
            </div>
            <div className=" h-full w-full  ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3">
                Metal
              </h1>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Metal</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Memory Metal</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Titanium</span>
                </Checkbox>
              </MenuItem>
            </div>
            <div className=" h-full w-full ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3 ">
                Mixed Material
              </h1>
              <MenuItem>
                <Checkbox size="lg">
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
            Size
            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div className=" h-full w-full  ">
              <h1 className="text-2xl font-black text-CoolGray-900 p-3">
                Total Width
              </h1>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Small(129mm)</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
                  <span className="text-xl">Medium(129mm to 135mm)</span>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
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
            Rim
            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div>
              <MenuItem>
                <Checkbox size="lg">
                  <div className="flex space-x-3">
                    <img className="object-contain w-12" src={FullRim} alt="" />
                    <span className="text-2xl">Full-Rim</span>
                  </div>
                </Checkbox>
              </MenuItem>
              <MenuItem>
                <Checkbox size="lg">
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
                <Checkbox size="lg">
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
            Feature
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
