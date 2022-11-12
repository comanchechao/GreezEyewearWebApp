import Navbar from "../components/navbar";
import { useEffect, lazy, Suspense } from "react";
// import Menu from "../components/shoppingPageMenu";
import Card from "../components/card";
import { gsap } from "gsap";
import { useRef } from "react";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { Box, Stack, SkeletonCircle } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
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
      <div className="flex mt-24 w-full  h-52 justify-between flex-row">
        {brands.map((brand) => {
          return (
            <div
              className="bg-blue-500 flex flex-col w-full h-52"
              key={brand.id}
            >
              <h2 className="text-3xl">{brand}</h2>
            </div>
          );
        })}
        {genders.map((gender) => {
          return (
            <div
              className="bg-red-500 flex flex-col w-full h-52"
              key={gender.id}
            >
              <h2 className="text-3xl">{gender}</h2>
            </div>
          );
        })}
        {shapes.map((shape) => {
          return (
            <div
              className="bg-green-500 flex flex-col w-full h-52"
              key={shape.id}
            >
              <h2 className="text-3xl">{shape}</h2>
            </div>
          );
        })}
        {rims.map((rim) => {
          return (
            <div
              className="bg-purple-500 flex flex-col w-full h-52"
              key={rim.id}
            >
              <h2 className="text-3xl">{rim}</h2>
            </div>
          );
        })}
      </div>

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
              <button onClick={getProducts} className="text-6xl bg-red-500">
                get
              </button>
            </div>
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
