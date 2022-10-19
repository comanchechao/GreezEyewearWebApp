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
export default function ShoppingMenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className=" px-10 flex space-x-2 items-center transition ease-in duration-300 border-l-4 hover:text-CoolGray-900 active:text-CoolGray-900
        hover:bg-mainBlue border-mainBlue active:bg-mainBlue py-1 text-3xl my-3   text-mainWhite rounded-full"
        onClick={onOpen}
      >
        <span>Filters</span>
        <Sliders size={32} weight="fill" />
        <CaretDown size={20} weight="fill" />
      </button>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-screen   h-screen bg-CoolGray-900 text-mainWhite">
            <ModalHeader>
              <span className="text-4xl my-7">Choose Your Filters</span>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tabs isFitted>
                <TabList mb="1em">
                  <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                    <span className="  text-2xl font-bold">Brands</span>
                  </Tab>
                  <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                    <span className="  text-2xl font-bold">Genders</span>
                  </Tab>
                  <Tab _selected={{ color: "black", bg: "cyan.300" }}>
                    <span className="  text-2xl font-bold">Shape</span>
                  </Tab>
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
                    <div className="w-full h-full flex flex-col">
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
                </TabPanels>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <button onClick={onClose}>Close</button>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
