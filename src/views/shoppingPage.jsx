import Navbar from "../components/navbar";
import { useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import shapeRectangle from "../assets/images/shapeRectangle.webp";
import shapeSquare from "../assets/images/shapeSquare.webp";
import shapeAviator from "../assets/images/shapeAviator.webp";
import shapeOval from "../assets/images/shapeOval.webp";
import shapeRound from "../assets/images/shapeRound.webp";
import shapeCat from "../assets/images/shapeCat.webp";
import shapePolygon from "../assets/images/shapePolygon.webp";
import shapeHorn from "../assets/images/shapeHorn.webp";

export default function shoppingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <Navbar />
      <div className="h-screen w-screen pt-40 lg:px-10 flex items-center justify-center bg-CoolGray-900">
        <div className=" h-screen w-screen bg-mainWhite">
          <div className=" h-32 w-full bg-mainCream flex justify-start space-x-3 pl-6 items-center text-2xl">
            <Menu closeOnSelect={false}>
              <MenuButton
                className=" bg-mainWhite "
                minH="48px"
                px={4}
                py={2}
                isLazy={true}
                transition="all 0.2s"
                borderRadius="sm"
                _hover={{ bg: "gray.400" }}
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
                className=" bg-mainWhite "
                minH="48px"
                px={4}
                py={2}
                isLazy={true}
                transition="all 0.2s"
                borderRadius="sm"
                _hover={{ bg: "gray.400" }}
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
                className=" bg-mainWhite "
                minH="48px"
                px={4}
                py={2}
                isLazy={true}
                transition="all 0.2s"
                borderRadius="sm"
                _hover={{ bg: "gray.400" }}
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
          </div>
        </div>
      </div>
    </div>
  );
}
