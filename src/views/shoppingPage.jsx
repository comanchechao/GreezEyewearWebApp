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

  // handing store , fetching products and filter selection

  const dispatch = useDispatch();
  const genders = useSelector((state) => state.selectedFilters.gender);
  const brands = useSelector((state) => state.selectedFilters.brand);
  const shapes = useSelector((state) => state.selectedFilters.shape);
  const rims = useSelector((state) => state.selectedFilters.rim);

  const getProducts = async () => {
    try {
      console.log(genders);
      console.log(brands);
      console.log(shapes);
      setLoading(true);
      const { data, error } = await supabase
        .from("Products")
        .select()
        .order("created_at", { ascending: false })
        .in("Brand", brands)
        .in("Gender", genders)
        .in("Shape", shapes);

      if (error) throw error;
      console.log(data);
      setProducts(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtersLen =
      genders.length + shapes.length + brands.length + rims.length;

    console.log("lens is this what are you talking about ", filtersLen);
  });

  useEffect(() => {
    getProducts();
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

            <div>
              <button onClick={getProducts} className="text-6xl text-mainWhite">
                Get
              </button>
            </div>
          </div>
          <div className="bg-CoolGray-700 flex  item-center w-full px-6">
            {brands.length < 4
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
