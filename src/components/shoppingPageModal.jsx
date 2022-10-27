import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
import Rimless from "../assets/images/Rimless.webp";
import FullRim from "../assets/images/FullRim.webp";
import SemiRimless from "../assets/images/semiRimless.webp";
import { Sliders, CaretDown } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import FilterImage from "./filterImage";

export default function ShoppingMenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();
  const [Genders, setGenders] = useState([]);
  const [Shapes, setShapes] = useState([]);
  const [Sizes, setSizes] = useState([]);
  const [Material, setMaterial] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [Rims, setRims] = useState([]);

  const [filters, setFilter] = useState([]);

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
    console.log(filters);
  }, []);

  return (
    <>
      <button
        className=" px-5 flex space-x-2 items-center transition ease-in duration-300 border-l-8 hover:text-CoolGray-900 active:text-CoolGray-900
        hover:bg-mainBlue border-mainBlue border active:bg-mainBlue py-1 text-2xl my-3   text-mainWhite rounded-full"
        onClick={onOpen}
      >
        <span> {t("filters")}</span>
        <Sliders size={32} weight="fill" />
        <CaretDown size={20} weight="fill" />
      </button>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-screen   h-screen bg-CoolGray-900 text-mainWhite">
            <ModalHeader>
              <span className="text-4xl my-7"> {t("choose")}</span>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tabs isFitted>
                <TabList mb="1em">
                  <div className="h-full w-full  flex flex-wrap">
                    <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                      <span className="  text-2xl font-bold">
                        {t("brands")}
                      </span>
                    </Tab>
                    <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                      <span className="  text-2xl font-bold">
                        {t("genders")}
                      </span>
                    </Tab>
                    <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                      <span className="  text-2xl font-bold">{t("shape")}</span>
                    </Tab>
                    <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                      <span className="  text-2xl font-bold">
                        {t("material")}
                      </span>
                    </Tab>

                    <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                      <span className="  text-2xl font-bold">{t("size")}</span>
                    </Tab>
                    <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                      <span className="  text-2xl font-bold">{t("rim")}</span>
                    </Tab>
                    <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                      <span className="  text-2xl font-bold">
                        {t("feature")}
                      </span>
                    </Tab>
                  </div>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col">
                      {Brands.map((brand) => {
                        return (
                          <Checkbox size="lg">
                            <span className="text-3xl">{brand.Title}</span>
                          </Checkbox>
                        );
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col">
                      {Genders.map((gender) => {
                        return (
                          <Checkbox
                            key={gender.id}
                            onChange={(e) => {
                              e.preventDefault();
                              if (filters.indexOf("Unisex") === -1) {
                                filters.push("Unisex");
                              }
                            }}
                            size="lg"
                          >
                            <span className="text-3xl">{gender.Title}</span>
                          </Checkbox>
                        );
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col bg-mainWhite p-6 text-CoolGray-900">
                      {Shapes.map((shape) => {
                        return (
                          <Checkbox size="lg">
                            <div className="flex justify-center items-center space-x-3">
                              <span className="text-3xl">{shape.Title}</span>
                              <FilterImage filterImage={shape.image} />
                            </div>
                          </Checkbox>
                        );
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" h-full w-full  ">
                      <div className="w-full h-full flex flex-col">
                        {Material.map((Mixed) => {
                          return (
                            <Checkbox key={Mixed.id} size="lg">
                              <span className="text-xl">{Mixed.Title}</span>
                            </Checkbox>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col">
                      <div className=" h-full w-full  ">
                        <h1 className="text-3xl font-black text-mainWhite p-3">
                          Total Width
                        </h1>
                        <div className="w-full h-full flex flex-col">
                          {Sizes.map((size) => {
                            return (
                              <Checkbox
                                key={size.id}
                                onChange={(e) => {
                                  e.preventDefault;
                                  setSmall((prev) => !prev);
                                }}
                                size="lg"
                              >
                                <span className="text-2xl">{size.Title}</span>
                              </Checkbox>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col bg-mainWhite text-CoolGray-900 p-4">
                      {Rims.map((rim) => {
                        return (
                          <Checkbox size="lg">
                            <div className="flex jusitify-center items-center space-x-3">
                              <span className="text-3xl">{rim.Title}</span>
                              <FilterImage filterImage={rim.image} alt="" />
                            </div>
                          </Checkbox>
                        );
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col">
                      <Checkbox size="lg">
                        <span className="text-2xl">Adjustable Nose Pads</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-2xl">Lightweight</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-2xl">Bifocal</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-2xl">For Wide Face</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-2xl">For Small Face</span>
                      </Checkbox>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
