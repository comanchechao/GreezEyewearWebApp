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
  Spinner,
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

  // getting filters add putting them into a fliter array
  const [Genders, setGenders] = useState([]);
  const [Shapes, setShapes] = useState([]);
  const [Sizes, setSizes] = useState([]);
  const [Material, setMaterial] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [Rims, setRims] = useState([]);

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

  // setting the product to submit

  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState(0);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedRim, setSelectedRim] = useState("");
  const [selectedFeature, setFeature] = useState("");

  // product images upload

  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");

  // upload function

  const firstImageUpload = async (event) => {
    try {
      event.preventDefault();
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setFirstImage(filePath);

      let { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const secondImageUpload = async (event) => {
    try {
      event.preventDefault();
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setSecondImage(filePath);

      let { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  // handle product submit

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data, error } = await supabase.from("Products").insert([
        {
          Category: tab,
          firstImage,
          secondImage,
          Title,
          Price,
          Brand: selectedBrand,
          Material: selectedMaterial,
          Gender: selectedGender,
          Shape: selectedShape,
          Rim: selectedRim,
          Size: selectedSize,
        },
      ]);

      console.log(
        secondImage,
        Title,
        Price,
        selectedBrand,
        selectedMaterial,
        selectedGender,
        selectedShape,
        selectedRim,
        selectedSize
      );
      if (error) throw error;
      console.log(data);
      alert("Product added");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  // getProducts
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data, error } = await supabase.from("Products").select();

      if (error) throw error;
      console.log(data);
      setProducts(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
                        onChange={firstImageUpload}
                        disabled={uploading}
                        id="file1"
                        type="file"
                        className="hidden"
                      />
                      <label
                        htmlFor="file2"
                        className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-mainWhite rounded-full text-white"
                      >
                        {uploading ? <Spinner /> : <Upload size={40}></Upload>}
                      </label>
                      <input
                        onChange={secondImageUpload}
                        disabled={uploading}
                        id="file2"
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
                        placeholder="enter Title ..."
                      />
                      <input
                        placeholder="enter Price ..."
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                      />
                      <select
                        onChange={(e) => {
                          setSelectedBrand(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">select brand</option>
                        {Brands.map((brand) => {
                          return (
                            <option value={brand.Title}>{brand.Title}</option>
                          );
                        })}
                      </select>
                      <select
                        onChange={(e) => {
                          setSelectedGender(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">select genders</option>
                        {Genders.map((gender) => {
                          return (
                            <option value={gender.Title}>{gender.Title}</option>
                          );
                        })}
                      </select>
                      <select
                        onChange={(e) => {
                          setSelectedShape(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">select shape</option>
                        {Shapes.map((shape) => {
                          return (
                            <option value={shape.Title}>{shape.Title}</option>
                          );
                        })}
                      </select>
                      <select
                        onChange={(e) => {
                          setSelectedMaterial(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">select material</option>
                        {Material.map((mat) => {
                          return <option value={mat.Title}>{mat.Title}</option>;
                        })}
                      </select>
                      <select
                        onChange={(e) => {
                          setSelectedSize(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">select size</option>
                        {Sizes.map((size) => {
                          return (
                            <option value={size.Title}>{size.Title}</option>
                          );
                        })}
                      </select>
                      <select
                        onChange={(e) => {
                          setFeature(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">select face shape</option>
                        <option value="Oval">Oval</option>
                        <option value="Square">Square</option>
                        <option value="Round">Round</option>
                        <option value="Diamod">Diamond</option>
                        <option value="Pear">Pear</option>
                        <option value="Heart">Heart</option>
                      </select>
                      <select
                        onChange={(e) => {
                          setSelectedRim(e.target.value);
                        }}
                        className="block lg:p-5 p-2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name=""
                        id=""
                      >
                        <option value="">select rim</option>
                        {Rims.map((rim) => {
                          return <option value={rim.Title}>{rim.Title}</option>;
                        })}
                      </select>
                    </div>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
            {products.map((product) => {
              if (product.Category === tab) {
                return (
                  <div
                    key={product}
                    className="flex shadow-2xl flex-row justify-around bg-mainCream justify-center items-center w-full h-24"
                  >
                    <h1 className="rounded-full w-20 h-20 bg-CoolGray-900"></h1>
                    <h2 className="text-4xl font-bold">{product.Title}</h2>
                    <h2 className="text-3xl xs:hidden">{product.Price} T</h2>
                    <h2>
                      <Airplay
                        className="hover:bg-CoolGray-800 hover:text-mainWhite rounded-full p-1"
                        size={50}
                      />
                    </h2>
                  </div>
                );
              }
            })}
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
