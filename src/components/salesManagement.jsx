import {
  Sunglasses,
  Eye,
  Eyeglasses,
  ArrowArcLeft,
  Trash,
  Plus,
  Upload,
} from "phosphor-react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function salesManagement() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tab, setTab] = useState("");
  const [uploading, setUploading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-full bg-mainCream">
      {tab === "" ? (
        <div className="flex lg:h-68 lg:flex-row lg:space-x-5 lg:space-y-0 flex-col p-2 space-y-5 h-full flex-row justify-center justify-center items-start w-full">
          <button
            onClick={() => {
              setTab("Sun Glasses");
            }}
            className="flex flex-row w-full justify-around items-center lg:h-72 h-52 bg-CoolGray-800 hover:bg-CoolGray-900 transtition ease-all text-mainWhite"
          >
            <div className="flex p-2 space-y-4 flex-col">
              <h1 className="text-4xl lg:text-6xl">Sun Glasses</h1>
              <p className="text-lg">Stocks: 24</p>
            </div>
            <div className="flex justify-center items-center">
              <Sunglasses size={70}></Sunglasses>
            </div>
          </button>
          <button
            onClick={() => {
              setTab("Lenses");
            }}
            className="flex lg:h-72 flex-row w-full justify-around items-center h-52 bg-CoolGray-800 hover:bg-CoolGray-900 transtition ease-all text-mainWhite"
          >
            <div className="flex justify-center items-center space-y-4 p-2 flex-col">
              <h1 className="text-4xl lg:text-6xl">Lenses</h1>
              <p className="text-lg">Stocks: 24</p>
            </div>
            <div className="flex justify-center items-center">
              <Eye size={70}></Eye>
            </div>
          </button>
          <button
            onClick={() => {
              setTab("Eye Glasses");
            }}
            className="flex lg:h-72 flex-row justify-around items-center w-full h-52 bg-CoolGray-800 hover:bg-CoolGray-900 transtition ease-all text-mainWhite"
          >
            <div className="flex space-y-4 p-2 flex-col">
              <h1 className="text-4xl lg:text-6xl">Eye Glasses</h1>
              <p className="text-lg">Stocks: 24</p>
            </div>
            <div className="flex justify-center items-center">
              <Eyeglasses size={70}></Eyeglasses>
            </div>
          </button>
        </div>
      ) : tab !== "" ? (
        <div className="bg-CoolGray-800 w-11/12 h-54">
          <div className="w-full p-4 flex-row-reverse justify-between items-center bg-mainWhite h-24 flex mt-0">
            <button
              className="m-2"
              onClick={() => {
                setTab("");
              }}
            >
              <ArrowArcLeft color="white" size={48}></ArrowArcLeft>
            </button>
            <h1 className="font-bold text-5xl text-CoolGray-800">{tab}</h1>
          </div>
          <div className="flex flex-col space-y-2 divide-y-4 p-5">
            <div className="flex justify-center items-center w-full">
              <Button classNamw="bg-blueGray-300 p-5" mt={4} onClick={onOpen}>
                <Plus color="black" size={48} />
              </Button>

              <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className="bg-CoolGray-900">
                  <ModalHeader className=" bg-CoolGray-900 text-mainCream">
                    New Product
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody className="flex space-y-2 justify-start h-full items-center bg-CoolGray-900  flex-col w-full">
                    <div className="w-full h-full flex-row justify-around items-start flex">
                      <label
                        htmlFor="file1"
                        className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-mainWhite rounded-full text-white"
                      >
                        {uploading ? <Spinner /> : <Upload size={40}></Upload>}
                      </label>
                      <input
                        disabled={uploading}
                        id="file1"
                        type="file"
                        className="hidden"
                      />
                      <label
                        htmlFor="file1"
                        className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-mainWhite rounded-full text-white"
                      >
                        {uploading ? <Spinner /> : <Upload size={40}></Upload>}
                      </label>
                      <input
                        disabled={uploading}
                        id="file1"
                        type="file"
                        className="hidden"
                      />
                    </div>
                    <div className="flex w-full space-y-5 flex-col ">
                      <input
                        className="block p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="Title"
                      />
                      <input
                        className="block p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                      />
                      <select
                        className="block p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="ray band">ray band</option>
                        <option value="gentle monster">gentle monster</option>
                        <option value="dolcegabana">dolcegabana</option>
                      </select>
                      <select
                        className="block p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="ray band">elastic</option>
                        <option value="gentle monster">plastic</option>
                        <option value="dolcegabana">steel</option>
                        <option value="">metalic</option>
                      </select>
                      <select
                        className="block p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="ray band">round</option>
                        <option value="gentle monster">oval</option>
                        <option value="dolcegabana">squere</option>
                        <option value="">diomond</option>
                      </select>
                    </div>
                  </ModalBody>

                  <ModalFooter className="bg-CoolGray-900">
                    <Button colorScheme="blue" mr={3}>
                      Save
                    </Button>
                    <Button
                      className="bg-red-500"
                      onClick={onClose}
                      variant="ghost"
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="w-14 h-14 bg-yellow-900"></h1>
              <h2>25555 T</h2>
              <h2>
                <Trash />
              </h2>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex mt-5 w-11/12 flex-col bg-CoolGray-800">
        <div className="flex items-center bg-white h-24">
          <h1 className="font-bold text-4xl mx-4">latest sales</h1>
        </div>
        <div className="flex flex-col space-y-2 divide-y-4 p-5">
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1>first buy</h1>
            <h2>address</h2>
            <h2>phone number</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
