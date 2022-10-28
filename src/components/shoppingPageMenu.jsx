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
import { useState, useEffect, lazy, Suspense } from "react";
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
import { supabase } from "../supabaseClient";
import FilterImage from "./filterImage";

const ShoppingMenuModal = lazy(() => import("./shoppingMenuModal"));

export default function ShoppingMenu() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const { t, i18n } = useTranslation();

  // filters

  const [Genders, setGenders] = useState([]);
  const [Shapes, setShapes] = useState([]);
  const [Sizes, setSizes] = useState([]);
  const [Material, setMaterial] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [Rims, setRims] = useState([]);

  // getting filters add putting them into a fliter array

  const getFilters = () => {
    getBrands();
    getGenders();
    getMaterial();
    getSizes();
    getShapes();
    getRims();
  };

  const getGenders = async () => {
    try {
      const { data, error } = await supabase.from("Genders").select();

      console.log(data);
      setGenders(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const getBrands = async () => {
    try {
      const { data, error } = await supabase.from("Brands").select();

      console.log(data);
      setBrands(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const getShapes = async () => {
    try {
      const { data, error } = await supabase.from("Shapes").select();

      console.log(data);
      setShapes(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const getMaterial = async () => {
    try {
      const { data, error } = await supabase.from("Material").select();

      console.log(data);
      setMaterial(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const getSizes = async () => {
    try {
      const { data, error } = await supabase.from("Sizes").select();

      console.log(data);
      setSizes(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const getRims = async () => {
    try {
      const { data, error } = await supabase.from("Rims").select();

      console.log(data);
      setRims(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getFilters();
  }, []);

  return (
    <div className=" h-24 w-full z-20 flex justify-start lg:px-0 px-9 lg:justify-center py-7 lg:space-x-4  items-center text-2xl">
      <div className="flex items-center space-x-2  ">
        <div className="lg:hidden flex">
          <Suspense>
            <ShoppingMenuModal className="  " />
          </Suspense>
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
            {Brands.map((brand) => {
              return (
                <MenuItem key={brand.id}>
                  <Checkbox size="lg">
                    <span className="text-2xl">{brand.Title}</span>
                  </Checkbox>
                </MenuItem>
              );
            })}
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
            {Genders.map((gender) => {
              return (
                <MenuItem key={gender.id}>
                  <Checkbox
                    onChange={(e) => {
                      e.preventDefault;
                      setUnisex((prev) => !prev);
                    }}
                    size="lg"
                  >
                    <span className="text-2xl">{gender.Title}</span>
                  </Checkbox>
                </MenuItem>
              );
            })}
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
            {t("shape")}

            <ChevronDownIcon />
          </MenuButton>
          <MenuList className="flex">
            <div>
              {Shapes.map((shape) => {
                return (
                  <MenuItem>
                    <Checkbox size="lg">
                      <div className="flex justify-center items-center space-x-3">
                        <FilterImage
                          className="object-contain w-12"
                          filterImage={shape.image}
                          alt=""
                        />
                        <span className="text-2xl">{shape.Title}</span>
                      </div>
                    </Checkbox>
                  </MenuItem>
                );
              })}
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
              {Sizes.map((size) => {
                return (
                  <MenuItem key={size.id}>
                    <Checkbox
                      onChange={(e) => {
                        e.preventDefault;
                        setSmall((prev) => !prev);
                      }}
                      size="lg"
                    >
                      <span className="text-xl">{size.Title}</span>
                    </Checkbox>
                  </MenuItem>
                );
              })}
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
              {Rims.map((rim) => {
                return (
                  <MenuItem>
                    <Checkbox size="lg">
                      <div className="flex justify-center items-center  space-x-3">
                        <FilterImage
                          className="object-contain w-12"
                          filterImage={rim.image}
                          alt=""
                        />
                        <span className="text-2xl">{rim.Title}</span>
                      </div>
                    </Checkbox>
                  </MenuItem>
                );
              })}
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
