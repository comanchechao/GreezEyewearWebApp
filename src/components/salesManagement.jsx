import {
  Sunglasses,
  Eye,
  Eyeglasses,
  ArrowArcLeft,
  Trash,
  Plus,
  Airplay,
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
import { useTranslation } from "react-i18next";
import { use } from "i18next";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function salesManagement() {
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tab, setTab] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  // setting the product to submit

  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState(0);
  const [Brand, setBrand] = useState("");
  const [Gender, setGender] = useState("");
  const [Material, setMaterial] = useState("");
  const [Shape, setShape] = useState("");
  const [Size, setSize] = useState("");
  const [Rim, setRim] = useState("");
  const [Feature, setFeature] = useState("");

  // handle product submit

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data, error } = await supabase.from("Products").insert([
        {
          Category: tab,
          Title,
          Price,
          Brand,
          Material,
          Gender,
          Shape,
          Rim,
          Feature,
          Size,
        },
      ]);
      if (error) throw error;
      console.log(data);
      alert("Product added");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  useEffect(() => {
    console.log(Brand, Gender, Material, Shape, Size, Rim, Feature);
  });

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
              <h1 className="text-4xl lg:text-6xl">{t("sunGlasses")}</h1>
              <p className="text-lg">{t("stock")}: 24</p>
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
              <h1 className="text-4xl lg:text-6xl">{t("lenses")}</h1>
              <p className="text-lg">{t("stock")}: 24</p>
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
              <h1 className="text-4xl lg:text-6xl">{t("eyeGlasses")}</h1>
              <p className="text-lg">{t("stock")}: 24</p>
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
              <ArrowArcLeft color="black" size={48}></ArrowArcLeft>
            </button>
            <h1 className="font-bold text-5xl text-CoolGray-800">{tab}</h1>
          </div>
          <div className="flex flex-col space-y-4 divide-y-4 p-5">
            <div className="flex justify-center items-center w-full">
              <Button
                classNamw="bg-blueGray-300 w-full"
                p={12}
                onClick={onOpen}
              >
                <Plus color="black" className="p-1" size={80} />
              </Button>

              <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className="bg-CoolGray-900">
                  <ModalHeader className=" bg-CoolGray-900 text-mainCream">
                    {tab}
                    <div className="flex justify-end">
                      <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
                        Save
                      </Button>
                      <Button
                        className="bg-red-500"
                        onClick={onClose}
                        variant="ghost"
                      >
                        Cancel
                      </Button>
                    </div>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody className="flex h-screen space-y-2 justify-start h-full items-center bg-CoolGray-900  flex-col w-full">
                    <div className="w-full my-4 h-full flex-row justify-around items-start flex">
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
                    <div className="flex p-4 bg-CoolGray-800 rounded w-full h-full overflow-y-scroll space-y-8 flex-col ">
                      <input
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="Title"
                      />
                      <input
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                      />
                      <select
                        onChange={(e) => {
                          setBrand(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">...</option>
                        <option value="ray band">ray band</option>
                        <option value="gentle monster">gentle monster</option>
                        <option value="dolcegabana">dolcegabana</option>
                      </select>
                      <select
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unisex">Unisex</option>
                      </select>
                      <select
                        onChange={(e) => {
                          setShape(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">...</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Round">Round</option>
                        <option value="Square">Square</option>
                        <option value="Aviator">Aviator</option>
                        <option value="Oval">Oval</option>
                        <option value="CatEye">Cat-Eye</option>
                        <option value="Polygon">Polygon</option>
                        <option value="Horn">Horn</option>
                      </select>
                      <select
                        onChange={(e) => {
                          setMaterial(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">...</option>
                        <option value="Acetate">Acetate</option>
                        <option value="TR">TR</option>
                        <option value="MemoryPlastic">Memory Plastic</option>
                        <option value="UItem">UItem</option>
                        <option value="SilicaGel">Silica Gel</option>
                        <option value="Metal">Metal</option>
                        <option value="MemoryMetal">Memory Metal</option>
                        <option value="Titanium">Titanium</option>
                      </select>
                      <select
                        onChange={(e) => {
                          setSize(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">...</option>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                      </select>
                      <select
                        onChange={(e) => {
                          setFeature(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">...</option>
                        <option value="AdjustiableNosePad">
                          Adjustiable Nose Pad
                        </option>
                        <option value="Lightweight">Lightweight</option>
                        <option value="Bifocal">Bifocal</option>
                        <option value="ForWideFace">For Wide Face</option>
                        <option value="ForSmallFace">For Small Face</option>
                      </select>
                      <select
                        onChange={(e) => {
                          setRim(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">...</option>
                        <option value="FullRim">Full Rim</option>
                        <option value="SemiRim">Semi Rim</option>
                        <option value="Rimless">Rimless</option>
                      </select>
                    </div>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="rounded-full w-20 h-20 bg-CoolGray-900"></h1>
              <h2 className="text-4xl font-bold">title</h2>
              <h2 className="text-3xl xs:hidden">25555 T</h2>
              <h2>
                <Airplay
                  className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                  size={50}
                />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="rounded-full w-20 h-20 bg-CoolGray-900"></h1>
              <h2 className="text-4xl font-bold">title</h2>
              <h2 className="text-3xl xs:hidden">25555 T</h2>
              <h2>
                <Airplay
                  className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                  size={50}
                />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="rounded-full w-20 h-20 bg-CoolGray-900"></h1>
              <h2 className="text-4xl font-bold">title</h2>
              <h2 className="text-3xl xs:hidden">25555 T</h2>
              <h2>
                <Airplay
                  className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                  size={50}
                />
              </h2>
            </div>
            <div className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24">
              <h1 className="rounded-full w-20 h-20 bg-CoolGray-900"></h1>
              <h2 className="text-4xl font-bold">title</h2>
              <h2 className="text-3xl xs:hidden">25555 T</h2>
              <h2>
                <Airplay
                  className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                  size={50}
                />
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
            <h1 className="text-3xl font-bold">Alex buy</h1>
            <h2 className="text-2xl">hour ago</h2>
            <h2>
              <Airplay
                className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                size={50}
              />
            </h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1 className="text-3xl font-bold">Alex buy</h1>
            <h2 className="text-2xl">an hour ago</h2>
            <h2>
              <Airplay
                className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                size={50}
              />
            </h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1 className="text-3xl font-bold">Alex buy</h1>
            <h2 className="text-2xl">an hour ago</h2>
            <h2>
              <Airplay
                className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                size={50}
              />
            </h2>
          </div>
          <div className="flex shadow-2xl flex-row justify-around bg-mainBlue justify-center items-center w-full h-24">
            <h1 className="text-3xl font-bold">Alex buy</h1>
            <h2 className="text-2xl">an hour ago</h2>
            <h2>
              <Airplay
                className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                size={50}
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
