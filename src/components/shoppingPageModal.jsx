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

export default function ShoppingMenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();

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
                      <Checkbox size="lg">
                        <span className="text-3xl">Ray-ban (12)</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-3xl">Mascot (40)</span>
                      </Checkbox>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col">
                      <Checkbox size="lg">
                        <span className="text-3xl">Unisex</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-3xl">Women</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-3xl">Men</span>
                      </Checkbox>
                      <Checkbox size="lg">
                        <span className="text-3xl">Kids</span>
                      </Checkbox>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col bg-mainWhite p-6 text-CoolGray-900">
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Rectangle</span>
                          <img
                            className="object-contain w-12"
                            src={shapeRectangle}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Square</span>
                          <img
                            className="object-contain w-12"
                            src={shapeSquare}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Aviator</span>
                          <img
                            className="object-contain w-12"
                            src={shapeAviator}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Oval</span>
                          <img
                            className="object-contain w-12"
                            src={shapeOval}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Round</span>
                          <img
                            className="object-contain w-12"
                            src={shapeRound}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Cat-eye</span>
                          <img
                            className="object-contain w-12"
                            src={shapeCat}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Polygon</span>
                          <img
                            className="object-contain w-12"
                            src={shapePolygon}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Horn</span>
                          <img
                            className="object-contain w-12"
                            src={shapeHorn}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" h-full w-full  ">
                      <h1 className="text-2xl font-black text-mainWhite p-3">
                        Plastic
                      </h1>
                      <div className="w-full h-full flex flex-col">
                        <Checkbox size="lg">
                          <span className="text-xl">Acetate</span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-xl">TR</span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-xl">Memory Plastic</span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-xl">Ultem</span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-xl">Silica Gel</span>
                        </Checkbox>
                      </div>
                    </div>
                    <div className=" h-full w-full  ">
                      <h1 className="text-2xl font-black text-mainWhite p-3">
                        Metal
                      </h1>
                      <div className="w-full h-full flex flex-col">
                        <Checkbox size="lg">
                          <span className="text-xl">Metal</span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-xl">Memory Metal</span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-xl">Titanium</span>
                        </Checkbox>
                      </div>

                      <div className=" h-full w-full ">
                        <h1 className="text-2xl font-black text-mainWhite p-3 ">
                          Mixed Material
                        </h1>

                        <Checkbox size="lg">
                          <span className="text-xl text-center">
                            Mixed Materials
                          </span>
                        </Checkbox>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col">
                      <div className=" h-full w-full  ">
                        <h1 className="text-3xl font-black text-mainWhite p-3">
                          Total Width
                        </h1>
                        <Checkbox size="lg">
                          <span className="text-2xl">Small(129mm)</span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-2xl">
                            Medium(129mm to 135mm)
                          </span>
                        </Checkbox>
                        <Checkbox size="lg">
                          <span className="text-2xl">Large(135mm)</span>
                        </Checkbox>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-full flex flex-col bg-mainWhite text-CoolGray-900 p-4">
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Full-Rim</span>
                          <img
                            className="object-contain w-12"
                            src={FullRim}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Semi-Rimless</span>
                          <img
                            className="object-contain w-12"
                            src={SemiRimless}
                            alt=""
                          />
                        </div>
                      </Checkbox>
                      <Checkbox size="lg">
                        <div className="flex space-x-3">
                          <span className="text-3xl">Rimless</span>
                          <img
                            className="object-contain w-12"
                            src={Rimless}
                            alt=""
                          />
                        </div>
                      </Checkbox>
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
