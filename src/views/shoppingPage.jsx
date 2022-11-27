import Navbar from "../components/navbar";
import { useEffect, lazy, Suspense } from "react";
// import Menu from "../components/shoppingPageMenu";
import Card from "../components/card";
import { gsap } from "gsap";
import { useRef } from "react";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  SkeletonCircle,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectedFiltersActions } from "../Store/products/filterSelection";
const MainMenu = lazy(() => import("../components/shoppingPageMenu"));

export default function shoppingPage() {
  // getting products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // handing clear filters

  const [Genders, setGenders] = useState([]);
  const [Shapes, setShapes] = useState([]);
  const [Sizes, setSizes] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [Rims, setRims] = useState([]);
  const [Materials, setMaterials] = useState([]);

  // continue handing clear filters

  const getFilters = () => {
    getMaterial();
    getBrands();
    getGenders();
    getSizes();
    getShapes();
    getRims();
  };

  const clearFilters = () => {
    getMaterial();
    getBrands();
    getGenders();
    getSizes();
    getShapes();
    getRims();
    dispatch(selectedFiltersActions.clearPrices());
  };

  const getGenders = async () => {
    let genders = [];
    try {
      const { data, error } = await supabase.from("Genders").select();

      setGenders(data);
      data.forEach((gender) => {
        genders.push(gender.Title);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(selectedFiltersActions.getGenders(genders));
    }
  };

  const getBrands = async () => {
    let brands = [];
    try {
      const { data, error } = await supabase.from("Brands").select();

      setBrands(data);
      data.forEach((brand) => {
        brands.push(brand.Title);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(selectedFiltersActions.getBrands(brands));
    }
  };

  const getShapes = async () => {
    let shapes = [];
    try {
      const { data, error } = await supabase.from("Shapes").select();

      setShapes(data);
      data.forEach((shape) => {
        shapes.push(shape.Title);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(selectedFiltersActions.getShapes(shapes));
    }
  };

  const getMaterial = async () => {
    let materials = [];
    try {
      const { data, error } = await supabase.from("Material").select();
      setMaterials(data);

      data.forEach((material) => {
        materials.push(material.Title);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(selectedFiltersActions.getMaterials(materials));
    }
  };

  const getSizes = async () => {
    let sizes = [];
    try {
      const { data, error } = await supabase.from("Sizes").select();

      setSizes(data);
      data.forEach((size) => {
        sizes.push(size.Title);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(selectedFiltersActions.getSizes(sizes));
    }
  };

  const getRims = async () => {
    let rims = [];
    try {
      const { data, error } = await supabase.from("Rims").select();

      setRims(data);
      data.forEach((rim) => {
        rims.push(rim.Title);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(selectedFiltersActions.getRims(rims));
    }
  };

  // handing store , fetching products and filter selection

  const dispatch = useDispatch();
  const genders = useSelector((state) => state.selectedFilters.gender);
  const brands = useSelector((state) => state.selectedFilters.brand);
  const shapes = useSelector((state) => state.selectedFilters.shape);
  const rims = useSelector((state) => state.selectedFilters.rim);
  const materials = useSelector((state) => state.selectedFilters.material);
  const minPrice = useSelector((state) => state.selectedFilters.minPrice);
  const maxPrice = useSelector((state) => state.selectedFilters.maxPrice);
  const sizes = useSelector((state) => state.selectedFilters.size);

  useEffect(() => {
    console.log(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  // handing pagination and ascention and order

  const [ascendtion, setAscendtion] = useState(false);
  const [order, setOrder] = useState("created_at");

  const [to, setTo] = useState(2);
  const [from, setFrom] = useState(1);
  const [page, setPage] = useState(to - 1);

  useEffect(() => {
    if (!delay) {
      getProductsbyFilter();
    }
  }, [to]);

  // get product on filter changes

  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
      getFilters();
    }, 2500);
  }, []);

  // get products by filter mate

  useEffect(() => {
    if (!delay) {
      console.log("getproducts by filter fired");
      getProductsbyFilter();
    }
  }, [
    genders,
    brands,
    shapes,
    rims,
    maxPrice,
    minPrice,
    ascendtion,
    order,
    sizes,
  ]);

  // getting the empty fliter and reseting

  useEffect(() => {
    if (genders.length === 0 && !delay) {
      getGenders();
    }
    if (shapes.length === 0 && !delay) {
      getShapes();
    }
    if (brands.length === 0 && !delay) {
      getBrands();
    }
    if (rims.length === 0 && !delay) {
      getRims();
    }
    if (sizes.length === 0 && !delay) {
      getSizes();
    }
  }, [genders, brands, shapes, rims, sizes]);

  // getting products by filter function

  const getProductsbyFilter = async () => {
    console.log(
      "brands",
      brands,
      "genders",
      genders,
      "shapes ",
      shapes,
      "prices",
      maxPrice,
      minPrice
    );
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Products")
        .select()
        .order(order, { ascending: ascendtion })
        .in("Brand", brands)
        .in("Gender", genders)
        .in("Shape", shapes)
        .in("Rim", rims)
        .in("Size", sizes)
        .range(from - 1, to * 4)
        .lte("Price", maxPrice)
        .gte("Price", minPrice);

      if (error) throw error;
      setProducts(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // get all the products

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Products")
        .select()
        .order("created_at", { ascending: false })
        .range(from - 1, to * 4);

      if (error) throw error;
      setProducts(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  useEffect(() => {
    getFilters();
  }, []);

  const mainBg = useRef();
  const filterMenu = useRef();

  // Animations

  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(mainBg.current, {
      opacity: "0",
      y: -10,
      duration: 0.5,
      delay: 1,
    });
    tl.from(filterMenu.current, {
      opacity: "0",
      x: -10,
      duration: 0.4,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full w-screen overflow-x-hidden">
      <Navbar />

      <div className="h-full w-screen pt-20 lg:px-28 flex items-center justify-center bg-CoolGray-800">
        <div
          ref={mainBg}
          className=" h-full w-screen  mb-16 bg-mainCream mt-9 justify-center items-center flex flex-col  "
        >
          <div
            ref={filterMenu}
            className=" w-full h-24 flex items-center justify-start bg-CoolGray-900 z-10"
          >
            <Suspense>
              <MainMenu className=""></MainMenu>
            </Suspense>
          </div>
          <div className="flex bg-CoolGray-900 w-full px-3 justify-start   items-center space-x-2">
            <button
              onClick={clearFilters}
              className="p-4 text-md text-mainWhite transition ease-in duration-300 active:bg-mainBlue active:text-CoolGray-900 hover:bg-mainBlue hover:text-CoolGray-900 "
            >
              پاک کردن فیلترها
            </button>
            <Menu>
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
                چینش بر اساس
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => setOrder("Price") & setAscendtion(false)}
                >
                  گرون ترین
                </MenuItem>
                <MenuItem
                  onClick={() => setOrder("Price") & setAscendtion(true)}
                >
                  ارزان ترین
                </MenuItem>
                <MenuItem
                  onClick={() => setOrder("created_at") & setAscendtion(false)}
                >
                  جدیدترین
                </MenuItem>
                <MenuItem
                  onClick={() => setOrder("created_at") & setAscendtion(true)}
                >
                  قدیمی ترین
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="bg-CoolGray-700 flex  item-center w-full px-6">
            {brands.length < 11
              ? brands.map((brand) => {
                  return (
                    <Tag
                      key={brand.id}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      className="mx-1 my-3"
                    >
                      <TagLabel>{brand}</TagLabel>
                      <TagCloseButton
                        onClick={() => {
                          dispatch(selectedFiltersActions.removeBrand(brand));
                        }}
                      />
                    </Tag>
                  );
                })
              : null}
            {materials.length < 8
              ? materials.map((material) => {
                  return (
                    <Tag
                      key={material.id}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      className="mx-1 my-3"
                    >
                      <TagLabel>{material}</TagLabel>
                      <TagCloseButton
                        onClick={() => {
                          dispatch(
                            selectedFiltersActions.removeMaterial(material)
                          );
                        }}
                      />
                    </Tag>
                  );
                })
              : null}
            {genders.length < 4
              ? genders.map((gender) => {
                  return (
                    <Tag
                      key={gender.id}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      className="mx-1 my-3"
                    >
                      <h1>{gender}</h1>
                      <TagCloseButton
                        onClick={() => {
                          dispatch(selectedFiltersActions.removeGender(gender));
                        }}
                      />
                    </Tag>
                  );
                })
              : null}
            {shapes.length < 8
              ? shapes.map((shape) => {
                  return (
                    <Tag
                      key={shape.id}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      className="mx-1 my-3"
                    >
                      <TagLabel>{shape}</TagLabel>
                      <TagCloseButton
                        onClick={() => {
                          dispatch(selectedFiltersActions.removeShape(shape));
                        }}
                      />
                    </Tag>
                  );
                })
              : null}
            {rims.length < 3
              ? rims.map((rim) => {
                  return (
                    <Tag
                      key={rim.id}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      className="mx-1 my-3"
                    >
                      <TagLabel>{rim}</TagLabel>
                      <TagCloseButton
                        onClick={() => {
                          dispatch(selectedFiltersActions.removeRim(rim));
                        }}
                      />
                    </Tag>
                  );
                })
              : null}
            {sizes.length < 2
              ? sizes.map((size) => {
                  return (
                    <Tag
                      key={size.id}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      className="mx-1 my-3"
                    >
                      <TagLabel>{size}</TagLabel>
                      <TagCloseButton
                        onClick={() => {
                          dispatch(selectedFiltersActions.removeSize(size));
                        }}
                      />
                    </Tag>
                  );
                })
              : null}
          </div>
          {loading === false ? (
            <div className="h-full w-full bg-mainCream grid justify-items-center grid-cols-1 lg:grid-cols-3 grid-rows-1  px-5">
              {products.map((product) => {
                return <Card key={product.id} product={product} />;
              })}
            </div>
          ) : (
            <div className=" w-full h-full rounded ">
              <Box padding="10" boxShadow="lg" bg="silver">
                <Stack>
                  <div className="h-full w-full flex flex-col items-center justify-around space-y-20 flex-wrap">
                    <div className="flex items-center w-full lg:flex-row flex-col justify-around">
                      <SkeletonCircle size="180" />
                      <SkeletonCircle size="180" />
                      <SkeletonCircle size="180" />
                    </div>
                    <div className="flex items-center w-full lg:flex-row flex-col justify-around">
                      <SkeletonCircle size="180" />
                      <SkeletonCircle size="180" />
                      <SkeletonCircle size="180" />
                    </div>
                  </div>
                </Stack>
              </Box>
            </div>
          )}
          <div className=" flex-row flex justify-around    w-full items-center mt-6 align-center">
            <p
              className="rounded-full flex flex-col space-y-4 text-2xl items-center my-6 transition ease-in hover:bg-mainBlue duration-300 px-24 py-2 bg-mainWhite text-CoolGray-900 border-2 border-dashed border-CoolGray-900 hover:text-CoolGray-900 justify-center align-center cursor-pointer"
              onClick={(e) => {
                setTo(to + 1);
              }}
            >
              <span>بیشتر نشونم بده</span>
              {/* <ArrowDown size={30} weight="fill" /> */}
            </p>
            {/* <p className="rounded-full text-black text-2xl p-4 flex items-center bg-gray-50 w-10 h-10 justify-center align-center cursor-pointer">
              {to - 1}
            </p>
            <p
              className="rounded-full flex items-center my-6 transition ease-in hover:bg-mainBlue duration-300 bg-gray-50 w-12 h-12 justify-center align-center cursor-pointer"
              onClick={(e) => {
                setTo(to + 1);
              }}
            >
              <ArrowRight size={20} weight="fill" />
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
