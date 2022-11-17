import Navbar from "../components/navbar";
import { useEffect, lazy, Suspense } from "react";
// import Menu from "../components/shoppingPageMenu";
import Card from "../components/card";
import { gsap } from "gsap";
import { useRef } from "react";
import { supabase } from "../supabaseClient";
import { useState } from "react";
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
const Menu = lazy(() => import("../components/shoppingPageMenu"));

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

      console.log("this is the materials ", Materials);
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(selectedFiltersActions.getMaterials(materials));
    }
  };

  const getSizes = async () => {
    try {
      const { data, error } = await supabase.from("Sizes").select();

      setSizes(data);
    } catch (error) {
      alert(error.message);
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

  // get product on filter changes

  useEffect(() => {
    getProducts();
  }, [genders, brands, shapes, rims]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Products")
        .select()
        .order("created_at", { ascending: false })
        .in("Brand", brands)
        .in("Gender", genders)
        .in("Shape", shapes);

      if (error) throw error;
      setProducts(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (products === []) {
        getProducts();
      }
    }, 7000);
  }, []);

  const mainBg = useRef();
  const filterMenu = useRef();

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
              <Menu className=""></Menu>
            </Suspense>

            <div className="flex flex-row-reverse justify-around items-center space-x-4">
              <button onClick={getFilters} className="text-3xl text-mainWhite">
                clear
              </button>
            </div>
          </div>
          <div className="bg-CoolGray-700 flex  item-center w-full px-6">
            {brands.length < 8
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
            {shapes.length < 7
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
        </div>
      </div>
    </div>
  );
}
